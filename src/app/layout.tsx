import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Korea Buidl Week 2026",
  description: "Global Builder Gateway to APAC | April 13-19th, 2026 | Seoul, Korea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jakarta.variable} font-sans antialiased bg-white text-[#171717]`}
      >
        {children}
      </body>
    </html>
  );
}
