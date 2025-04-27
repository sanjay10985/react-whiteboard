import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Share } from "lucide-react";

import { useState } from "react";

export default function Actions() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex gap-4">
      <Button
        variant="outline"
        className="relative ml-2 rounded-md"
        onClick={copyToClipboard}
        aria-label={copied ? "Copied" : "Copy to clipboard"}
      >
        <span className="sr-only">{copied ? "Copied" : "Share"}</span>
        <Share
          className={`h-4 w-4 transition-all duration-300 ${
            copied ? "scale-0" : "scale-100"
          }`}
        />{" "}
        <Check
          className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
            copied ? "scale-100" : "scale-0"
          }`}
        />
        <span
          className={cn(
            `transition-all duration-300`,
            copied ? "scale-0" : "scale-100"
          )}
        >
          Share
        </span>
      </Button>
    </div>
  );
}
