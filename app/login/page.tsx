"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
} from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LoginShowcase = dynamic(() => import('@/components/login-showcase'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleLogin = () => {

    if (
      email === 'admin@123' &&
      password === '1234'
    ) {

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      }
      localStorage.setItem('department', department);

      switch (department) {

        case 'CRM':
          router.push('/crm-dashboard');
          break;

        case 'Sales':
          router.push('/sales-dashboard');
          break;

        case 'Manufacturing':
          router.push('/manufacturing-dashboard');
          break;

        case 'Warehouse':
          router.push('/warehouse-dashboard');
          break;

        default:
          alert('Please select a department');
      }

    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-[#f7faf5] via-white to-[#edf7ea] min-h-screen flex flex-col overflow-x-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-100/40 blur-3xl rounded-full" />

        {/* Main Section */}
        <section className="relative z-10 flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

              {/* LEFT SIDE (lazy-loaded to reduce initial bundle) */}
              <LoginShowcase />

              {/* RIGHT SIDE */}
              <div className="flex justify-center">

                <div className="w-full max-w-xl">

                  <div className="backdrop-blur-2xl bg-white/80 border border-white/40 rounded-[40px] p-6 sm:p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                      </div>
                    </div>

                    {/* Heading */}
                    <div className="text-center mb-10">
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                        Login to Portal
                      </h2>

                      <p className="text-foreground/60 text-base sm:text-lg">
                        Enter your credentials to continue
                      </p>
                    </div>

                    {/* Form */}
                    <form
                      className="space-y-6"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                      }}
                    >

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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 sm:h-14 pl-12 rounded-2xl border-border focus-visible:ring-primary"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ WebkitAppearance: 'none' }}
                            className="h-12 sm:h-14 pl-12 pr-12 rounded-2xl border-border focus-visible:ring-primary [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
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

                      {/* Department */}
                      <div className="w-full">
                        <label className="text-sm font-semibold text-foreground mb-3 block">
                          Department
                        </label>

                        <Select onValueChange={setDepartment}>
                          <SelectTrigger className="w-full h-12 sm:h-14 rounded-2xl border-border focus:ring-primary">
                            <SelectValue placeholder="Select Department" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectItem value="CRM">
                              CRM
                            </SelectItem>

                            <SelectItem value="Sales">
                              Sales
                            </SelectItem>

                            <SelectItem value="Manufacturing">
                              Manufacturing
                            </SelectItem>

                            <SelectItem value="Warehouse">
                              Warehouse
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Remember */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember"
                            checked={rememberMe}
                            onCheckedChange={(checked) =>
                              setRememberMe(checked === true)
                            }
                          />

                          <label
                            htmlFor="remember"
                            className="text-sm text-foreground/70 cursor-pointer"
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
                        type="submit"
                        onClick={handleLogin}
                        className="w-full h-12 sm:h-14 rounded-2xl bg-gradient-to-r from-[#0b4d1b] to-[#14742f] hover:opacity-95 text-white text-base sm:text-lg shadow-[0_15px_40px_rgba(0,128,0,0.25)] transition-all duration-300"
                      >
                        Login

                        <ArrowRight className="w-5 h-5 ml-2" />
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
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

      </div>
    </>
  );
}