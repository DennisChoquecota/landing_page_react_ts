import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAVBAR } from "../../db/db";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["Inicio", "Servicios", "Productos", "Portafolio", "Contáctanos"];

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={`${NAVBAR.bg === "" ? "bg-white" : NAVBAR.bg} shadow-md sticky top-0 w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={NAVBAR.img} className="h-10 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 font-semibold ">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`${NAVBAR.hover === "" ? "hover:text-[#320016]" : NAVBAR.hover} ${NAVBAR.text === "" ? "text-primary" : NAVBAR.text}  transition`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className={`${NAVBAR.bg === "" ? "bg-white" : NAVBAR.bg} md:hidden px-2 pt-2 pb-3 space-y-1 shadow`}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`${NAVBAR.text} ${NAVBAR.hover} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setMenuOpen(false)} // se cierra al hacer clic
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
