'use client';

import { motion } from 'framer-motion';
import { industries } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Industries() {

  /* INDUSTRY IMAGES */
  const industryImages: Record<string, string> = {
    'Retail': '/industry/cart.jpg',
    'Banking & Finance': '/industry/bank.jpg',
    'Healthcare': '/industry/health.jpg',
    'Logistics': '/industry/truck.jpg',
    'Food & Beverage': '/industry/food.jpg',
    'Hospitality': '/industry/hotel.jpg',
  };

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
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="solutions" className="py-20 bg-background">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Industry Solutions
          </h2>

          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powering Businesses{' '}
            <span className="text-primary">
              Across Industries
            </span>
          </h3>

          <p className="text-base text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Tailored solutions for every sector, from retail to healthcare,
            with proven expertise across diverse business domains.
          </p>

        </motion.div>

        {/* GRID */}
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
              className="group bg-white rounded-[26px] overflow-hidden border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >

              {/* IMAGE AREA */}
              <div className="relative overflow-hidden bg-[#f7f8f5] h-[255px]">

                <img
                  src={industryImages[industry.name]}
                  alt={industry.name}
className="w-[78%] h-[78%] object-contain mx-auto mt-6 transition-transform duration-700 group-hover:scale-105"

/>

              </div>

              {/* CONTENT */}
              <div className="px-6 py-5 text-center">

                <h4 className="text-[20px] font-bold text-primary mb-2 leading-none">
                  {industry.name}
                </h4>

                <div className="flex items-center justify-center gap-2 text-foreground/60 group-hover:gap-3 transition-all duration-300">

                  <span className="text-[15px] font-medium">
                    Explore Solutions
                  </span>

                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}