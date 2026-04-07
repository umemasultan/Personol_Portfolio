import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolionextjs-swart.vercel.app'),
  title: "Umema Sultan - Frontend Developer | React & Next.js Expert",
  description: "Frontend Developer specializing in scalable React & AI-powered applications. Expert in Next.js, TypeScript, performance optimization, and modern web architecture. Building high-performance digital experiences.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Expert", "TypeScript", "Web Development", "AI Integration", "Performance Optimization", "Umema Sultan"],
  authors: [{ name: "Umema Sultan" }],
  creator: "Umema Sultan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolionextjs-swart.vercel.app",
    title: "Umema Sultan - Frontend Developer | React & Next.js Expert",
    description: "Frontend Developer specializing in scalable React & AI-powered applications. Building high-performance web experiences with modern architecture.",
    siteName: "Umema Sultan Portfolio",
    images: [
      {
        url: "/assets/main.jpg",
        width: 1200,
        height: 630,
        alt: "Umema Sultan - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umema Sultan - Frontend Developer | React & Next.js Expert",
    description: "Frontend Developer specializing in scalable React & AI-powered applications.",
    images: ["/assets/main.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
