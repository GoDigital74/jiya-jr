"use client";

import { motion } from "framer-motion";
import Link from "next/link"; 

export default function Hero() {
  return (
    // 👇 FIX: Made height shorter on mobile (50vh) and kept it tall on desktop (md:80vh)
    <section className="relative h-[30vh] md:h-[80vh] overflow-hidden mt-[76px]">
      
      {/* 👇 FIX: Shifted the background position to 15% to reveal more of the left-side text */}
      <div
        className="absolute inset-0 bg-cover bg-[15%_center] md:bg-center"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-6 px-7 left-1/2 -translate-x-1/2 md:bottom-8 md:left-12 md:translate-x-0 z-20"
      >
        <div className="flex gap-4">
          <Link href="/shop">
            <button className="border border-white text-white px-5 py-2 text-sm md:text-base font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-black/20 md:bg-transparent">
              SHOP NOW
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

