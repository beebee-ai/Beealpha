import { motion, AnimatePresence } from "motion/react";
import {
  Trophy,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { studentWorks } from "../data/student-works";

// LazyImage component using IntersectionObserver
const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <motion.img
      ref={imgRef}
      src={imageSrc || undefined}
      alt={alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: imageSrc ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    />
  );
};

function CardImageCarousel({
  images,
  title,
  url,
  isMobile,
}: {
  images: string[];
  title: string;
  url: string;
  isMobile?: boolean;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play carousel for multiple images
  useEffect(() => {
    if (images.length <= 1) return; // Don't auto-play if only one image

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % images.length,
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="relative aspect-video overflow-hidden block group/carousel bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Blurred Background */}
      {images[currentImageIndex] && (
        <div
          className="absolute inset-0 w-full h-full transition-all duration-500"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
            transform: "scale(1.1)",
            opacity: 0.6,
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-gray-800/30 to-gray-900/30" />

      {/* Main Image with crossfade */}
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <AnimatePresence initial={false}>
          <LazyImage
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={title}
            className={`absolute w-full h-full ${isMobile ? "object-contain" : "object-cover"}`}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 hover:bg-primary rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 backdrop-blur-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 hover:bg-primary rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 backdrop-blur-sm"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-primary w-4" : "bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function StudentWorks() {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      // Mobile (< 768px): 2 items
      // Desktop (>= 768px): 6 items
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(
    studentWorks.length / itemsPerPage,
  );

  // Ensure current page is valid after resize
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [itemsPerPage, totalPages, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage(
      (prev) => (prev - 1 + totalPages) % totalPages,
    );
  };

  const currentWorks = studentWorks.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <section
      id="student-works"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0e14]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Trophy size={16} />
              <span className="text-sm font-medium uppercase tracking-wider">
                {t("studentWorks.badge")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              {t("studentWorks.title")}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t("studentWorks.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 min-h-[500px] items-start"
          >
            {currentWorks.map((work, index) => (
              <a
                key={work.url}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-[#1a1f2e] to-[#151a27] rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 cursor-pointer block hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02]"
              >
                {/* Image Carousel */}
                <CardImageCarousel
                  images={work.images}
                  title={`Student Work ${index + 1}`}
                  url={work.url}
                  isMobile={work.isMobile}
                />

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col items-start gap-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {t(
                          `studentWorks.works.${studentWorks.indexOf(work)}.role`,
                          "Student Author",
                        )}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {t(
                          `studentWorks.works.${studentWorks.indexOf(work)}.title`,
                          `Project ${studentWorks.indexOf(work) + 1}`,
                        )}
                      </h3>
                    </div>
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-primary transition-all flex-shrink-0 ml-4"
                    >
                      <ExternalLink size={18} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {t(
                      `studentWorks.works.${studentWorks.indexOf(work)}.desc`,
                      "Project description goes here.",
                    )}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevPage}
            className="p-2 rounded-full bg-[#1a1f2e] text-white hover:bg-primary transition-colors disabled:opacity-50"
            disabled={totalPages <= 1}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === i
                    ? "bg-primary w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-[#1a1f2e] text-white hover:bg-primary transition-colors disabled:opacity-50"
            disabled={totalPages <= 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}