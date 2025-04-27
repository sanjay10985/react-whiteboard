import { db } from "@/config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Card = ({ session }) => {
  const canvasRef = useRef(null);
  const strokesCol = collection(db, "sessions", session, "strokes");

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
  }, [session]);
  return (
    <Link
      to={session}
      className="block transition-all duration-300 hover:transform hover:scale-[1.02]"
    >
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="w-full rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
      />
    </Link>
  );
};

export default Card;
