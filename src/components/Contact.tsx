import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Novare Central Mall, Wuse 1",
    subtitle: "Abuja 904101, FCT, Nigeria",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "0817 999 9965",
    subtitle: "Call or WhatsApp us",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Opens 11:00 AM",
    subtitle: "Open Daily",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-charcoal text-cream" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">
              Visit Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mt-3 mb-6">
              Find Us at
              <span className="text-gold block">Novare Central Mall</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-10">
              Conveniently located in the heart of Wuse, Abuja. Whether you're shopping,
              working nearby, or looking for a great dining experience, Jalsa is your
              perfect destination for authentic Indian cuisine.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-cream/50 text-sm mb-1">{info.title}</div>
                    <div className="font-semibold text-cream text-lg">{info.content}</div>
                    <div className="text-cream/60 text-sm">{info.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://www.google.com/maps/place/Jalsa+Restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:08179999965" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/2348179999965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-elevated">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.133842878379!2d7.479!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b5b5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sNovare%20Central%20Mall%2C%20Wuse%201%2C%20Abuja!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jalsa Restaurant Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xs bg-cream text-charcoal rounded-xl p-4 shadow-elevated">
              <div className="font-display text-lg font-semibold mb-1">Jalsa Restaurant</div>
              <div className="text-sm text-charcoal/70 mb-3">Inside Novare Central Mall</div>
              <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                <ExternalLink className="w-4 h-4" />
                <a
                  href="https://www.google.com/maps/place/Jalsa+Restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
