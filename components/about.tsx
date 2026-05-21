'use client';

import { motion } from 'framer-motion';
import { Building2, Award, Zap, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: Award },
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '1000+', label: 'Monthly Shipments', icon: Zap },
    { number: '98%', label: 'Customer Satisfaction', icon: Building2 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left - Image */}
          <motion.div


className="relative h-[900px] w-[700px] -ml-30 rounded-full overflow-hidden bg-transparent scale-80"            

            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Image Collage */}


<div className="group grid grid-cols-2 grid-rows-2 w-full h-full gap-[6px] p-3">


  <div className="overflow-hidden transition-all duration-500 hover:z-20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
    <img
      src="/image/img3.jpg"
      alt="About 1"
      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-95 hover:scale-110"
    />
  </div>

  <div className="overflow-hidden transition-all duration-500 hover:z-20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
    <img
      src="/image/img2.jpg"
      alt="About 2"
      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-95 hover:scale-110"
    />
  </div>

  <div className="overflow-hidden transition-all duration-500 hover:z-20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
    <img
      src="/image/img1.jpg"
      alt="About 3"
      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-95 hover:scale-110"
    />
  </div>

  <div className="overflow-hidden transition-all duration-500 hover:z-20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
    <img
      src="/image/img4.jpg"
      alt="About 4"
      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-95 hover:scale-110"
    />
  </div>

</div>

          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Delivering Excellence <span className="text-primary">Since 1997</span>
              </h2>

              <p className="text-lg text-foreground/70 leading-relaxed">
                Meetel Computers & Consumables has been a trusted name in thermal paper products, printing solutions,
                and integrated ERP systems for over two decades.
              </p>
            </motion.div>

            <motion.p
              className="text-base text-foreground/60 leading-relaxed"
              variants={itemVariants}
            >
              We specialize in providing high-quality thermal paper rolls, advanced printing equipment, and
              comprehensive business management solutions designed to empower enterprises across industries. Our
              commitment to excellence and customer satisfaction has made us the preferred partner for hundreds of
              businesses nationwide.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;

                return (
                  <motion.div
                    key={index}
                    className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <IconComponent className="w-6 h-6 text-primary mb-3" />

                    <div className="text-2xl font-bold text-foreground">
                      {stat.number}
                    </div>

                    <div className="text-sm text-foreground/60">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}