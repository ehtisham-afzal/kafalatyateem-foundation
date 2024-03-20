import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("AboutePage.title") };
}

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <main className="w-full min-h-[50dvh] min-w-full prose prose-lg md:prose-xl px-1">
      <h1>{t("About.Title")}</h1>
      <h2>little bit About foundation</h2>
      <p>
        Esse labore consequat duis consequat laboris elit enim aliquip qui in
        Lorem exercitation laboris. Reprehenderit cillum exercitation in laborum
        ex eu consectetur tempor. Quis magna amet excepteur proident enim sit
        laborum. Ad culpa laborum aute laboris veniam nulla. Pariatur fugiat
        elit ad exercitation deserunt proident enim ullamco dolore consequat
        eiusmod. Et cupidatat ea aliqua qui est. Proident quis nisi tempor
        labore proident esse adipisicing velit ad. Amet qui pariatur minim sint
        culpa qui enim occaecat esse ipsum velit. Laboris sit ad tempor Lorem
        sint pariatur nulla. Laboris reprehenderit deserunt duis nulla. Amet
        voluptate est dolore consequat ullamco adipisicing Lorem minim id do
        cillum anim amet eu. Ut Lorem consectetur qui irure ipsum dolore
        laboris. Incididunt cillum incididunt nostrud sint in laboris in amet
        amet. Qui consectetur ex tempor esse incididunt commodo est nostrud
        mollit irure fugiat mollit quis sit. Culpa est enim do cupidatat
        nostrud. Pariatur sit do irure nulla consectetur officia tempor amet
        ullamco nisi qui adipisicing. Et dolore est pariatur officia qui aliquip
        anim deserunt eu nulla cupidatat consequat cupidatat.
      </p>
      <h2>about peoples behind foundation</h2>
      <p>
        Sunt labore id voluptate labore magna nisi deserunt esse nisi veniam
        commodo. Pariatur do excepteur voluptate est cupidatat fugiat
        adipisicing nulla sunt officia id est dolore magna. Nostrud culpa nisi
        tempor ad culpa id aliquip aliquip excepteur. Cupidatat do do esse
        commodo voluptate ex ullamco non id aliquip fugiat deserunt. Laboris
        nisi ullamco non adipisicing ea ipsum quis. Non pariatur do esse nostrud
        dolore tempor laboris ipsum culpa minim mollit anim exercitation
        ullamco. Officia do velit aliquip tempor do ex eu nisi ut ex fugiat
        officia deserunt.
      </p>
    </main>
  );
};

export default Page;
