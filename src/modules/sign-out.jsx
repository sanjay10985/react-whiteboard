import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth";

export default function Home() {
  const { signOutUser } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center min-h-svh gap-4">
      <Button onClick={() => signOutUser()}>SignOut</Button>
    </div>
  );
}
