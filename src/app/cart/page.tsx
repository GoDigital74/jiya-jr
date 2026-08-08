"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  ShoppingBag,
  MessageCircle,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { urlForImage } from "@/sanity/lib/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// 👇 SMART IMAGE HELPER (Matches your existing logic)
const getDisplayImage = (item: any) => {
  if (item.imageUrl) {
    return typeof item.imageUrl === "string"
      ? item.imageUrl
      : urlForImage(item.imageUrl).url();
  }
  if (item.galleryUrls && item.galleryUrls.length > 0)
    return item.galleryUrls[0];

  const sizeImages = (item.sizes || [])
    .map((s: any) => s.imageUrl)
    .filter(Boolean);
  if (sizeImages.length > 0) return sizeImages[0];

  const colorImages = (item.colors || [])
    .map((c: any) => c.imageUrl)
    .filter(Boolean);
  if (colorImages.length > 0) return colorImages[0];

  return "/placeholder.png";
};

export default function CartPage() {
  const { items, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate overall totals
  const cartCount = items.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );
  const calculatedTotal = items.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0,
  );

  // WhatsApp Checkout Handler
  const handleWhatsAppCheckout = () => {
    const WHATSAPP_NUMBER = "919313064631"; // As used in your Shop & Featured Products

    // Constructing the order message
    let message =
      "Hello! I would like to place an order for the following items:%0A%0A";

    items.forEach((item, index) => {
      const productId = item.sku || `JR-${item._id.substring(0, 5)}`;
      const itemQty = item.quantity || 1;
      const itemTotal = item.price * itemQty;

      message += `*${index + 1}. ${item.name}*%0A`;
      message += `- ID: ${productId}%0A`;
      message += `- Quantity: ${itemQty}%0A`;
      message += `- Price: ₹${item.price.toFixed(2)} (Subtotal: ₹${itemTotal.toFixed(2)})%0A%0A`;
    });

    message += `*Grand Total: ₹${calculatedTotal.toFixed(2)}*%0A%0A`;
    message += "Please confirm availability and payment details. Thank you!";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  // Prevent hydration mismatch by returning a loading state or null until mounted
  if (!mounted) return null;

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen pt-32 pb-20 font-sans">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Page Title */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-wide font-serif mb-2">
                Your Shopping Cart
              </h1>
              <p className="text-gray-500">
                You have {cartCount} item{cartCount !== 1 ? "s" : ""} in your
                cart.
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 text-sm font-bold text-[#D4AF37] hover:text-[#b08d24] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
            </Link>
          </div>

          {items.length === 0 ? (
            // EMPTY CART STATE
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-12 h-12 text-gray-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your cart is completely empty
              </h2>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                Looks like you haven't added anything to your cart yet. Explore
                our premium collections to find exactly what you need.
              </p>
              <Link
                href="/shop"
                className="bg-[#D4AF37] text-white px-8 py-3.5 rounded-lg font-bold tracking-widest uppercase text-sm hover:bg-[#b08d24] transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Start Shopping
              </Link>
            </div>
          ) : (
            // FILLED CART STATE
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side: Cart Items List */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Table Header (Desktop only) */}
                  <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 bg-gray-50/50">
                    <div className="col-span-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Product
                    </div>
                    <div className="col-span-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                      Price
                    </div>
                    <div className="col-span-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                      Quantity
                    </div>
                    <div className="col-span-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                      Total
                    </div>
                  </div>

                  {/* Product Rows */}
                  <div className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <div
                        key={item._id}
                        className="p-6 flex flex-col md:grid md:grid-cols-12 gap-6 items-center relative group"
                      >
                        {/* Mobile Remove Button (Absolute top right) */}
                        <button
                          onClick={() => removeItem(item._id)}
                          className="md:hidden absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>

                        {/* Product Info (Col 1-6) */}
                        <div className="col-span-6 flex items-center gap-5 w-full">
                          <div className="w-24 h-24 bg-[#F0F0F0] rounded-xl border border-gray-100 p-2 flex-shrink-0 flex items-center justify-center">
                            <Image
                              src={getDisplayImage(item)}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="object-contain mix-blend-multiply w-full h-full"
                            />
                          </div>
                          <div className="flex flex-col flex-1 pr-6 md:pr-0">
                            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                              {item.category || "Product"}
                            </span>
                            <h3 className="font-bold text-gray-900 text-sm md:text-base line-clamp-2 leading-snug mb-1">
                              {item.name}
                            </h3>
                            <span className="text-xs text-gray-400 font-medium">
                              ID: {item.sku || `JR-${item._id.substring(0, 5)}`}
                            </span>
                          </div>
                        </div>

                        {/* Mobile Price & Qty Row */}
                        <div className="flex w-full md:hidden justify-between items-center pt-4 border-t border-gray-50 mt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Qty:</span>
                            <span className="font-bold">
                              {item.quantity || 1}
                            </span>
                          </div>
                          <div className="font-bold text-gray-900">
                            ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                          </div>
                        </div>

                        {/* Desktop Price (Col 7-8) */}
                        <div className="col-span-2 hidden md:flex items-center justify-center text-sm font-semibold text-gray-600">
                          ₹{item.price.toFixed(2)}
                        </div>

                        {/* Desktop Quantity (Col 9-10) */}
                        <div className="col-span-2 hidden md:flex items-center justify-center">
                          <span className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-bold border border-gray-200">
                            {item.quantity || 1}
                          </span>
                        </div>

                        {/* Desktop Total & Remove (Col 11-12) */}
                        <div className="col-span-2 hidden md:flex items-center justify-end gap-4">
                          <span className="font-bold text-gray-900">
                            ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeItem(item._id)}
                            className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Continue Shopping */}
                <Link
                  href="/shop"
                  className="md:hidden mt-6 flex items-center justify-center gap-2 text-sm font-bold text-[#D4AF37] hover:text-[#b08d24] transition-colors py-3"
                >
                  <ArrowLeft className="w-4 h-4" /> Continue Shopping
                </Link>
              </div>

              {/* Right Side: Order Summary */}
              <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 sticky top-32">
                  <h2 className="text-lg font-bold text-gray-900 tracking-wide uppercase border-b border-gray-100 pb-4 mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cartCount} items)</span>
                      <span className="font-semibold text-gray-900">
                        ₹{calculatedTotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-sm italic text-gray-400">
                        Calculated on WhatsApp
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Taxes</span>
                      <span className="text-sm italic text-gray-400">
                        Calculated on WhatsApp
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6 mb-8">
                    <div className="flex justify-between items-end">
                      <span className="text-base font-bold text-gray-900 uppercase tracking-wider">
                        Total
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-[#D4AF37]">
                          ₹{calculatedTotal.toFixed(2)}
                        </span>
                        <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                          *Excluding shipping & taxes
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold tracking-wide text-sm hover:bg-[#1ebd5a] hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 uppercase"
                  >
                    <MessageCircle
                      className="w-5 h-5 fill-current"
                      strokeWidth={2}
                    />
                    Checkout on WhatsApp
                  </button>

                  <div className="mt-6 flex items-start gap-3 bg-green-50/50 p-4 rounded-xl border border-green-100">
                    <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-green-800 leading-relaxed">
                      By clicking checkout, you will be securely redirected to
                      WhatsApp to finalize your order details, shipping, and
                      payment directly with our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
