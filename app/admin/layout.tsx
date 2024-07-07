// import Footer from "@/components/Footer";
// import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex justify-center ",
          fontSans.variable
        )}
      >
        {/* <main className="max-w-[1400px] px-3 space-y-8 sm:px-8 md:px-10 lg:px-32 "> */}
          {children}
        {/* </main> */}
      </body>
    </html>
  );
}
