import { Link } from "react-router-dom";
import hadyaLogo from "@/assets/hadya-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container-max flex items-center justify-between h-16 px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={hadyaLogo} alt="Hadya Foundation" className="w-9 h-9 object-contain" />
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              Hadya<span className="text-primary"> Foundation</span>
            </span>
          </Link>

          {/* Main Nav */}
          <nav className="flex items-center gap-1">
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
        </div>
      </div>
    </header>
  )
};

export default Header;
