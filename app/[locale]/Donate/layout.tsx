import NavLinks from "@/components/DonatePage/NavLinks";
import { locales } from "@/navigation";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Suspense, use } from "react";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("DonatePage.title") };
}

const DonatePageLayoute = (props: Props) => {
  const params = use(props.params);

  const {
    locale
  } = params;

  const {
    children
  } = props;

  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <section className="w-full min-h-[50dvh] space-y-14 max-w-[52.5rem]">

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
