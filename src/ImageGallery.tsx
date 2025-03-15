import { useState } from "react";

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Lista de imágenes con sus URLs
  const images = [
    "https://res.cloudinary.com/dxh55fgry/image/upload/v1740869706/273710493_2700172353451528_8287438174170471699_n_ssseqd.jpg",
    "https://res.cloudinary.com/dxh55fgry/image/upload/v1740869107/264443662_2635324803269617_625537783365892641_n_ueaoha.jpg",
    "https://res.cloudinary.com/dxh55fgry/image/upload/v1740869107/419862818_3294067860728638_3923430776336365367_n_tpzo2d.jpg",
    "https://res.cloudinary.com/dxh55fgry/image/upload/v1742014653/3dd4aad8-d832-4573-bd48-21462c9cc120.png",
    "https://res.cloudinary.com/dxh55fgry/image/upload/v1742014705/468186382_3618625888272832_4246298451963422958_n_hlgr5i.jpg",
    "https://res.cloudinary.com/dxh55fgry/image/upload/v1742014900/405981831_3259837467485011_1254765828793703120_n_vvfzat.jpg",
    "https://res.cloudinary.com/dxh55fgry/image/upload/v1742015020/6e04bc79-f6a8-482e-a276-bf3b25f64164.png",
    "https://res.cloudinary.com/dxh55fgry/image/upload/v1742017877/363416052_3176089405859818_8026367769103106376_n_ahrdoc.jpg",
    "https://res.cloudinary.com/dxh55fgry/image/upload/v1742017903/327131302_798084754984029_8770105259616925223_n_qd7qa2.jpg"
  ];

  // Función para manejar el clic en una imagen
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Función para cerrar la imagen en grande
  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  // Función para ir a la imagen anterior
  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) => {
      const currentIndex = prevIndex ?? 0; // Si prevIndex es null, usa 0
      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    });
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => {
      const currentIndex = prevIndex ?? 0; // Si prevIndex es null, usa 0
      return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    });
  };


  return (
    <div className="min-h-screen bg-[#1a1a1a] p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Image Gallery
        </h1>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={imageUrl}
                alt={`Imagen ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement; // Asegurar que es una imagen
                  target.src = "/placeholder.jpg";
                  target.onerror = null; // Evitar bucles infinitos
                }}
              />

            </div>
          ))}
        </div>

        {/* Modal para mostrar la imagen en grande */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            {/* Contenedor principal del modal */}
            <div className="flex items-center justify-between w-full max-w-6xl p-4">
              {/* Flecha izquierda */}
              <button
                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation(); // Evita que el clic cierre el modal
                  handlePrevious();
                }}
              >
                &larr; {/* Flecha izquierda */}
              </button>

              {/* Imagen seleccionada */}
              <div className="flex-1 mx-4">
                <img
                  src={images[selectedImageIndex] || "/placeholder.jpg"} // Evita errores si selectedImageIndex es null
                  alt="Imagen seleccionada"
                  className="max-h-[90vh] w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement; // Asegurar que es una imagen
                    target.src = "/placeholder.jpg";
                    target.onerror = null; // Evitar bucles infinitos
                  }}
                />

              </div>

              {/* Flecha derecha */}
              <button
                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation(); // Evita que el clic cierre el modal
                  handleNext();
                }}
              >
                &rarr; {/* Flecha derecha */}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;