import "./globals.css";
import { siteConfig } from "@/config/site";

export async function generateMetadata() {
  return {
    title: {
      default: "Kafalat e yateem foundation malakand NGO for Orphans",
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

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
