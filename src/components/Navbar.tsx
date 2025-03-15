// components/Navbar.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importa useLocation
import { Link } from "react-router-dom";

interface NavbarProps {
  scrollToSection?: (id: string) => void; // Hacer scrollToSection opcional
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtén la ubicación actual

  const handleScrollToSection = (id: string) => {
    if (location.pathname === "/" && scrollToSection) {
      // Si estás en Home y scrollToSection está definido, haz scroll
      scrollToSection(id);
    } else {
      // Si no estás en Home, redirige a Home y pasa el id de la sección como estado
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src="https://res.cloudinary.com/dxh55fgry/image/upload/v1740869888/logoForasteros_zqh8j6.png"
          alt="Los Forasteros Logo"
          className="h-12 md:h-16 lg:h-20 object-contain"
        />
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-[#FFD700] transition-colors">
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
            onClick={() => navigate("/gallery")}
            className="text-white hover:text-[#FFD700] transition-colors"
          >
            Galería
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;