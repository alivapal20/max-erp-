'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { testimonials } from '@/lib/data';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Client Feedback
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Thousands of Happy Clients</span>
          </h3>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            See what our satisfied customers have to say about their experience with Meetel.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
            <motion.div
            className="relative bg-background rounded-2xl border border-border p-6 sm:p-10 md:p-12 shadow-lg"
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              &quot;{testimonials[activeIndex].quote}&quot;
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              {/* Avatar */}
              <div className="relative w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                {testimonials[activeIndex].image ? (
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    width={48}
                    height={48}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span>{testimonials[activeIndex].name.charAt(0)}</span>
                )}
              </div>

              {/* Author Details */}
              <div>
                <div className="font-semibold text-foreground">{testimonials[activeIndex].name}</div>
                <div className="text-sm text-foreground/60">{testimonials[activeIndex].role}</div>
                <div className="text-xs text-foreground/50">{testimonials[activeIndex].company}</div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2 mt-8">
              <motion.button
                onClick={prevSlide}
                className="p-2 sm:p-3 rounded-full border border-border hover:bg-secondary/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="p-2 sm:p-3 rounded-full border border-border hover:bg-secondary/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </motion.button>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-8' : 'bg-border'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
