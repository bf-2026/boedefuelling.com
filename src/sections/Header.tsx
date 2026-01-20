import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import logo from "../assets/Logo-boedefuelling.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Logo could be an image or text. Using text as per prompt for now, maybe with a styled dot or similar */}
          <div className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            <img src={logo} alt="Boedefuelling Logo" className="h-8 md:h-14" />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {/* Add navigation links here if needed later, prompt only requested the button */}
        </nav>

        <Button
          href="https://cal.com/lucas-fuelling-ytra7k/30min?overlayCalendar=true"
          variant="brand"
          className="rounded-full shadow-brand-primary/20">
          Kontakt aufnehmen
        </Button>
      </div>
    </motion.header>
  );
}
