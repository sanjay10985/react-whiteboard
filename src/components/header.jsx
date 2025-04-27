import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth";
import { ArrowLeft, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header({ title, actions, showBackButton = true }) {
  const navigate = useNavigate();
  const { signOutUser } = useAuth();

  return (
    <div className="w-full flex justify-between items-center bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100 text-gray-700"
          >
            <ArrowLeft />
          </Button>
        )}
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        {actions}
        <Button
          variant="outline"
          onClick={() => signOutUser()}
          className="bg-white hover:bg-gray-50 text-gray-800"
        >
          <LogOut className="size-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
