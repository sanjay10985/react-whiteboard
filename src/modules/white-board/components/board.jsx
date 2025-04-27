import { useRef } from "react";
import usePaintBoard from "@/hooks/white-board/usePaintBoard";

export default function Board() {
  const canvasRef = useRef(null);

  usePaintBoard({ canvasRef });

  return (
    <canvas ref={canvasRef} width={1200} height={700} className="border" />
  );
}
