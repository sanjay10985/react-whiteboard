import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { useParams } from "react-router-dom";

export default function usePaintBoard({ canvasRef }) {
  const { sessionId } = useParams();
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState([]);

  const strokesCol = collection(db, "sessions", sessionId, "strokes");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Set drawing styles
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    const handleMouseDown = (e) => {
      // Start a new stroke
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
      setIsDrawing(true);
      setCurrentStroke([{ x: e.offsetX, y: e.offsetY }]);
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      // Draw on canvas
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      // Append point to current stroke array
      setCurrentStroke((prev) => [...prev, { x: e.offsetX, y: e.offsetY }]);
    };

    const handleMouseUp = async () => {
      if (!isDrawing) return;
      setIsDrawing(false);
      ctx.closePath();
      // Only save if there's at least one segment
      if (currentStroke.length > 1) {
        await addDoc(strokesCol, {
          tool: "pen",
          path: currentStroke,
          color: "#000",
          width: 2,
          author: auth.currentUser.uid,
          createdAt: serverTimestamp(),
        });
      }
      setCurrentStroke([]);
    };

    // Attach event listeners once
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [sessionId, isDrawing, currentStroke]);

  useEffect(() => {
    const q = query(strokesCol, orderBy("createdAt"));
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Ensure path styles
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const unsubscribe = onSnapshot(q, (snapshot) => {
      // Clear canvas before redrawing all strokes on snapshot refresh
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snapshot.docs.forEach((doc) => {
        const { path, color, width } = doc.data();
        if (path.length < 2) return;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
          ctx.lineTo(path[i].x, path[i].y);
        }
        ctx.stroke();
        ctx.closePath();
      });
    });

    return () => unsubscribe();
  }, [sessionId]);
}
