'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Products': ['Thermal Rolls', 'Label Stock', 'Specialty Paper', 'Printers'],
    'Solutions': ['Retail', 'Healthcare', 'Logistics', 'Finance'],
    'Company': ['About Us', 'Careers', 'Blog', 'Press'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Compliance', 'Security'],
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <img src="/mainlogo.png" alt="Meetel" className="w-15 h-15 rounded-lg object-contain bg-white" />
              <span className="text-xl font-bold">Meetel</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium paper solutions and integrated ERP systems for enterprise businesses worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@meetel.com"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Important Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">IMPORTANT LINKS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">Home</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">About Company</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">CSR Activities</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">Clients</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">Contact us</a></li>
            </ul>
          </motion.div>

          {/* Get In Touch */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">GET IN TOUCH</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>9051808584 / 9830584843 / 9830066013</li>
              <li>info@meetel.in</li>
              <li>www.meetel.in</li>
            </ul>
          </motion.div>

          {/* Corporate Office */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">CORPORATE OFFICE</h4>
            <div className="text-white/80 text-sm space-y-2 max-w-sm">
              <p>Ambuja Neotia Ecostation, BP Block, Street No 9, Salt Lake Sector V,</p>
              <p>12th floor, Suite No. 1201, Kolkata 700091,</p>
              <p>Near Philips more</p>
            </div>
            <h4 className="font-semibold text-white mt-6 mb-3">HEAD OFFICE</h4>
            <p className="text-white/80 text-sm">14/2 Old China Bazar Street, 2nd Floor, Room No: 169, Kolkata 700001</p>
            <h4 className="font-semibold text-white mt-6 mb-3">DELHI OFFICE</h4>
            <p className="text-white/80 text-sm">Ground Floor, Khasra No.12/26, Village Budhpur, Bajpur, North East Delhi, Delhi, 110036</p>
          </motion.div>

          {/* Offices */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">BANGALORE OFFICE</h4>
            <p className="text-white/80 text-sm">5TH BLOCK, 161/1 SITE NO 11, 100FEET ROAD, NEAT AGS, ULLALU, BLOCK VISHWESHWARAIAH, Bengaluru, Bengaluru Urban, Karnataka, 560056</p>

            <h4 className="font-semibold text-white mt-6 mb-4">BIHAR OFFICE</h4>
            <p className="text-white/80 text-sm">Sehgal Path Jakhanpur, Near Bharat Lal Tent House, Patna – 800001, Bihar</p>

            <h4 className="font-semibold text-white mt-6 mb-4">JHARKHAND OFFICE</h4>
            <p className="text-white/80 text-sm">Court Road, Rj Arcade, 2nd Floor, Near Bihar Club / Town Hall, Jaipal Singh Stadium, Ranchi</p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white/70 text-sm">
            &copy; {currentYear} Meetel Computers & Consumables. All rights reserved.
          </div>
          <div className="text-white/70 text-sm mt-4 md:mt-0">
            Powering businesses with premium solutions since 1997.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
