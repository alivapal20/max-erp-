'use client';

import { motion } from 'framer-motion';
import { products } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="products" className="py-20 bg-secondary/20">
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
            Our Complete Range
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Paper & Printing <span className="text-primary">Solutions</span>
          </h3>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality thermal paper products, advanced printing equipment, and
            specialized solutions designed for businesses of all sizes.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 rounded-xl transition-all duration-300"></div>

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="text-5xl">{product.icon}</div>

                {/* Title & Description */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{product.name}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">{product.description}</p>
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300 pt-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
