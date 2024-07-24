import type { Metadata } from "next";
import "./globals.css";
import "@/Languages/i18n";
import dynamic from "next/dynamic";

const newLocal = "IT-Outsourcing Company";
export const metadata: Metadata = {
  title: "UzDevs",
  description: newLocal,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Navbar = dynamic(() => import("@/components/navbar"), {
    ssr: false,
  });
  const FooterComponent = dynamic(() => import("@/components/footer"), {
    ssr: false,
  });
  const AbsaluteImage = dynamic(() => import("@/components/absaluteImage"), {
    ssr: false,
  });
  const Providers = dynamic(() => import("./GlobalRedux/provider"), {
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
