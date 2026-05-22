'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto sm:h-16 py-3 sm:py-0 gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <img src="/mainlogo.png" alt="Meetel" className="w-10 h-10 sm:w-15 sm:h-15 rounded-lg object-contain" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-none tracking-tight text-[#0a8f3d]">
            MEETEL
          </h1>
            <p className="mt-1 whitespace-nowrap text-[7px] sm:text-[10px] font-semibold tracking-wide text-gray-700 leading-tight">
            COMPUTER'S & COATED PAPER CO.
          </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-foreground/70 hover:text-foreground transition">
              Products
            </a>
            <a href="#solutions" className="text-foreground/70 hover:text-foreground transition">
              Solutions
            </a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition">
              About Us
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline">
              <Link href="/login">Log In</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#products"
              className="block px-3 py-2 text-foreground/70 hover:text-foreground transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 text-foreground/70 hover:text-foreground transition"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-foreground/70 hover:text-foreground transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-foreground/70 hover:text-foreground transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 px-3 pt-2 border-t border-border">
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">Log In</Link>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
