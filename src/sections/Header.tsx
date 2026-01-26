import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "../assets/Logo-boedefuelling.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { label: "Automatisierung", href: "/services/automatisierung" },
    { label: "KI & Datenanalyse", href: "/services/ki-datenanalyse" },
    { label: "Enterprise Knowledge KI", href: "/services/enterprise-knowledge-ai" },
  ];

  const trainings = [
    { label: "KI Workshops", href: "/trainings#ki-workshops" },
    { label: "Cloud Workshops", href: "/trainings#cloud-workshops" },
  ];


  const navItems = [
    { label: "Dienstleistungen", href: "/services", hasDropdown: true },
    { label: "Branchen", href: "/industries" },
    { label: "Fallstudien", href: "/cases" },
    { label: "Trainings", href: "/trainings" },
    { label: "Unternehmen", href: "/company" },
    { label: "Karriere", href: "/careers" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/70 backdrop-blur-md border-slate-200/50 shadow-sm py-3"
          : "bg-transparent border-transparent py-5",
      )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="Boedefuelling Logo" className="h-8 md:h-14" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              {item.hasDropdown ? (
                <>
                  <button
                    onMouseEnter={() => {
                      if (dropdownTimeout) clearTimeout(dropdownTimeout);
                      setOpenDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setOpenDropdown(null), 200);
                      setDropdownTimeout(timeout);
                    }}
                    className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-300",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>

                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: openDropdown === item.label ? 1 : 0,
                      y: openDropdown === item.label ? 0 : -10,
                      pointerEvents: openDropdown === item.label ? "auto" : "none",
                    }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => {
                      if (dropdownTimeout) clearTimeout(dropdownTimeout);
                      setOpenDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setOpenDropdown(null), 200);
                      setDropdownTimeout(timeout);
                    }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-slate-200/50 overflow-hidden">
                    {(item.label === "Dienstleistungen" ? services : trainings).map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-brand-primary/10 hover:text-slate-900 transition-colors border-b border-slate-200/30 last:border-b-0">
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
            variant="brand"
            className="rounded-full shadow-brand-primary/20">
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
