"use client";

import { motion } from "framer-motion";
import Link from "next/link"; 

export default function Hero() {
  return (
    <section className="relative h-[30vh] md:h-[80vh] overflow-hidden mt-[76px]">
      
      <div
        className="absolute inset-0 bg-cover bg-[15%_center] md:bg-center"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // 👇 FIX: Changed bottom-6 to bottom-2 to push the button lower on mobile
        className="absolute bottom-2 px-7 left-1/2 -translate-x-1/2 md:bottom-8 md:left-12 md:translate-x-0 z-20"
      >
        <div className="flex gap-4">
          <Link href="/shop">
            <button className="border border-white text-white px-4 py-2 text-sm md:text-base font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-black/20 md:bg-transparent">
              SHOP NOW
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

