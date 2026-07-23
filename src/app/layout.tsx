import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jiyajr.com"),
  title: {
    default: "Jiya JR | Premium Awards, Trophies & Corporate Gifts",
    template: "%s | Jiya JR",
  },
  description:
    "Precision in every detail. Jiya JR crafts timeless symbols of achievement, offering premium custom recognition, corporate gifting, and school awards.",
  keywords: [
    "Jiya JR",
    "Corporate Gifts",
    "Trophies & Awards",
    "School Awards",
    "Custom Craftsmanship",
    "India",
    "Corporate Gifts",
    "Awards",
    "school awards"
  ],
  authors: [{ name: "Jiya JR" }],
  creator: "Jiya JR",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jiyajr.com",
    title: "Jiya JR | Premium Awards, Trophies & Corporate Gifts",
    description:
      "Precision in every detail. Jiya JR crafts timeless symbols of achievement, offering premium custom recognition, corporate gifting, and school awards.",
    siteName: "Jiya JR",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Jiya JR Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiya JR | Premium Collections",
    description: "Precision in every detail. Jiya JR crafts timeless symbols of achievement, offering premium custom recognition, corporate gifting, and school awards.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-[#D4AF37] selection:text-white">
        {children}
      </body>
    </html>
  );
}
