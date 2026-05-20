'use client';

import { motion } from 'framer-motion';
import { erpModules } from '@/lib/data';
import { Check } from 'lucide-react';

export default function ERPModules() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
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
            Integrated Business Solutions
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive ERP <span className="text-primary">Modules</span>
          </h3>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            Streamline your entire business operations with our integrated ERP system covering all major business
            functions.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {erpModules.map((module) => (
            <motion.div
              key={module.id}
              className="relative group p-8 bg-gradient-to-br from-background via-background to-secondary/20 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary rounded-t-xl group-hover:w-full transition-all duration-500"></div>

              <div className="space-y-4">
                {/* Icon */}
                <div className="text-4xl">{module.icon}</div>

                {/* Title */}
                <h4 className="text-lg font-bold text-foreground">{module.name}</h4>

                {/* Description */}
                <p className="text-sm text-foreground/60 leading-relaxed">{module.description}</p>

                {/* Feature list (for visual richness) */}
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-xs text-foreground/60">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Real-time insights</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-foreground/60">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automation & efficiency</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
