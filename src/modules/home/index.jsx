import Loader from "@/components/loader";
import Header from "./components/header";
import { useBoard } from "@/contexts/board";
import ExistingBoards from "./components/existing-boards";

export default function Home() {
  const { isLoading } = useBoard();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <Header />
      <ExistingBoards />
    </div>
  );
}
