import Board from "./components/board";
import Header from "./components/header";

export default function MainWhiteBoard() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <Header />
        <Board />
      </div>
    </div>
  );
}
