import Loader from "@/components/loader";

import { useBoard } from "@/contexts/board";
import ExistingBoards from "./components/existing-boards";
import Header from "@/components/header";
import Actions from "./components/actions";

export default function Home() {
  const { isLoading } = useBoard();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <Header title="Boards" actions={<Actions />} showBackButton={false} />
        <ExistingBoards />
      </div>
    </div>
  );
}
