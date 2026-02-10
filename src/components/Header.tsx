import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import hadyaLogo from "@/assets/hadya-logo.png";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Thalassemia", href: "/thalassemia" },
  { label: "Programs", href: "/programs" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container-max h-16 px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
            <img src={hadyaLogo} alt="Hadya Foundation" className="w-9 h-9 object-contain" />
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              Hadya<span className="text-primary"> Foundation</span>
            </span>
          </Link>

          {isMobile ? (
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-foreground"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          ) : (
            <nav className="flex flex-1 justify-end items-center gap-1 ml-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Mobile Nav */}
        {isMobile && mobileOpen && (
          <nav className="border-t border-border bg-card/95 backdrop-blur-md">
            <div className="container-max px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
};

export default Header;
