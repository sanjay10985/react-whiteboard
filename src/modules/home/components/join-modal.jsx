import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function DialogDemo() {
  const [board, setBoard] = useState("");
  const navigate = useNavigate();

  function handleJoinBoard() {
    navigate(board);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Join</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Board</DialogTitle>
          <DialogDescription>
            Add the board ID here. Click open when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="board" className="text-right">
              Board
            </Label>
            <Input
              id="board"
              value={board}
              onChange={(e) => setBoard(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => handleJoinBoard()}>
            Open
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
