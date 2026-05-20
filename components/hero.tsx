'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden pt-20 pb-10">
      {/* Floating gradient backgrounds */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
          

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              variants={itemVariants}
            >
              Powering Businesses with{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Premium Paper Solutions
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-foreground/70 leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              High-quality thermal paper rolls, printers, and paper solutions combined with an integrated ERP system
              to streamline your business operations and maximize efficiency.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-base">
                Explore Products
              </Button>

             <Button
               variant="outline"
               className="border-primary/30 hover:bg-primary/17 px-8 py-6 text-base text-primary hover:text-primary"
              >
              Request a Quote
             </Button>

            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="flex items-center gap-8 pt-6 border-t border-border"
              variants={itemVariants}
            >
              <div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-foreground/60">Years of Excellence</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-foreground/60">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-foreground/60">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Product Display */}
          <motion.div
            className="relative h-96 lg:h-full flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full h-96">
              {/* Circular background with gradient */}
              <div className="absolute inset-[-40px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>

              {/* Product image replacing icons */}
              <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
                <Image
                  src="/image/img.png"
                  alt="Thermal paper rolls and printers"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-xl scale-130 translate-x-6"
                  priority />
               
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
