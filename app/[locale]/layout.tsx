import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/separator";
import { locales } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";

type Params = {
  params: {
    locale: string;
  };
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      template: t("HomePage.title.template"),
      default: t("HomePage.title.Defualt"),
    },
    description: t("Homepage.Description"),
    metadataBase: new URL("https://kafalatyateem.ehtisham.dev"),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex justify-center ",
          fontSans.variable
        )}
      >
        <main className="max-w-[1400px] px-3 space-y-8 sm:px-8 md:px-10 lg:px-32 ">
          <NavBar />
          {children}
          <Separator />
          <Footer />
        </main>
      </body>
    </html>
  );
}
