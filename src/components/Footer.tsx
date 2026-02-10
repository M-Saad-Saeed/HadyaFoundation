import { Mail, Phone, MapPin } from "lucide-react";
import hadyaLogo from "@/assets/hadya-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/80">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-white/95 flex items-center justify-center p-1">
                <img src={hadyaLogo} alt="Hadya Foundation" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-extrabold">
                Hadya<span className="text-white"> Foundation</span>
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Empowering lives affected by thalassemia through care, awareness, and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-80">Quick Links</h4>
            <ul className="space-y-2.5">
              {["About Us", "Programs", "Get Involved", "Donate", "Events"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-80">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Hassan Parwana Colony, Multan, Pakistan, 6000</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm opacity-70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+92-321-6336373 / +92-61-2119466</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm opacity-70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>support@hadyafoundation.org</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-80">Follow Us</h4>
            <div className="flex gap-3">
              {["Facebook", "Twitter", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm font-bold transition-colors"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Hadya Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
