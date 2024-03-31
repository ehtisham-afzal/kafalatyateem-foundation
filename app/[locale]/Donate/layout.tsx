import NavLinks from "@/components/DonatePage/NavLinks";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { locales } from "@/navigation";
import { Loader2, TriangleAlertIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("DonatePage.title") };
}

const DonatePageLayoute = ({ params: { locale }, children }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <section className="w-full min-h-[50dvh] space-y-14 max-w-[52.5rem]">
      <Alert variant="destructive">
        <TriangleAlertIcon className="size-4" />
        <AlertTitle>Here Pleas!</AlertTitle>
        <AlertDescription>
          This page is under heavy construction🚧 and not ready yet
        </AlertDescription>
      </Alert>

      <h2 className="pb-2 mb-4 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0">
        {t("DonatePage.Title")}
      </h2>

      <div className="p-6 border rounded-md">
        <h3 className="mb-4 text-xl font-medium">
          {t("DonatePage.PaymentMethods")}
        </h3>
        <p className="mb-6 text-sm text-gray-600">
          {t("DonatePage.SelectPaymentMethod")}
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

export default DonatePageLayoute;
