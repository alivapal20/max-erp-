'use client';

import { motion } from 'framer-motion';
import { whyChooseUs } from '@/lib/data';

export default function WhyChooseUs() {
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
    <section className="py-16 sm:py-20 bg-foreground text-background relative overflow-hidden">
      {/* Floating gradient accents */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-2">
            Why Partner With Us
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built on <span className="text-yellow-400">Quality</span>, Driven by <span className="text-yellow-400">Trust</span>
          </h3>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Discover what sets Meetel apart as the industry&apos;s trusted partner for paper solutions and business
            automation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyChooseUs.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-6 sm:p-8 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Icon background circle */}
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-2xl group-hover:bg-primary/30 transition-colors">
                {feature.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">{feature.description}</p>

              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-t-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/70 text-base sm:text-lg mb-6">Ready to transform your business?</p>
          <motion.button
            className="px-8 py-3 bg-white text-foreground rounded-lg font-semibold hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
