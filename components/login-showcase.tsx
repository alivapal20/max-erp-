"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Headphones, BarChart3, ShieldCheck } from 'lucide-react';

export default function LoginShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      

      <div className="space-y-6">
        <div>
          <p className="text-primary font-semibold text-base sm:text-lg mb-3">Welcome Back!</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Login to your
            <span className="block text-primary">account</span>
          </h1>
        </div>

        <div className="w-20 h-1 bg-primary rounded-full" />

        <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl">
          Access your dashboard to manage orders, track deliveries, and explore our premium paper solutions with integrated ERP tools.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mt-12"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 flex justify-center px-4 sm:px-0">
          <Image src="/image/img.png" alt="Thermal Paper Rolls" width={520} height={520} loading="eager" style={{ width: 'auto', height: 'auto' }} className="object-contain drop-shadow-2xl w-full max-w-[420px] sm:max-w-[520px]" />
        </div>

        <motion.div whileHover={{ y: -5 }} className="relative z-20 mt-[-40px] backdrop-blur-xl bg-gradient-to-r from-[#0b4d1b] to-[#135d24] rounded-3xl p-4 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-white">
              <ShieldCheck className="w-7 h-7 mb-3 text-green-300" />
              <h3 className="font-semibold mb-1">Secure Access</h3>
              <p className="text-sm text-white/70">Your data is always safe with us.</p>
            </div>

            <div className="text-white">
              <Headphones className="w-7 h-7 mb-3 text-green-300" />
              <h3 className="font-semibold mb-1">Dedicated Support</h3>
              <p className="text-sm text-white/70">We’re here to help you 24/7.</p>
            </div>

            <div className="text-white">
              <ArrowRight className="w-7 h-7 mb-3 text-green-300" />
              <h3 className="font-semibold mb-1">Fast & Reliable</h3>
              <p className="text-sm text-white/70">Seamless experience every time.</p>
            </div>

            <div className="text-white">
              <BarChart3 className="w-7 h-7 mb-3 text-green-300" />
              <h3 className="font-semibold mb-1">Smart Dashboard</h3>
              <p className="text-sm text-white/70">Everything at your fingertips.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
