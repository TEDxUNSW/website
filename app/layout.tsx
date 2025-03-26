import type { Metadata } from "next";
import { Geist, Geist_Mono, Handjet} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${handjet.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
