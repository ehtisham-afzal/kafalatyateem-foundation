import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/separator";
import { handleError } from "@/lib/clientUtils";
import { cn } from "@/lib/utils";
import { SanityLive } from "@/sanity/lib/live";
import LocalFont from "next/font/local";

const fontSans = LocalFont({
  src: "./../fonts/GeistVF.woff",
  display: "swap",
});

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children } = props;

  return (
    <main
      className={cn(
        "min-h-screen bg-background font-sans antialiased flex justify-center ",
        fontSans.className
      )}
    >
      <div className="max-w-[1400px] px-3 space-y-8 sm:px-8 md:px-10 lg:px-32 ">
        <NavBar />
        {children}
        <Separator />
        <Footer />
        <SanityLive onError={handleError} />
      </div>
    </main>
  );
}
