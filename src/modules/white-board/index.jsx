import Header from "@/components/header";
import Board from "./components/board";
import Actions from "./components/actions";
import { useEffect } from "react";

export default function MainWhiteBoard() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8 space-y-4">
      <Header title="Virtual Whiteboard" actions={<Actions />} />
      <div className="max-w-7xl mx-auto space-y-8 bg-white/80 backdrop-blur-sm shadow-xl rounded-lg p-8">
        <Board />
      </div>
    </div>
  );
}
