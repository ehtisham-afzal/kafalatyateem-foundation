import { use } from "react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

const Page = (props: Props) => {
  const params = use(props.params);

  const {
    locale
  } = params;

  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <p className="text-center text-red-500">{t("DonatePage.BlankPage-p")}</p>
  );
};

export default Page;
