import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/separator";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kafalat e yateem foundation malakand",
    default: "Kafalat e yateem foundation malakand NGO",
  },
  description:
    "The Kafalate e Yateem Foundation Malakand is NGO for Orphans and a home for orphans, abandoned children, and those in need. We provide them with a secure and loving environment where they can heal and grow. Our mission is to nurture young hearts with hope and compassion. Our center is a sanctuary where every child can thrive.",
  metadataBase: new URL("https://kafalatyateem.ehtisham.dev"),
};

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale} dir="ltr">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex justify-center text-primary ",
          fontSans.variable
        )}
      >
        <main className="max-w-[1400px] px-3 space-y-8 sm:px-8 md:px-10 lg:px-32">
          <NavBar />
          {children}
          <Separator />
          <Footer />
        </main>
      </body>
    </html>
  );
}
