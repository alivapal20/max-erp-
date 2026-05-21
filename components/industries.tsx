'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '@/lib/data';
import { ArrowRight, X } from 'lucide-react';

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<any | null>(null);

  /* INDUSTRY IMAGES */
  const industryImages: Record<string, string> = {
    Retail: '/industry/cart.jpg',
    'Banking & Finance': '/industry/bank.jpg',
    Healthcare: '/industry/health.jpg',
    Logistics: '/industry/truck.jpg',
    'Food & Beverage': '/industry/food.jpg',
    Hospitality: '/industry/hotel.jpg',
  };

  /* INDUSTRY DETAILS */
  const industryDetails: Record<
    string,
    {
      title: string;
      description: string;
      products: string[];
      benefits: string[];
      link: string;
    }
  > = {
    Retail: {
      title: 'Retail Store Solutions',
      description:
        'We provide complete retail billing, barcode, and inventory solutions designed to help supermarkets, grocery stores, fashion stores, pharmacies, and retail chains operate faster and more efficiently.',

      products: [
        'Thermal Paper Rolls – High-quality receipt rolls for smooth and clear billing prints.',
        'POS Printers – Fast and reliable billing printers for retail counters.',
        'Barcode Scanners – Quick barcode scanning for faster checkout and inventory management.',
        'Barcode Rolls & Labels – Durable barcode labels for product tagging and tracking.',
        'Thermal Barcode Printers – Professional barcode printing solutions for retail inventory systems.',
        'TVS Touch POS Systems – Smart touchscreen billing systems for modern retail stores.',
        'Electronic Cash Registers – Secure and efficient cash handling for daily operations.',
        'Weighing Scales – Accurate digital weighing solutions for supermarkets and grocery stores.',
        'Counting Machines – High-speed currency counting machines for cash management.',
        'Thermal Receipt Printers – Compact and efficient receipt printing for billing counters.',
        'Ink & Consumables – Premium-quality ink and printing consumables for uninterrupted operations.',
      ],

      benefits: [
        'Billing speed',
        'Inventory tracking',
        'Customer experience',
        'Product management',
        'Operational efficiency',
        'Checkout accuracy',
      ],

      link: 'https://supermaxstores.in/collections',
    },

    'Banking & Finance': {
      title: 'Banking & Finance Solutions',
      description:
        'Advanced banking and financial hardware solutions for secure cash handling, fast transactions, and smooth branch operations.',

      products: [
        'Currency Counting Machines',
        'Fake Note Detectors',
        'POS Billing Machines',
        'Thermal Receipt Printers',
        'Barcode Scanners',
        'Token Display Systems',
        'Touch POS Systems',
        'Cash Registers',
      ],

      benefits: [
        'Secure cash handling',
        'Fast customer transactions',
        'Reduced manual errors',
        'Improved branch efficiency',
      ],

      link: 'https://supermaxstores.in/collections',
    },

    Healthcare: {
      title: 'Healthcare Solutions',
      description:
        'Reliable healthcare technology and billing solutions designed for clinics, hospitals, pharmacies, and diagnostic centers.',

      products: [
        'Barcode Printers',
        'Patient Billing Systems',
        'POS Systems',
        'Thermal Printers',
        'Label Rolls',
        'Barcode Scanners',
      ],

      benefits: [
        'Accurate patient billing',
        'Medicine inventory management',
        'Fast report generation',
        'Better workflow efficiency',
      ],

      link: 'https://supermaxstores.in/collections',
    },

    Logistics: {
      title: 'Logistics Solutions',
      description:
        'Smart tracking and warehouse management solutions for logistics and supply chain businesses.',

      products: [
        'Barcode Scanners',
        'Thermal Barcode Printers',
        'Shipping Label Rolls',
        'Inventory Systems',
      ],

      benefits: [
        'Shipment tracking',
        'Warehouse efficiency',
        'Inventory accuracy',
        'Faster dispatch operations',
      ],

      link: 'https://supermaxstores.in/collections',
    },

    'Food & Beverage': {
      title: 'Food & Beverage Solutions',
      description:
        'Efficient restaurant and food business billing systems for faster operations and customer service.',

      products: [
        'POS Billing Systems',
        'Kitchen Printers',
        'Receipt Printers',
        'Touchscreen Billing Systems',
      ],

      benefits: [
        'Fast billing',
        'Order management',
        'Improved customer service',
        'Reduced billing errors',
      ],

      link: 'https://supermaxstores.in/collections',
    },

    Hospitality: {
      title: 'Hospitality Solutions',
      description:
        'Professional billing and management solutions for hotels, resorts, and hospitality businesses.',

      products: [
        'Hotel POS Systems',
        'Billing Printers',
        'Cash Registers',
        'Barcode Systems',
      ],

      benefits: [
        'Efficient guest management',
        'Faster billing process',
        'Inventory control',
        'Better operational flow',
      ],

      link: 'https://supermaxstores.in/collections',
    },
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
    <>
      <section
        id="solutions"
        className={`py-20 bg-background transition-all duration-300 ${
          selectedIndustry ? 'blur-sm pointer-events-none select-none' : ''
        }`}
      >
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
              <span className="text-primary">Across Industries</span>
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
                onClick={() => setSelectedIndustry(industry)}
                className="group bg-white rounded-[26px] overflow-hidden border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
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

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndustry && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
            />

            {/* POPUP CARD */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-4xl bg-white rounded-[30px] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="absolute top-5 right-5 z-10 bg-black/5 hover:bg-black/10 rounded-full p-2 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* TOP IMAGE */}
                <div className="bg-[#f7f8f5] h-[300px] flex items-center justify-center">
                  <img
                    src={industryImages[selectedIndustry.name]}
                    alt={selectedIndustry.name}
                    className="w-[300px] h-[300px] object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8 sm:p-10">
                  <h2 className="text-3xl font-bold text-primary mb-5">
                    {industryDetails[selectedIndustry.name]?.title}
                  </h2>

                  <p className="text-foreground/70 leading-relaxed mb-8">
                    {industryDetails[selectedIndustry.name]?.description}
                  </p>

                  {/* PRODUCTS */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">
                      Our Products Include:
                    </h3>

                    <ul className="space-y-3">
                      {industryDetails[selectedIndustry.name]?.products.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="text-foreground/70 leading-relaxed flex gap-3"
                          >
                            <span className="text-primary font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* BENEFITS */}
                  <div className="mb-10">
                    <h3 className="text-xl font-bold mb-4">
                      Our Solutions Help Improve:
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {industryDetails[selectedIndustry.name]?.benefits.map(
                        (benefit: string, index: number) => (
                          <div
                            key={index}
                            className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                          >
                            {benefit}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* BUTTON */}
                  <a
                    href={industryDetails[selectedIndustry.name]?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300"
                  >
                    Buy Products
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}