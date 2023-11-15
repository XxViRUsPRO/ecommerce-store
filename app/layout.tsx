import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ComponentProvider from "@/providers/component-provider";
import PreviewModal from "@/components/preview-modal";
import { Toaster } from "react-hot-toast";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ComponentProvider>
          <PreviewModal />
          <Toaster />
        </ComponentProvider>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
