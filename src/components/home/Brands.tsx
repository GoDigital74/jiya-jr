"use client";

export default function Brands() {
  const brands = [
    "Decathlon",
    "KSCA",
    "HAL",
    "Indian Railways",
    "RVCE",
    "Foxconn",
    "Mondelez",
    "Coursera",
    "Razorpay",
    "CRED",
    "Postman"
  ];

  return (
    // 👇 Optimized top padding for mobile
    <section className="bg-white pt-10 md:pt-14 pb-6 md:pb-8 border-t border-gray-100 font-sans overflow-hidden">
      <div className="container mx-auto px-2 lg:px-12 max-w-[1450px]">
        
        {/* Header Content */}
        {/* 👇 Reduced margin bottom for mobile */}
        <div className="text-center mb-8 md:mb-12">
          {/* 👇 Scaled down tracking text and margins for smaller screens */}
          <p className="text-gray-500 text-[14px] md:text-sm font-bold tracking-[0.2em] uppercase mb-2 md:mb-4">
            Our Clients
          </p>
          <h2 className="text-xl md:text-4xl font-medium text-gray-900 mb-2 md:mb-4">
            Trusted by <span className="text-[#fbbc04]">150+ brands</span> across India
          </h2>
          <p className="text-gray-600 text-xs md:text-base px-4 md:px-0">
            From Fortune 500 corporates to neighbourhood sports academies.
          </p>
        </div>
        
        {/* 👇 Removed the useless absolute gradient wrapper divs */}
        {/* 👇 Added flex-shrink-0 to children and optimized gap/padding for smooth mobile horizontal scrolling */}
        <div className="flex items-center gap-3 md:gap-4 overflow-x-auto py-2 px-1 hide-scrollbar w-full flex-nowrap mask-image-fade">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="px-4 py-2 md:px-6 md:py-3 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-xs md:text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 transition-all cursor-default shadow-sm flex-shrink-0"
            >
              {brand}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
