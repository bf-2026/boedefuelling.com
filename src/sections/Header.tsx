import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo-boedefuelling.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Dienstleistungen", href: "/services" },
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
        scrolled || mobileMenuOpen
          ? "bg-white/90 backdrop-blur-md border-slate-200/50 shadow-sm py-3"
          : "bg-transparent border-transparent py-5",
      )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={logo} alt="Boedefuelling Logo" className="h-8 md:h-14" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                to={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
            variant="brand"
            className="hidden md:inline-flex rounded-full shadow-brand-primary/20">
            Kontakt aufnehmen
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.href} className="flex flex-col">
                  <Link
                    to={item.href}
                    className="font-medium text-slate-900 py-2 hover:text-brand-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <Button
                  href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
                  variant="brand"
                  className="w-full justify-center rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
