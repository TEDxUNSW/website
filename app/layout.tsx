import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Handjet,
  IM_Fell_English_SC,
  Crimson_Pro,
} from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const imfellEng = IM_Fell_English_SC({
  variable: "--font-imfell-eng",
  weight: "400",
  subsets: ["latin"],
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const brixton = LocalFont({
  src: [
    {
      path: "../public/fonts/BrixtonRg.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-brixton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TEDxUNSW offcial Website",
  description: "TEDxUNSW brings together the passionate minds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${handjet.variable} ${imfellEng.variable} ${crimsonPro.variable} ${brixton.variable} antialiased`}
      >
        <NavBar />
        <div className="bg-[url('/BlackBackground.png')] bg-repeat bg-contain">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
