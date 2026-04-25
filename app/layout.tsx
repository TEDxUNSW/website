import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Handjet,
  IM_Fell_English_SC,
  Crimson_Pro,
  Source_Serif_4,
} from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/nav/mobileNavBar";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  weight: "400",
  subsets: ["latin"],
});

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

const tnrCondensed = LocalFont({
  src: [
    {
      path: "../public/fonts/TimesNewRomanCondensed-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TimesNewRomanCondensed-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tnr-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TEDxUNSW Official Website",
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
        className={`${geistSans.variable} ${geistMono.variable} ${handjet.variable} ${imfellEng.variable} ${crimsonPro.variable} ${brixton.variable} ${tnrCondensed.variable} ${sourceSerif4.variable} antialiased`}
      >
        <div className="block md:hidden">
          <MobileNavBar/>
        </div>
        <div className="hidden md:block">
          <NavBar />
        </div>
        <div className="bg-[url('/BlackBackground.png')] bg-repeat bg-contain">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
