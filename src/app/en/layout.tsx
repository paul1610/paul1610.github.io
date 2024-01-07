import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from "@/app/en/components/navbar/Navigation";
import Footer from "@/app/en/components/footer/Footer";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paul Nell',
  description: 'Nell Pauls Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <div id={"body"}>
                <Navigation />
                {children}
            </div>
            <Footer />
        </body>
    </html>
  );
}
