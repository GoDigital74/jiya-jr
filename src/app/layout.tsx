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
    default: "Jiya JR | Premium Collections & Craftsmanship",
    template: "%s | Jiya JR",
  },
  description:
    "Discover Jiya JR's carefully curated premium collections, corporate gifts, trophies, and custom craftsmanship. Decades of trusted service delivering excellence across India.",
  keywords: [
    "Jiya JR",
    "Corporate Gifts",
    "Trophies & Awards",
    "School Awards",
    "Custom Craftsmanship",
    "India",
  ],
  authors: [{ name: "Jiya JR" }],
  creator: "Jiya JR",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jiyajr.com",
    title: "Jiya JR | Premium Collections & Craftsmanship",
    description:
      "Decades of craftsmanship, trusted service, and carefully curated awards and gifts.",
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
    description: "Decades of craftsmanship and trusted service across India.",
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
