// import { Suspense } from "react";
// import { client } from "@/sanity/lib/client";
// import ShopClient from "./ShopClient";
// import { Product } from "@/types/product";
// import type { Metadata } from "next";

// export const revalidate = 60; 

// export const metadata: Metadata = {
//   title: "Collection & Shop",
//   description: "Explore our exclusive catalog of school awards, business gifts, sports trophies, regular mementos, and premium items.",
// };

// export default async function ShopPage() {
//   const products = await client.fetch<Product[]>(`*[_type == "product"] {
//     _id,
//     name,
//     "slug": slug.current,
//     category,
//     price,
//     rating,
//     sku,
//     "colors": colors[]{
//       colorName,
//       "imageUrl": colorImage.asset->url
//     },
//     description,
//     "imageUrl": image.asset->url,
//     "galleryUrls": gallery[].asset->url,
//     "sizes": sizes[]{
//       sizeName,
//       dimension,
//       "imageUrl": sizeImage.asset->url
//     }
//   }`);

//   // 👇 FIX: Added "Gifts" to the predefined categories list
//   const predefinedCategories = ["School Award", "Business Award", "Regular Award", "Sports Award", "Gifts", "Metal","Wooden"];
//   const fetchedCategories = products.map((p) => p.category).filter(Boolean);
//   const categories = Array.from(new Set([...predefinedCategories, ...fetchedCategories]));

//   return (
//     <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-lg font-bold text-gray-500">Loading Collections...</div>}>
//       <ShopClient 
//         initialProducts={products} 
//         categories={categories} 
//       />
//     </Suspense>
//   );
// }


import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import ShopClient from "./ShopClient";
import { Product } from "@/types/product";
import type { Metadata } from "next";

export const revalidate = 60; 

export const metadata: Metadata = {
  title: "Collection & Shop",
  description: "Explore our exclusive catalog of school awards, business gifts, sports trophies, regular mementos, and premium items.",
};

export default async function ShopPage() {
  const products = await client.fetch<Product[]>(`*[_type == "product"] {
    _id,
    name,
    "slug": slug.current,
    category,
    finishingType,
    price,
    rating,
    sku,
    "colors": colors[]{
      colorName,
      "imageUrl": colorImage.asset->url
    },
    description,
    "imageUrl": image.asset->url,
    "galleryUrls": gallery[].asset->url,
    "sizes": sizes[]{
      sizeName,
      dimension,
      "imageUrl": sizeImage.asset->url
    }
  }`);

  // 👇 FIX: Removed "Metal" and "Wooden" from predefined categories
  const predefinedCategories = ["School Award", "Business Award", "Regular Award", "Sports Award", "Gifts"];
  const fetchedCategories = products.map((p) => p.category).filter(Boolean);
  const categories = Array.from(new Set([...predefinedCategories, ...fetchedCategories]));

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-lg font-bold text-gray-500">Loading Collections...</div>}>
      <ShopClient 
        initialProducts={products} 
        categories={categories} 
      />
    </Suspense>
  );
}