"use client"; // 얘를 선언해야지 Hook이 사용 가능
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      document.body.style.setProperty("--scroll-progress", `${scrolled}%`);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1  px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
