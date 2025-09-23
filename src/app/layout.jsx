"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import MajorRecruiters from "@/components/shared/MajorRecruiters";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b">
          <MainNav />
        </header>
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="min-h-screen"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <MajorRecruiters />
        <Footer />
      </body>
    </html>
  );
}
