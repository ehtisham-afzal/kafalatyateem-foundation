import NavLinks from "@/components/DonatePage/NavLinks";
import { locales } from "@/navigation";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

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
    <section className="w-full min-h-[50dvh] space-y-14">
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
          {children}
        </div>
      </div>
    </section>
  );
};

export default DonatePageLayoute;
