import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-maroon-dark text-cream">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold mb-4">
              Jalsa <span className="text-gold">Restaurant</span>
            </h3>
            <p className="text-cream/70 leading-relaxed mb-6">
              Authentic Indian cuisine in the heart of Abuja. Experience the
              rich flavors, warm hospitality, and unforgettable dining.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3 text-cream/70">
              <li>Novare Central Mall</li>
              <li>Wuse 1, Abuja 904101, FCT</li>
              <li>
                <a href="tel:08179999965" className="hover:text-gold transition-colors">
                  0817 999 9965
                </a>
              </li>
              <li>Open Daily from 11:00 AM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Jalsa Restaurant. All rights reserved.
            </p>
            <p className="text-cream/50 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-gold fill-gold" /> in Abuja
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
