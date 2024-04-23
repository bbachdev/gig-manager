import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import GuestHeader from '@/components/header/GuestHeader';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-dvh`}>
        <GuestHeader />
        <div className={`max-w-7xl w-full mx-auto`}>
          {children}
        </div>
        <div className={`mt-auto`}>
          <Footer />
        </div>
      </body>
    </html>
  );
}