'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Headphones,
  BarChart3,
} from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import Footer from '@/components/footer';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-[#f7faf5] via-white to-[#edf7ea]">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-100/40 blur-3xl rounded-full" />

        {/* Main Section */}
        <section className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

              {/* LEFT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >

                {/* Logo */}
                <Link href="/" className="inline-flex items-center gap-3 mb-10">
                  <Image
                    src="/logo/logo.png"
                    alt="Meetel"
                    width={190}
                    height={60}
                    priority
                  />
                </Link>

                {/* Text */}
                <div className="space-y-6">

                  <div>
                    <p className="text-primary font-semibold text-lg mb-3">
                      Welcome Back!
                    </p>

                    <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                      Login to your
                      <span className="block text-primary">
                        account
                      </span>
                    </h1>
                  </div>

                  <div className="w-20 h-1 bg-primary rounded-full" />

                  <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                    Access your dashboard to manage orders, track deliveries,
                    and explore our premium paper solutions with integrated ERP tools.
                  </p>
                </div>

                {/* Product Showcase */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative mt-12"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full" />
                  </div>

                  {/* Product Image */}
                  <div className="relative z-10 flex justify-center">
                    <Image
                      src="/image/img.png"
                      alt="Thermal Paper Rolls"
                      width={520}
                      height={520}
                      priority
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Floating Feature Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative z-20 mt-[-40px] backdrop-blur-xl bg-gradient-to-r from-[#0b4d1b] to-[#135d24] rounded-3xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/10"
                  >

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                      <div className="text-white">
                        <ShieldCheck className="w-7 h-7 mb-3 text-green-300" />
                        <h3 className="font-semibold mb-1">
                          Secure Access
                        </h3>
                        <p className="text-sm text-white/70">
                          Your data is always safe with us.
                        </p>
                      </div>

                      <div className="text-white">
                        <Headphones className="w-7 h-7 mb-3 text-green-300" />
                        <h3 className="font-semibold mb-1">
                          Dedicated Support
                        </h3>
                        <p className="text-sm text-white/70">
                          We’re here to help you 24/7.
                        </p>
                      </div>

                      <div className="text-white">
                        <ArrowRight className="w-7 h-7 mb-3 text-green-300" />
                        <h3 className="font-semibold mb-1">
                          Fast & Reliable
                        </h3>
                        <p className="text-sm text-white/70">
                          Seamless experience every time.
                        </p>
                      </div>

                      <div className="text-white">
                        <BarChart3 className="w-7 h-7 mb-3 text-green-300" />
                        <h3 className="font-semibold mb-1">
                          Smart Dashboard
                        </h3>
                        <p className="text-sm text-white/70">
                          Everything at your fingertips.
                        </p>
                      </div>

                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex justify-center"
              >

                <div className="w-full max-w-xl">

                  <div className="backdrop-blur-2xl bg-white/80 border border-white/40 rounded-[40px] p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lock className="w-12 h-12 text-primary" />
                      </div>
                    </div>

                    {/* Heading */}
                    <div className="text-center mb-10">
                      <h2 className="text-4xl font-bold text-foreground mb-3">
                        Login to Portal
                      </h2>

                      <p className="text-foreground/60 text-lg">
                        Enter your credentials to continue
                      </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">

                      {/* Email */}
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-3 block">
                          Email Address
                        </label>

                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />

                          <Input
                            type="email"
                            placeholder="Enter your email"
                            className="h-14 pl-12 rounded-2xl border-border focus-visible:ring-primary"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-3 block">
                          Password
                        </label>

                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />

                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            style={{ WebkitAppearance: 'none' }}
                            className="h-14 pl-12 pr-12 rounded-2xl border-border focus-visible:ring-primary [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                            />

                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-primary transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Remember */}
                      <div className="flex items-center justify-between">

                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember" />

                          <label
                            htmlFor="remember"
                            className="text-sm text-foreground/70"
                          >
                            Remember me
                          </label>
                        </div>

                        <button
                          type="button"
                          className="text-primary font-medium hover:underline"
                        >
                          Forgot Password?
                        </button>
                      </div>

                      {/* Login Button */}
                      <Button
                        className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0b4d1b] to-[#14742f] hover:opacity-95 text-white text-lg shadow-[0_15px_40px_rgba(0,128,0,0.25)] transition-all duration-300"
                      >
                        Login

                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>

                      {/* Divider */}
                      <div className="flex items-center gap-4 py-2">
                        <div className="h-px bg-border flex-1" />

                        <span className="text-foreground/50 text-sm">
                          or
                        </span>

                        <div className="h-px bg-border flex-1" />
                      </div>

                      {/* OTP */}
                      <Button
                        variant="outline"
                        className="w-full h-14 rounded-2xl border-primary/30 text-primary hover:bg-primary/5 text-lg"
                      >
                        <ShieldCheck className="w-5 h-5 mr-2" />

                        Login with OTP
                      </Button>

                      {/* Bottom Text */}
                      <p className="text-center text-foreground/60 pt-2">
                        Don’t have an account?{' '}
                        <button
                          type="button"
                          className="text-primary font-semibold hover:underline"
                        >
                          Contact Administrator
                        </button>
                      </p>

                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}