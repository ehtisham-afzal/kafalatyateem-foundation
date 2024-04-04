import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { locales } from "@/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("HomePage.title.template"),
      template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [
      "Orphanage",
      "Education",
      "Orphans",
      "Childcare",
      "Yateem",
      "YateemKhana",
      "Home",
      "Homeless",
      "Homelessness in Pakistan",
    ],
    authors: [
      {
        name: "ehtisham afzal",
        url: "https://ehtisham.dev",
      },
    ],
    creator: "ehtisham afzal",
    openGraph: {
      type: "website",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@ehtisham_dev",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = {
  params: {
    locale: string;
  };
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
