"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="w-full bg-white py-2 lg:py-16 mt-8 md:mt-16">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-2xl shadow-sm border border-gray-100"
        >
          {/* Optimized Next.js Image */}
          <Image
            src="/banner 2.png"
            alt="Promotional Banner"
            width={1920}
            height={600}
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
            className="w-full aspect-[21/9] md:aspect-[2.5/1] object-cover object-center hover:scale-[1.01] transition-transform duration-700"
          />
          
          {/* Text Overlay Container */}
          {/* 'pointer-events-none' ensures the overlay doesn't block hover effects on the image, while 'pointer-events-auto' on the inner div allows text selection/button clicks */}
          <div className="absolute inset-0 flex items-center px-6 md:px-12 z-10 pointer-events-none">
            <div className="max-w-xl text-white pointer-events-auto">
              {/* Add your banner text or buttons here */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
