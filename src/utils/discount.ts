import { Product } from "@/types/product";

export interface DiscountInfo {
  hasDiscount: boolean;
  discountPercent: number;
  originalPrice: number;
  finalPrice: number;
}

/**
 * The `price` set in the Sanity Studio is the ORIGINAL price, and
 * `discountPercent` is applied to it to get the price the customer pays.
 * So 265 at 5% off shows ₹251.75 next to a struck-through ₹265.
 */
export const getDiscountInfo = (
  price?: number,
  discountPercent?: number,
): DiscountInfo => {
  const originalPrice = Number(price) || 0;
  const percent = Math.round(Number(discountPercent) || 0);

  if (!originalPrice || percent <= 0 || percent >= 100) {
    return {
      hasDiscount: false,
      discountPercent: 0,
      originalPrice,
      finalPrice: originalPrice,
    };
  }

  const finalPrice = Math.round(originalPrice * (1 - percent / 100) * 100) / 100;

  return { hasDiscount: true, discountPercent: percent, originalPrice, finalPrice };
};

/** The price the customer actually pays, after any discount. */
export const getFinalPrice = (product: Product) =>
  getDiscountInfo(product.price, product.discountPercent).finalPrice;

/**
 * Use before adding to the cart or building a WhatsApp message, so totals are
 * based on the discounted price instead of the original one.
 */
export const withFinalPrice = <T extends Product>(product: T): T => ({
  ...product,
  price: getFinalPrice(product),
});
