'use client';

import { motion } from 'framer-motion';
import { industries } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Industries() {
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
    <section className="py-20 bg-background">
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
            Industry Solutions
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powering Businesses <span className="text-primary">Across Industries</span>
          </h3>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            Tailored solutions for every sector, from retail to healthcare, with proven expertise across diverse
            business domains.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              className="group relative overflow-hidden rounded-xl h-64 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-300"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <div className="text-6xl mb-4">{industry.icon}</div>
                <h4 className="text-2xl font-bold text-white text-center mb-2">{industry.name}</h4>
                <div className="flex items-center text-white/80 gap-2 group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-medium">Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300 -rotate-45"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
