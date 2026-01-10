import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import menuRiceChicken from "@/assets/menu-rice-chicken.jpg";
import menuChaat from "@/assets/menu-chaat.jpg";
import menuPanipuri from "@/assets/menu-panipuri.jpg";
import menuIcecream from "@/assets/menu-icecream.jpg";

const menuItems = [
  {
    name: "Spicy Rice & Chicken",
    description: "Fragrant basmati rice with tender grilled chicken tikka, aromatic spices, and fresh herbs",
    category: "Main Course",
    image: menuRiceChicken,
  },
  {
    name: "Indian Chaat",
    description: "Crispy puris topped with chickpeas, tangy tamarind chutney, yogurt, and fresh coriander",
    category: "Snacks",
    image: menuChaat,
  },
  {
    name: "Pani Puri",
    description: "Hollow crispy shells filled with spiced potato and refreshing mint-flavored water",
    category: "Street Food",
    image: menuPanipuri,
  },
  {
    name: "Kiwi Ice Cream",
    description: "Creamy artisan ice cream with fresh kiwi slices and mint garnish",
    category: "Desserts",
    image: menuIcecream,
  },
];

export const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-padding bg-muted" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">
            Our Menu
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Popular Dishes
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our most loved dishes, prepared with authentic Indian spices
            and served with love.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold/90 text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Ready to taste authentic Indian flavors?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://glovoapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Order on Glovo
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
