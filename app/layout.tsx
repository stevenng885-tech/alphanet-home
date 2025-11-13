import type { Metadata } from "next";

import "./globals.css";
import "./custom.css";
import "./animation.css";
import 'swiper/css';
import 'swiper/css/pagination';

import Navigation from "@/components/header/Navigation";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import React from "react";

export const metadata: Metadata = {
  title: "Alpha Net",
  description: "KẾT NỐI KHÔNG GIỚI HẠN - CHIA SẺ KHÔNG RANH GIỚI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="vi">
      <body
        cz-shortcut-listen="true"
        className="antialiased relative"
      >
        <ToastContainer
          position="top-right"
          autoClose={2000}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
