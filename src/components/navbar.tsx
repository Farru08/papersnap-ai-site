
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-primary">
          PaperSnap
        </a>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="#try-it">Try Now</a>
          </Button>
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
