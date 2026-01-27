import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/Logo-boedefuelling.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<"de" | "en">("de");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);

  const services = {
    de: [
      { label: "Cloud Services & Automation", href: "/services/cloud-services-automation" },
      { label: "KI & Datenanalyse", href: "/services/ki-datenanalyse" },
      { label: "Enterprise AI Workflow System", href: "/services/enterprise-ai-workflow" },
    ],
    en: [
      { label: "Cloud Services & Automation", href: "/services/cloud-services-automation" },
      { label: "AI & Data Analytics", href: "/services/ai-data-analytics" },
      { label: "Enterprise AI Workflow System", href: "/services/enterprise-ai-workflow" },
    ],
  };

  const trainings = {
    de: [
      { label: "KI Training-Programme", href: "/trainings#ki-programme" },
      { label: "KI Workshops & Spezialisierungen", href: "/trainings#ki-workshops" },
      { label: "Cloud & Infrastructure Workshops", href: "/trainings#cloud-workshops" },
    ],
    en: [
      { label: "AI Training Programs", href: "/trainings#ai-programmes" },
      { label: "AI Workshops & Specializations", href: "/trainings#ai-workshops" },
      { label: "Cloud & Infrastructure Workshops", href: "/trainings#cloud-workshops" },
    ],
  };

  const navItems = {
    de: [
      { label: "Dienstleistungen", href: "/services", hasDropdown: true },
      { label: "Branchen", href: "/industries" },
      { label: "Fälle", href: "/cases" },
      { label: "Einblicke", href: "/insights" },
      { label: "Trainings", href: "/trainings", hasDropdown: true },
      { label: "Unternehmen", href: "/company" },
      { label: "Karriere", href: "/careers" },
    ],
    en: [
      { label: "Services", href: "/services", hasDropdown: true },
      { label: "Industries", href: "/industries" },
      { label: "Cases", href: "/cases" },
      { label: "Insights", href: "/insights" },
      { label: "Trainings", href: "/trainings", hasDropdown: true },
      { label: "Company", href: "/company" },
      { label: "Careers", href: "/careers" },
    ],
  };

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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems[language].map((item) => (
            <div key={item.href} className="relative group">
              {item.hasDropdown ? (
                <>
                  {(item.label === "Dienstleistungen" || item.label === "Services") ? (
                    <button
                      onMouseEnter={() => {
                        if (dropdownTimeout) clearTimeout(dropdownTimeout);
                        setOpenDropdown(item.label);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setOpenDropdown(null), 200);
                        setDropdownTimeout(timeout);
                      }}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors relative",
                        location.pathname.startsWith('/services')
                          ? "text-brand-primary font-semibold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-brand-primary after:rounded-full"
                          : "text-slate-700 hover:text-slate-900"
                      )}>
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-300",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onMouseEnter={() => {
                        if (dropdownTimeout) clearTimeout(dropdownTimeout);
                        setOpenDropdown(item.label);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setOpenDropdown(null), 200);
                        setDropdownTimeout(timeout);
                      }}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors relative",
                        location.pathname.startsWith('/trainings')
                          ? "text-brand-primary font-semibold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-brand-primary after:rounded-full"
                          : "text-slate-700 hover:text-slate-900"
                      )}>
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-300",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </Link>
                  )}

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
                    {(item.label === "Dienstleistungen" || item.label === "Services" ? services[language] : trainings[language]).map((service) => (
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
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    location.pathname === item.href
                      ? "text-brand-primary font-semibold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-brand-primary after:rounded-full"
                      : "text-slate-700 hover:text-slate-900"
                  )}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex bg-slate-200 rounded-full p-1">
            <button
              onClick={() => setLanguage("de")}
              className={cn(
                "px-3 py-1 text-sm font-medium rounded-full transition-colors",
                language === "de"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-700 hover:text-slate-900"
              )}>
              DE
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-3 py-1 text-sm font-medium rounded-full transition-colors",
                language === "en"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-700 hover:text-slate-900"
              )}>
              EN
            </button>
          </div>

          <Button
            href="https://cal.com/lucas-fuelling-ytra7k/30min"
            variant="brand"
            className="rounded-full shadow-brand-primary/20">
            Kontakt aufnehmen
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
          aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-slate-50 z-50 lg:hidden overflow-hidden">
            <div className="relative h-full flex flex-col px-6 py-6 overflow-y-auto overscroll-contain touch-auto">
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src={logo} alt="Boedefuelling Logo" className="h-10" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-brand-primary hover:text-white transition-all duration-200"
                  aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3">
              {navItems[language].map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full text-base font-semibold text-slate-800 py-3 px-3 rounded-lg hover:bg-slate-100 transition-all duration-200">
                        {item.label}
                        <ChevronDown
                          size={18}
                          className={cn(
                            "transition-transform duration-300 text-brand-primary",
                            openDropdown === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden">
                            <div className="pl-6 pr-3 space-y-1 mt-2 mb-2">
                              {(item.label === "Dienstleistungen" || item.label === "Services"
                                ? services[language]
                                : trainings[language]
                              ).map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  to={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-sm text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 py-2.5 px-3 rounded-md transition-all duration-200">
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base font-semibold text-slate-800 hover:text-brand-primary hover:bg-slate-100 py-3 px-3 rounded-lg transition-all duration-200">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              </div>

              <div className="space-y-4 pt-2 pb-16">
              <div className="flex gap-3">
                <button
                  onClick={() => setLanguage("de")}
                  className={cn(
                    "flex-1 px-4 py-2.5 text-sm font-semibold rounded-full transition-all duration-200",
                    language === "de"
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  )}>
                  DE
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "flex-1 px-4 py-2.5 text-sm font-semibold rounded-full transition-all duration-200",
                    language === "en"
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  )}>
                  EN
                </button>
              </div>

              <Button
                href="https://cal.com/lucas-fuelling-ytra7k/30min"
                variant="brand"
                className="w-full rounded-full shadow-lg shadow-brand-primary/30 mt-4">
                Kontakt aufnehmen
              </Button>
              </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
