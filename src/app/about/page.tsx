"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ShieldCheck, 
  Trophy, 
  Users, 
  Truck, 
  Headphones, 
  MessageSquare, 
  PenTool, 
  Settings, 
  SearchCheck, 
  Package, 
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-19 font-sans">
        {/* 1. HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-[#fcf9f5]">
          {/* Full Width Hero Image */}
          <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[55vh] min-h-[350px]">
            <Image 
              src="/banner4.webp" 
              alt="Jiya JR About Us Banner"
              fill
              priority
              className="object-cover object-center"
            />
            
            {/* Explore Collection Button Overlay - MOVED TO VERY LEFT */}
            <div className="absolute inset-0 flex items-end pb-12 lg:pb-16 z-10">
              <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
                <Link 
                  href="/shop" 
                  className="inline-flex items-center gap-2 bg-[#DB4444] text-white font-medium py-3 px-8 rounded-full hover:bg-red-700 transition-colors shadow-lg"
                >
                  EXPLORE OUR COLLECTION <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STATS BAR (White) */}
        <div className="container mx-auto px-4 lg:px-12 max-w-7xl relative z-20 -mt-12">
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-8 px-6 flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xl font-bold text-black">5+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Years of<br/>Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xl font-bold text-black">1000+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Award<br/>Designs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xl font-bold text-black">500+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Happy<br/>Clients</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xl font-bold text-black">10000+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Awards<br/>Delivered</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Dedicated<br/>Customer<br/>Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. OUR STORY SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image 
                  src="/banner5.jpeg" 
                  alt="Trophy Workshop"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[#DB4444] tracking-widest uppercase mb-2">Our Story</p>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-6">
                  Every Trophy <br/> Tells a <span className="text-[#DB4444]">Story</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Instead of manufacturing awards, we create symbols of achievement. From school competitions to corporate milestones, every trophy reflects hard work, dedication, and success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#fcf9f5] flex items-center justify-center text-[#D4AF37]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">Premium<br/>Quality</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#fcf9f5] flex items-center justify-center text-[#D4AF37]">
                      <Users className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">Trusted by Thousands<br/>Across India</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#fcf9f5] flex items-center justify-center text-[#D4AF37]">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">Designs That<br/>Inspire Pride</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OUR PROCESS SECTION */}
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-md font-bold text-[#DB4444] tracking-widest uppercase">Our Process</p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-10 left-12 right-12 h-[1px] border-t-2 border-dashed border-gray-300 z-0"></div>
              
              {/* Process Steps */}
              {[
                { num: "01", icon: MessageSquare, title: "INQUIRY" },
                { num: "02", icon: PenTool, title: "DESIGN APPROVAL" },
                { num: "03", icon: Settings, title: "MANUFACTURING" },
                { num: "04", icon: SearchCheck, title: "QUALITY CHECK" },
                { num: "05", icon: Package, title: "PACKAGING" },
                { num: "06", icon: Truck, title: "DELIVERY" },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative z-10 mb-8 md:mb-0 w-full md:w-auto">
                  <span className="text-xs font-bold text-gray-400 mb-3">{step.num}</span>
                  <div className="w-20 h-20 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm mb-4">
                    <step.icon className="w-8 h-8 text-gray-800" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. STATS BAR (Red) */}
        <section className="bg-[#8A1515] py-10">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-4 text-white">
              <ShieldCheck className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-xl font-bold">5+</p>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Trophy className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-xl font-bold">1000+</p>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Award Designs</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Users className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-xl font-bold">500+</p>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Happy Clients</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Truck className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-xl font-bold">10000+</p>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Awards Delivered</p>
              </div>
            </div>
          </div>
        </section>

     {/* 6. PRECISION IN EVERY DETAIL */}
        <section className="py-20 bg-[#fcf9f5]">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left text */}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-[#DB4444] tracking-widest uppercase mb-6">Precision In Every Detail</p>
                <ul className="space-y-4">
                  {[
                    "Premium Quality Materials",
                    "Fine Finishing & Polishing",
                    "Advanced Manufacturing",
                    "Laser Engraving & Customization",
                    "Rigorous Quality Inspection"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
                      <div className="text-[#D4AF37]"><CheckCircle2 className="w-5 h-5 fill-orange-100" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Award Image */}
              <div className="relative rounded-xl overflow-hidden h-[400px] shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1000&auto=format&fit=crop" 
                  alt="Precision Crafted Award" 
                  fill 
                  unoptimized
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* 7. TRUSTED BY SECTION */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <p className="text-center text-md font-bold text-[#DB4444] tracking-widest uppercase mb-10">
              Trusted by Schools, Companies & Organizations Across India
            </p>
            <div className="flex items-center justify-between">
              
              {/* Logos container - FIXED: Made text dark gray so it's visible on white */}
              <div className="flex justify-around items-center w-full px-2 md:px-8 flex-wrap gap-6 md:gap-8 transition-all duration-300">
                {["DPS", "AMITY", "Reliance", "TATA", "HDFC", "Infosys", "SBI", "vivo"].map((logo) => (
                  <span key={logo} className="font-bold text-lg md:text-xl text-gray-500 hover:text-black transition-colors">
                    {logo}
                  </span>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        {/* 8. BOTTOM CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <div className="bg-gradient-to-r from-[#8A1515] to-[#5C0E0E] rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
              
              <div className="relative z-10 max-w-xl text-white mb-8 lg:mb-0">
                <h2 className="text-3xl lg:text-4xl font-serif mb-3">
                  Celebrate Every Achievement <br/> with <span className="text-[#D4AF37]">Jiya JR</span>
                </h2>
                <p className="text-gray-200 text-sm mb-8">Premium Awards. Timeless Recognition.</p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/shop" className="bg-[#D4AF37] hover:bg-[#b5952f] text-black font-bold py-3 px-8 rounded transition-colors text-sm uppercase tracking-wide flex items-center gap-2">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-gray-400 hover:border-white text-white font-bold py-3 px-8 rounded transition-colors text-sm uppercase tracking-wide flex items-center gap-2">
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Decorative Trophy Image on the right (UNSPLASH) */}
              <div className="relative z-10 w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=800&auto=format&fit=crop" 
                  alt="Award Trophy" 
                  fill 
                  unoptimized
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
