import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopInfoBar = () => {
  return (
    <div className="h-10 bg-muted/60 border-b border-border/70">
      <div className="container-max h-full flex items-center justify-end gap-3 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:+923216336373" className="hover:text-foreground transition-colors">
              +92-321-6336373
            </a>
            <span className="text-border">|</span>
            <a href="tel:+92612119466" className="hover:text-foreground transition-colors">
              +92-61-2119466
            </a>
          </div>

          <div className="hidden sm:block w-px h-5 bg-border" />

          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:support@hadyafoundation.org" className="hover:text-foreground transition-colors">
              support@hadyafoundation.org
            </a>
          </div>

          <Button variant="accent" size="sm" className="h-8 px-3 rounded-full" asChild>
            <Link to="/donate">
              <Heart className="w-3.5 h-3.5" />
              Donate
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
