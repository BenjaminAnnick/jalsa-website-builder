import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import heroFood from "@/assets/hero-food.jpg";
import interior1 from "@/assets/gallery-interior-1.jpg";
import interior2 from "@/assets/gallery-interior-2.jpg";
import food1 from "@/assets/gallery-food-1.jpg";
import menuRice from "@/assets/menu-rice-chicken.jpg";
import menuChaat from "@/assets/menu-chaat.jpg";

const galleryImages = [
  { src: heroFood, alt: "Indian cuisine spread", category: "Food" },
  { src: interior1, alt: "Restaurant interior", category: "Ambience" },
  { src: food1, alt: "Indian thali platter", category: "Food" },
  { src: interior2, alt: "Dining area", category: "Ambience" },
  { src: menuRice, alt: "Spicy rice with chicken", category: "Food" },
  { src: menuChaat, alt: "Indian chaat", category: "Food" },
];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-muted" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            A Feast for the Eyes
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a visual journey through our restaurant, from our elegant
            interiors to our beautifully crafted dishes.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`aspect-square ${index === 0 ? "md:aspect-auto md:h-full" : ""}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-gold/90 text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};
