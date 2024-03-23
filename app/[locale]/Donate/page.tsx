import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <p className="text-center text-red-500">{t("DonatePage.BlankPage-p")}</p>
  );
};

export default Page;
