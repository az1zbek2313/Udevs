import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";
import "@/Languages/i18n";
import dynamic from "next/dynamic";
import AbsaluteImage from "@/components/absaluteImage";
import Providers from "./GlobalRedux/provider";

export const metadata: Metadata = {
  title: "UzDevs",
  description: "IT-Outsourcing Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const FooterComponent = dynamic(() => import("@/components/footer"), {
    ssr: false,
  });

  return (
    <html lang="en">
      <body className="font-manrope relative">
        <Providers>
          <Navbar />
        </Providers>
        <Providers>{children}</Providers>
        <Providers>
          <FooterComponent />
        </Providers>
        <Providers>
          <AbsaluteImage />
        </Providers>
      </body>
    </html>
  );
}
