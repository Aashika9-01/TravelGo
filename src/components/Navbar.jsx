import { useState, useEffect } from "react";
import { Compass, Menu, X } from "lucide-react";

export default function Navbar({ currentPage = "home", onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Destinations", id: "destinations" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5"
          : "bg-white/90 backdrop-blur-sm shadow-xs py-4"
      }`}
    >
      <div className="flex w-full items-center justify-between px-6 sm:px-10 lg:px-12">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 text-2xl font-black tracking-tight text-emerald-900 group cursor-pointer text-left"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-800 text-white shadow-md transition-transform duration-300 group-hover:rotate-12 group-hover:bg-orange-500">
            <Compass className="h-6 w-6" />
          </div>
          <span>
            Travel<span className="text-orange-500">Go</span>
            <span className="text-emerald-700">.</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-semibold transition duration-200 cursor-pointer ${
                currentPage === link.id
                  ? "text-orange-500 font-bold border-b-2 border-orange-500 pb-0.5"
                  : "text-gray-700 hover:text-orange-500 hover:-translate-y-0.5"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="rounded-xl p-2 text-gray-700 hover:bg-gray-100 md:hidden focus:outline-none cursor-pointer"
        >
          {isOpen ? <X className="h-7 w-7 text-gray-900" /> : <Menu className="h-7 w-7 text-gray-900" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-b border-gray-200 bg-white px-6 py-6 shadow-xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-semibold transition py-1 cursor-pointer ${
                  currentPage === link.id
                    ? "text-orange-500 font-bold"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}