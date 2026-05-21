'use client';

import { motion } from 'framer-motion';

export default function Clients() {
  // Client logo image paths (repeat for marquee)
  const clients = [
    '/clients/adidas.png',
    '/clients/chowman.png',
    '/clients/craftcoffee.png',
    '/clients/dadaboudi.png',
    '/clients/flipkart.png',
    '/clients/gse.png',
    '/clients/haldiram.png',
    '/clients/hhi.png',
    '/clients/hpe.png',
    '/clients/indimart.png',
    '/clients/inv.png',
    '/clients/io.png',
    '/clients/jiomart.png',
    '/clients/justbaked.png',
    '/clients/kp.png',
    '/clients/meesho.png',
    '/clients/mioamore.png',
    '/clients/oudh.png',
    '/clients/snapdeal.png',
    '/clients/subway.png',
    '/clients/taj.png',
    '/clients/tpsodl.png',
    '/clients/up.png',
    '/clients/wbsedcl.png',
    '/clients/wowmomo.png',
  ];

  // render full clients array then duplicate it for seamless loop
 return (
<section className="relative py-16 bg-gradient-to-b from-[#f7f8f5] via-[#dfe8da] to-[#f7f8f5]">
  {/* 
  <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-background to-transparent"></div>
   */}
  
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
          </h2>
          <h3 className="text-2xl font-bold text-foreground">Powering Enterprise Clients Worldwide</h3>
        </motion.div>

        {/* Marquee Container */}
        <div className="overflow-hidden">
          <div className="marquee">
            <div className="marquee__inner flex gap-12 py-8 animate-[scroll_35s_linear_infinite]">
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={client}
                    alt="client-logo"
                    className="h-12 w-auto object-contain transition duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
