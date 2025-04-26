// Whiteboard.jsx
import { useRef, useState, useEffect } from "react";

export default function Whiteboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleMouseDown = (e) => {
      setIsDrawing(true);
    };

    const handleMouseMove = (e) => {
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;

      if (isDrawing) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000";
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    };

    const handleMouseUp = (e) => {
      setIsDrawing(false);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDrawing]);

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Virtual Whiteboard
        </h1>

        {/* Canvas Area */}

        <canvas ref={canvasRef} width={700} height={500} className="border " />
      </div>
    </div>
  );
}
