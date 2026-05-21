'use client';

import { motion } from 'framer-motion';
import { products } from '@/lib/data';

import {
  ArrowRight,
  Receipt,
  Tags,
  FileText,
  Printer,
  Barcode,
  Palette,
} from 'lucide-react';

export default function Products() {

  const productIcons: Record<string, any> = {
    'Thermal Rolls': Receipt,
    'Label Stock': Tags,
    'Specialty Paper': FileText,
    'Thermal Printer': Printer,
    'Label Printer': Barcode,
    'Ink & Consumables': Palette,
  };

  const productImages: Record<string, string> = {
    'Thermal Rolls': '/product/pd1.jpg',
    'Label Stock': '/product/pd2.jpg',
    'Specialty Paper': '/product/pd3.jpg',
    'Thermal Printer': '/product/pd4.jpg',
    'Label Printer': '/product/pd5.jpg',
    'Ink & Consumables': '/product/pd6.jpg',
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
            Discover our comprehensive range of high-quality thermal paper products,
            advanced printing equipment, and specialized solutions designed for
            businesses of all sizes.
          </p>

        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {products.map((product) => (

            <motion.div
              key={product.id}
              className="group relative p-3 bg-background rounded-[28px] border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/10 rounded-[28px] transition-all duration-300" />

              <div className="relative z-10">

                {/* PRODUCT IMAGE */}
                <div className="relative overflow-hidden rounded-[24px] mb-5 bg-secondary/20">

                  <img
                    src={productImages[product.name]}
                    alt={product.name}
                    className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-border">

                    {(() => {
                      const IconComponent = productIcons[product.name];

                      return (
                        <IconComponent className="w-6 h-6 text-primary" />
                      );
                    })()}

                  </div>

                </div>

                {/* CONTENT */}
                <div className="px-2 pb-3">

                  <h4 className="text-[32px] font-bold text-foreground mb-3 leading-none">
                    {product.name}
                  </h4>

                  <p className="text-[18px] text-foreground/70 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300">

                    <span className="text-[18px]">
                      Learn More
                    </span>

                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}