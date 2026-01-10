import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Utensils, Users, Heart, Award } from "lucide-react";
import interiorImage from "@/assets/gallery-interior-2.jpg";

const features = [
  {
    icon: Utensils,
    title: "Authentic Flavors",
    description: "Traditional recipes with premium spices imported from India",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Warm, welcoming atmosphere perfect for families and gatherings",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish prepared with passion by our expert chefs",
  },
  {
    icon: Award,
    title: "Top Rated",
    description: "Consistently praised for quality, service, and ambience",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={interiorImage}
                alt="Jalsa Restaurant interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-gold text-charcoal rounded-2xl p-6 shadow-gold"
            >
              <div className="text-center">
                <div className="font-display text-4xl font-bold">4.2</div>
                <div className="text-sm font-semibold">Google Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              A Modern Indian Dining
              <span className="text-primary block">Experience in Abuja</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Located inside Novare Central Mall, Jalsa Restaurant brings the vibrant 
              flavors of India to Wuse, Abuja. Our restaurant offers a perfect blend 
              of traditional recipes and modern presentation, creating an unforgettable 
              culinary journey.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you're looking for a cozy family dinner, a casual meal with friends, 
              or simply want to unwind after a long day, Jalsa provides the perfect 
              ambience. Our friendly staff and clean, elegant environment make every 
              visit special.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
