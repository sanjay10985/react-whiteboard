import { Button } from "@/components/ui/button";
import { DialogDemo } from "./join-modal";
import { useNavigate } from "react-router-dom";
import { useBoard } from "@/contexts/board";
import { createSession } from "../utils";

export default function Actions() {
  const { setIsLoading } = useBoard();
  const navigate = useNavigate();
  async function handleSessionCreation() {
    try {
      setIsLoading(true);
      const sessionId = await createSession();
      setIsLoading(false);
      navigate(`/${sessionId}`);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      throw error;
    }
  }
  return (
    <div className="flex gap-4">
      <Button
        variant="outline"
        onClick={() => handleSessionCreation()}
        className="bg-white hover:bg-gray-50 text-gray-800 font-medium px-6 py-2 rounded-md transition-colors"
      >
        Create
      </Button>
      <DialogDemo />
    </div>
  );
}
