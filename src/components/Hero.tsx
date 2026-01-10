import { motion } from "framer-motion";
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Authentic Indian cuisine at Jalsa Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-maroon/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? "fill-gold text-gold" : "fill-gold/50 text-gold/50"}`}
                />
              ))}
            </div>
            <span className="text-cream text-sm font-medium">4.2 • 246 Reviews</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
          >
            Experience Authentic
            <span className="block text-gradient-gold">Indian Cuisine</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Discover the rich flavors of India in the heart of Abuja. Premium dining, 
            warm ambience, and unforgettable taste at Novare Central Mall.
          </motion.p>

          {/* Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 text-cream/70 text-sm">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Novare Central Mall, Wuse 1</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-cream/30" />
            <div className="flex items-center gap-2 text-cream/70 text-sm">
              <Clock className="w-4 h-4 text-gold" />
              <span>Opens 11:00 AM Daily</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#menu">View Our Menu</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://glovoapp.com" target="_blank" rel="noopener noreferrer">
                Order Online
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a
                href="https://www.google.com/maps/place/Jalsa+Restaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
