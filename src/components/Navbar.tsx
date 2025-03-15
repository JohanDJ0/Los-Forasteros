// components/Navbar.tsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importa useLocation
import { Link } from "react-router-dom";

interface NavbarProps {
  scrollToSection?: (id: string) => void; // Hacer scrollToSection opcional
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtén la ubicación actual
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    if (location.pathname === "/" && scrollToSection) {
      // Si estás en Home y scrollToSection está definido, haz scroll
      scrollToSection(id);
    } else {
      // Si no estás en Home, redirige a Home y pasa el id de la sección como estado
      navigate("/", { state: { scrollTo: id } });
    }
    setIsMenuOpen(false); // Cerrar el menú después de hacer clic
  };

  const NavLinks = () => (
    <>
      <Link to="/" className="text-white hover:text-[#FFD700] transition-colors" onClick={() => setIsMenuOpen(false)}>
        Inicio
      </Link>
      <button
        onClick={() => handleScrollToSection("biography")}
        className="text-white hover:text-[#FFD700] transition-colors"
      >
        Biografía
      </button>
      <button
        onClick={() => handleScrollToSection("videos")}
        className="text-white hover:text-[#FFD700] transition-colors"
      >
        Videos
      </button>
      <button
        onClick={() => handleScrollToSection("contact")}
        className="text-white hover:text-[#FFD700] transition-colors"
      >
        Contacto
      </button>
      <button
        onClick={() => {
          navigate("/gallery");
          setIsMenuOpen(false);
        }}
        className="text-white hover:text-[#FFD700] transition-colors"
      >
        Galería
      </button>
    </>
  );

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src="https://res.cloudinary.com/dxh55fgry/image/upload/v1740869888/logoForasteros_zqh8j6.png"
          alt="Los Forasteros Logo"
          className="h-8 w-auto sm:h-12 md:h-16 lg:h-20 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/Forasteros.ico"; // Usar el icono como respaldo
            target.onerror = null; // Prevenir bucle infinito
          }}
        />
        
        {/* Menú de escritorio */}
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black bg-opacity-95 md:hidden flex flex-col items-center space-y-4 py-4">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;