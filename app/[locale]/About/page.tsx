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
    <section className="w-full min-h-[50dvh] min-w-full prose prose-lg md:prose-xl px-1">
      <h2>{t("About.Title")}</h2>
      <p>
        At the heart of Farooqui Orphanage lies a compassionate mission: to
        provide a nurturing home filled with love and happiness for orphans, the
        destitute, and the abandoned. It&apos;s a place where the physical, mental,
        emotional, and spiritual needs of the most vulnerable are met with the
        highest level of care. Education is a cornerstone, offering every child
        the hope and opportunity for a bright future.
      </p>
      <p>
        The vision of Farooqui Orphanage extends beyond immediate care. It
        aspires to become a self-sustaining community, encompassing not just a
        children&apos;s home and orphanage, but also educational institutions like
        schools and universities, a training center, a women&apos;s shelter, and an
        old age home. This vision includes places of worship, hospitals,
        libraries, parks, playgrounds, a technology center, shops, and other
        facilities that contribute to a thriving community.
      </p>
      <p>
        Farooqi Orphanage is dedicated to providing a holistic approach to care.
        It aims to address not only the mental needs of children but also to
        offer a complete package that nurtures their physical, spiritual, and
        emotional well-being. The ultimate goal is to replicate such communities
        globally, offering a beacon of hope and support to children in need
        everywhere.
      </p>
      <p>
        An orphanage serves as a residential institution dedicated to the care
        of children who have been separated from their biological families for
        various reasons. These can range from the loss of parents, abuse, mental
        illness in the family, or economic circumstances that prevent parents
        from caring for their children. The legal responsibility for supporting
        these children varies across countries, but the underlying principle
        remains the same: to provide a safe and caring environment for children
        who need it the most. Farooqui Orphanage stands as a testament to this
        principle, striving to make a difference in the lives of children and
        the community at large.
      </p>
      {/* <h2>about peoples behind foundation</h2>
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
      </p> */}
    </section>
  );
};

export default Page;
