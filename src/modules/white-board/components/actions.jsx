import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth";

export default function Actions() {
  const { signOutUser } = useAuth();
  return (
    <div className="flex gap-4">
      <Button>Share </Button>
      <Button onClick={() => signOutUser()}>SignOut</Button>
    </div>
  );
}
