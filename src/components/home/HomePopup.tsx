"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger popup after 1.5 seconds (1500ms) on every refresh/load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when the popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // 👇 FIX: Added onClick here to close the popup when the background is clicked
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            // 👇 FIX: Added stopPropagation so clicking inside the white box DOES NOT close it
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white flex flex-col md:flex-row shadow-2xl overflow-hidden min-h-[500px]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-black transition-colors bg-white/50 md:bg-transparent rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
              <Image
                src="/banner5.jpeg"
                alt="Premium Collection"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Right Column: Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
              <p className="text-xs font-bold text-[#D4AF37] tracking-[0.2em] uppercase mb-4">
                Welcome to Jiya JR
              </p>
              
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 leading-tight">
                Discover Premium <br />
                Excellence
              </h2>
              
              <p className="text-gray-600 mb-10 leading-relaxed text-sm md:text-base">
                Explore our meticulously crafted collection of awards, trophies, and premium gifts. Our team is here to help you create the perfect custom recognition.
              </p>

              <div className="flex flex-col gap-4 items-center">
                <Link
                  href="/shop"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-[#111] hover:bg-black text-white text-sm font-semibold tracking-widest uppercase py-4 px-8 transition-colors"
                >
                  Explore Our Collection
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-500 hover:text-black underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all mt-2"
                >
                  Contact Us for Custom Orders
                </Link>
              </div>

              <button 
                onClick={() => setIsOpen(false)}
                className="mt-8 text-[10px] text-gray-400 uppercase tracking-wider hover:text-gray-600"
              >
                No thanks, I'll browse as a guest
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

