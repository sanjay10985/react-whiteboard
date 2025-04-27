import { useRef } from "react";
import usePaintBoard from "@/hooks/white-board/usePaintBoard";

export default function Board() {
  const canvasRef = useRef(null);

  usePaintBoard({ canvasRef });

  return <canvas ref={canvasRef} width={800} height={500} className="border" />;
}
