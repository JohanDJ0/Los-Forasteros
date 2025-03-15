// src/pages/Home.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";
import VideoSection from "../components/VideoSection";
import { useLocation } from "react-router-dom"; // Importa useLocation

// Imágenes de la banda
const bandImages = [
  "https://res.cloudinary.com/dxh55fgry/image/upload/v1740869107/264443662_2635324803269617_625537783365892641_n_ueaoha.jpg",
  "https://res.cloudinary.com/dxh55fgry/image/upload/v1740869107/419862818_3294067860728638_3923430776336365367_n_tpzo2d.jpg",
  "https://res.cloudinary.com/dxh55fgry/image/upload/v1740869706/273710493_2700172353451528_8287438174170471699_n_ssseqd.jpg",
];

// Componente principal
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation(); // Obtén la ubicación actual

  // Cambiar a la siguiente diapositiva
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bandImages.length);
  };

  // Cambiar a la diapositiva anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bandImages.length) % bandImages.length);
  };

  // Cambiar automáticamente las diapositivas cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Función para hacer scroll suave a una sección
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Efecto para manejar el scroll después de redirigir
  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location.state]);

  const videos = ["https://www.youtube.com/embed/G0VDgl_nhqk"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navegación */}

      {/* Carrusel de imágenes */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={bandImages[currentSlide]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
            alt="Band performance"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <motion.img
              src="https://res.cloudinary.com/dxh55fgry/image/upload/v1740871174/318185153_2989802217821872_6505604956770001485_n-Photoroom_jtua1i.png"
              alt="Logo de Los Forasteros"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="w-[600px] md:w-[800px] lg:w-[1000px] mx-auto"
            />
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white"
            >
              Auténtica Música Norteña
            </motion.p>
          </div>
        </div>

        {/* Botones de navegación del carrusel */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <BsChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <BsChevronRight />
        </button>
      </div>

      {/* Sección de Biografía */}
      <section id="biography" className="py-20 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-[#FFD700] mb-8 text-center">Biografía</h2>
          <p className="text-lg leading-relaxed mb-6">
            Los Forasteros es un grupo norteño que ha logrado ganarse un lugar especial en el corazón de
             los amantes de la música regional mexicana. Con un estilo que combina lo clásico y lo moderno, este 
             conjunto ha llevado la esencia de la música norteña a todos los rincones de México, interpretando con pasión y autenticidad los éxitos de los artistas más reconocidos del género.
          </p>
          <p className="text-lg leading-relaxed">
          El grupo se caracteriza por interpretar canciones de grandes íconos de la música mexicana,
           como Los Tigres del Norte, Ramón Ayala, Los Cadetes de Linares, Conjunto Primavera, entre otros.
          </p>
        </div>
      </section>

      {/* Sección de Videos */}
      <VideoSection videos={videos} />

      {/* Sección de Contacto */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-[#FFD700] mb-12">Contacto</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Llámanos</h3>
            <a href="tel:+52-249-127-6814" className="text-3xl text-[#FFD700] hover:text-[#9E7A4A] transition-colors">
              +52 249 127 68 14
            </a>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Síguenos</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/sinoe.dejesusmerced.9" className="transform hover:scale-110 transition-transform p-4 bg-[#1a1a1a] rounded-full hover:bg-[#FFD700] group">
                <FaFacebookF className="text-2xl text-[#FFD700] group-hover:text-black" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform p-4 bg-[#1a1a1a] rounded-full hover:bg-[#FFD700] group">
                <FaInstagram className="text-2xl text-[#FFD700] group-hover:text-black" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform p-4 bg-[#1a1a1a] rounded-full hover:bg-[#FFD700] group">
                <FaYoutube className="text-2xl text-[#FFD700] group-hover:text-black" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform p-4 bg-[#1a1a1a] rounded-full hover:bg-[#FFD700] group">
                <FaSpotify className="text-2xl text-[#FFD700] group-hover:text-black" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;