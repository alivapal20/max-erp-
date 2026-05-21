'use client';

import { motion } from 'framer-motion';
import { erpModules } from '@/lib/data';
import { Check } from 'lucide-react';

export default function ERPModules() {

  const moduleImages: Record<string, string> = {
    'Inventory': '/modules/Inventory.jpg',
    'Sales': '/modules/sale.jpg',
    'Production': '/modules/production.jpg',
    'Finance': '/modules/finance.jpg',
    'Human Resources': '/modules/hr.jpg',
    'Customer Portal': '/modules/customer.jpg',
  };

  const moduleColors: Record<string, string> = {
    'Inventory': 'bg-[#eef4e8]',
    'Sales': 'bg-[#e6f3f4]',
    'Production': 'bg-[#f1edf8]',
    'Finance': 'bg-[#f7eedf]',
    'Human Resources': 'bg-[#e6f4e8]',
    'Customer Portal': 'bg-[#e8f0fa]',
  };

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

          <h3 className="text-3xl sm:text-5xl font-bold text-foreground mb-5">
            Comprehensive ERP <span className="text-primary">Modules</span>
          </h3>

          <p className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Streamline your entire business operations with our integrated ERP system
            covering all major business functions.
          </p>

        </motion.div>

        {/* Modules Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {erpModules.map((module) => (

            <motion.div
              key={module.id}
              className="group relative overflow-hidden bg-white rounded-[32px] min-h-[360px] border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 p-8"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >

              <div className="relative z-10 flex items-center justify-between gap-6 h-full">

                {/* LEFT CONTENT */}
                <div className="flex-1 max-w-[45%]">

                  <h4 className="text-[22px] font-bold text-primary mb-3">
                    {module.name}
                  </h4>

                  {/* Accent Line */}
                  <div className="w-10 h-[3px] bg-primary rounded-full mb-5" />

                  <p className="text-[17px] text-foreground/70 leading-relaxed mb-8">
                    {module.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4">

                    <li className="flex items-center gap-3 text-[15px] text-foreground/70">

                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>

                      <span>Real-time insights</span>

                    </li>

                    <li className="flex items-center gap-3 text-[15px] text-foreground/70">

                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>

                      <span>Automation & efficiency</span>

                    </li>

                  </ul>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex items-center justify-center min-w-[340px]">

                  {/* Circle Background */}
                  <div
className={`absolute w-[280px] h-[280px] rounded-full ${moduleColors[module.name]} blur-[40px] opacity-80`}

/>

                  {/* Module Image */}
                  <img
                    src={moduleImages[module.name]}
                    alt={module.name}
className="relative z-10 w-[360px] h-[360px] object-contain transition-transform duration-500 group-hover:scale-105"                


/>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}