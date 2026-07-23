"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// 👇 Defined the 3 requested categories. 
const categoriesData = [
  { 
    src: '/award1.png', 
    alt: 'Corporate Gifting', 
    title: 'CORPORATE GIFTING', 
    query: 'Business Award' 
  },
  { 
    src: '/award2.png', 
    alt: 'School Awards', 
    title: 'SCHOOL AWARDS', 
    query: 'School Award' 
  },
  { 
    src: '/award3.png', 
    alt: 'Sports Awards', 
    title: 'SPORTS AWARDS', 
    query: 'Sports Award' 
  }
];

export default function Categories() {
  return (
    <section className="w-full bg-white py-12"> 
      <div className="container mx-auto px-4 lg:px-4 max-w-[1536px]">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-6">
          
          {categoriesData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="w-full"
            >
              <Link href={`/shop?category=${encodeURIComponent(item.query)}`} className="group flex flex-col items-center w-full">
                
                {/* 👇 FIX: Changed to aspect-[10/9] to give it a little more vertical height */}
                <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-[#F0F0F0] border border-gray-200 w-full aspect-[10/9] flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#D4AF37]">
                  <Image 
                    src={item.src}
                    alt={item.alt}
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <button className="bg-white border-2 border-[#D4AF37] text-[#000000] px-6 py-3 rounded-full font-semibold tracking-widest text-sm lg:text-base group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 shadow-sm w-full max-w-[85%]">
                  {item.title}
                </button>
                
              </Link>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}