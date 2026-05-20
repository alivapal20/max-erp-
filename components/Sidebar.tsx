"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  BarChart2,
  ShoppingCart,
  Factory,
  Warehouse,
  Boxes,
  FileText,
  UserCog,
  Settings,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  User,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "CRM", icon: Users },
  { label: "Sales", icon: ShoppingCart },
  { label: "Manufacturing", icon: Factory },
  { label: "Warehouse", icon: Warehouse },
  { label: "Inventory", icon: Boxes },
  { label: "Purchase", icon: ShoppingCart },
  { label: "Reports & Analytics", icon: BarChart2 },
  { label: "Employees", icon: UserCog },
  { label: "Accounts", icon: FileText },
  { label: "Settings", icon: Settings },
];

const SIDEBAR_WIDTH = 260;
const SIDEBAR_COLLAPSED = 90;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <motion.aside
      animate={{ width: collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_WIDTH }}
      className={cn(
        "fixed top-0 left-0 z-40 h-screen flex flex-col justify-between shadow-2xl transition-all duration-300",
        "bg-gradient-to-br from-[#0a2e1a] via-[#0c3c24] to-[#111a13] border-r border-green-900/40"
      )}
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow:
          "0 4px 32px 0 rgba(34,197,94,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.18)",
      }}
    >
      {/* Background Glow/Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-60 h-60 -translate-x-1/2 bg-green-500/20 rounded-full blur-2xl" />
        <div className="absolute left-0 bottom-0 w-40 h-40 bg-green-700/20 rounded-full blur-2xl" />
        <div className="absolute right-0 top-1/3 w-32 h-32 bg-green-400/10 rounded-full blur-2xl" />
      </div>
      {/* Top Section */}
      <div className="flex flex-col gap-6 pt-7 pb-2 px-3">
        {/* Collapse Button */}
        <div className="flex justify-end mb-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setCollapsed((v) => !v)}
            className={cn(
              "rounded-full p-2 bg-green-900/60 hover:bg-green-800/80 shadow-md border border-green-800/40 transition",
              "flex items-center justify-center"
            )}
          >
            {collapsed ? (
              <ArrowRight className="w-5 h-5 text-green-300" />
            ) : (
              <ArrowLeft className="w-5 h-5 text-green-300" />
            )}
          </motion.button>
        </div>
        {/* Logo & Company */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ boxShadow: "0 0 0 0 #22c55e00" }}
            animate={{
              boxShadow:
                "0 0 0 0 #22c55e00, 0 0 24px 6px #22c55e88, 0 0 60px 12px #22c55e33",
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            className="rounded-2xl bg-gradient-to-br from-green-600 via-green-500 to-green-700 p-2 shadow-lg"
          >
            <Image
              src="/logo.svg"
              alt="Meetel Logo"
              width={collapsed ? 32 : 44}
              height={collapsed ? 32 : 44}
              className="drop-shadow-lg"
            />
          </motion.div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center mt-1"
              >
                <div className="font-extrabold text-lg text-green-100 tracking-tight drop-shadow">
                  MEETEL
                </div>
                <div className="text-[10px] text-green-300 font-semibold tracking-wide whitespace-nowrap">
                  Computers & Coated Paper Co.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Nav Items */}
        <nav className="flex flex-col gap-1 mt-6">
          {navItems.map(({ label, icon: Icon }) => {
            const isActive = active === label;
            return (
              <motion.button
                key={label}
                whileHover={{ scale: 1.04, boxShadow: "0 2px 16px #22c55e44" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(label)}
                className={cn(
                  "relative flex items-center gap-3 px-3 py-2.5 my-0.5 rounded-xl font-semibold text-sm transition-all duration-200",
                  "group overflow-hidden",
                  isActive
                    ? "bg-gradient-to-r from-green-600 via-green-500 to-green-700 text-white shadow-lg"
                    : "text-green-200 hover:bg-gradient-to-r hover:from-green-800/80 hover:to-green-700/60 hover:text-white",
                  collapsed ? "justify-center px-0" : "justify-start"
                )}
                style={{ minHeight: 44 }}
              >
                {/* Left Glow Indicator */}
                <AnimatePresence>
                  {isActive && !collapsed && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-7 rounded-full bg-green-400 shadow-[0_0_12px_2px_#22c55e88]"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <Icon className={cn("w-5 h-5 flex-shrink-0 z-10", isActive ? "text-white" : "text-green-300 group-hover:text-white")}/>
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="z-10"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </nav>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col gap-4 pb-7 px-3">
        {/* Upgrade Card */}
        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0 2px 24px #22c55e55" }}
          className={cn(
            "bg-gradient-to-br from-green-900/70 to-green-800/60 border border-green-500/30 rounded-2xl p-4 mb-2 flex flex-col items-center shadow-lg backdrop-blur-xl relative overflow-hidden"
          )}
          style={{ boxShadow: "0 2px 16px #22c55e33" }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/60 to-green-600/40 rounded-t-2xl blur-sm" />
          <div className="flex items-center gap-2 mb-2">
            <BadgeCheck className="w-5 h-5 text-green-400" />
            <span className="text-xs font-bold text-green-100">PREMIUM</span>
          </div>
          <div className="text-green-100 font-semibold text-sm mb-1">Upgrade Your Plan</div>
          <div className="text-green-300 text-xs mb-3 text-center">Unlock advanced features and grow your business.</div>
          <button className="w-full py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-md hover:from-green-600 hover:to-green-800 hover:shadow-green-200/40 transition-all duration-200">
            Upgrade Now
          </button>
        </motion.div>
        {/* User Profile Card */}
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 2px 16px #22c55e33" }}
          className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-green-900/30 shadow-inner"
        >
          <div className="relative">
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-green-900 rounded-full" />
            <User className="w-9 h-9 rounded-full bg-green-900/60 text-green-300 p-2" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex-1"
              >
                <div className="font-semibold text-green-100 leading-tight">Admin User</div>
                <div className="text-xs text-green-300">Super Admin</div>
              </motion.div>
            )}
          </AnimatePresence>
          <ChevronDown className="w-5 h-5 text-green-400 ml-auto" />
        </motion.div>
      </div>
    </motion.aside>
  );
}

// Tailwind animation for mobile drawer can be added when integrating into pages.
// This sidebar is fully reusable and does not include any dashboard/page content.
