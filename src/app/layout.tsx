import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmadsiddique.dev"),
  title: {
    default: "Ahmad Siddique — Full-Stack Developer",
    template: "%s | Ahmad Siddique",
  },
  description:
    "Full-Stack Developer from Multan, Pakistan. Building modern web applications with Next.js, React, Node.js, and MongoDB. View my projects and get in touch.",
  keywords: [
    "Ahmad Siddique",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Pakistan",
    "Multan",
    "Portfolio",
  ],
  authors: [{ name: "Ahmad Siddique" }],
  creator: "Ahmad Siddique",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ahmad Siddique — Portfolio",
    title: "Ahmad Siddique — Full-Stack Developer",
    description:
      "Full-Stack Developer from Multan, Pakistan. Building modern web applications with Next.js, React, Node.js, and MongoDB.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Siddique — Full-Stack Developer",
    description:
      "Full-Stack Developer from Multan, Pakistan. Building modern web applications with Next.js, React, Node.js, and MongoDB.",
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
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
