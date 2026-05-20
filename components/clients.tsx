'use client';

import { motion } from 'framer-motion';
import { clients } from '@/lib/data';

export default function Clients() {
  // Duplicate clients for seamless marquee
  const duplicatedClients = [...clients, ...clients];

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
          <motion.div
            className="flex gap-12 py-8"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={index}


className="flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300"


                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">{client.logo}</span>
                <span className="font-medium text-foreground whitespace-nowrap">{client.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
