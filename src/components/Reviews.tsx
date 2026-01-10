import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Adaeze Okoro",
    badge: "Local Guide",
    rating: 5,
    text: "Amazing ambience and authentic Indian taste! The staff is incredibly friendly and the environment is so clean. Perfect for family outings.",
  },
  {
    name: "Michael Okonkwo",
    badge: "Local Guide",
    rating: 5,
    text: "Best Indian restaurant in Abuja! The Pani Puri is absolutely divine. Great place to unwind after work with friends.",
  },
  {
    name: "Fatima Ibrahim",
    badge: "Frequent Visitor",
    rating: 4,
    text: "Love the calm atmosphere and affordable prices. The chicken tikka is always perfectly spiced. Highly recommended!",
  },
  {
    name: "David Afolabi",
    badge: "Local Guide",
    rating: 5,
    text: "Friendly staff and great food! The location inside Novare Mall is so convenient. Will definitely keep coming back.",
  },
];

export const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from our satisfied customers
            who've experienced the Jalsa difference.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-soft relative card-hover"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gold/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-gold text-gold"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-gold">{review.badge}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/place/Jalsa+Restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          >
            <span>See all 246 reviews on Google</span>
            <span className="text-gold">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
