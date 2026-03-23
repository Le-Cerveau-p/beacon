import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  // Placeholder images - you can replace these with your own images later
  const galleryImages = [
    {
      src: "/community-Development.jpg",
      alt: "Community Development",
    },
    {
      src: "/education-programs.jpg",
      alt: "Education Programs",
    },
    {
      src: "/sustainable-agriculture.jpg",
      alt: "Sustainable Agriculture",
    },
    {
      src: "/clean-water-access.jpg",
      alt: "Clean Water Access",
    },
    {
      src: "/women-empowerment.jpg",
      alt: "Women Empowerment",
    },
    {
      src: "/healthcare-services.jpg",
      alt: "Healthcare Services",
    },
  ];

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  const handlePrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === 0
        ? galleryImages.length - 1
        : selectedImageIndex - 1,
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === galleryImages.length - 1
        ? 0
        : selectedImageIndex + 1,
    );
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-[#0c6708] mb-4">
            OUR GALLERY
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore the impact of our work through images from our projects and
            communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-square cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-[#c5ba80] transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 text-white hover:text-[#c5ba80] transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-xl">
                {galleryImages[selectedImageIndex].alt}
              </p>
              <p className="text-white/70 text-sm mt-2">
                {selectedImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 text-white hover:text-[#c5ba80] transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}
