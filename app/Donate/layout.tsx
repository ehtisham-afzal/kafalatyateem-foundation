import NavLinks from "@/components/DonatePage/NavLinks";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export async function generateMetadata() {
  return { title: "Donate Now" };
}

const DonatePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full min-h-[50dvh] space-y-14 max-w-[52.5rem]">
      <h2 className="pb-2 mb-4 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0">
        Donate
      </h2>

      <div className="p-6 border rounded-md">
        <h3 className="mb-4 text-xl font-medium">Payment Methods</h3>
        <p className="mb-6 text-sm text-gray-600">
          Select one the following payment method to donate
        </p>
        <NavLinks />
        <div
          className="flex items-center justify-center w-full border-t-2 min-h-96"
          dir="ltr"
        >
          <Suspense
            fallback={
              <div className="text-center text-gray-500 flex justify-center items-center w-full">
                <Loader2 className="size-10 animate-spin" />
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default DonatePageLayout;
