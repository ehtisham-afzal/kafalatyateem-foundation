import ContactInformationSection from "@/components/ContactInformationSection";
import ContactUsForm from "@/components/ContactUsForm";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  MessageCircleMore
} from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("ContactPage.title") };
}

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <section className="w-full min-h-[50dvh] min-w-full px-1">
      <h2 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t("Contact.Title")}
      </h2>
      <div className="space-y-12">
        <div className="space-y-2">
          <p className="text-muted-foreground">
            We&apos;re here to help. Fill out the form below and we&apos;ll get
            back to you as soon as possible.
          </p>
        </div>
        <ContactUsForm />

        <Separator />

        <Card className="h-fit  p-2 lg:p-4 bg-gradient-to-t from-primary to-gray-900">
          <Label className="text-lg text-white" htmlFor="Wmessage">
            Send Your Message derectly on whatsApp
          </Label>
          <form className="relative h-fit my-2">
            <Input placeholder="Youre message" type="text" id="Wmessage" />
            <a
              href="https://wa.me/+923445003115?text="
              className="absolute flex items-center justify-center h-8 px-4 font-bold text-white bg-blue-500 rounded-sm hover:bg-blue-600 right-1 top-1 w-28"
              target="__blank"
              type="submit"
            >
              <MessageCircleMore className="size-5 mr-2" />
              Send
            </a>
          </form>
        </Card>

        <ContactInformationSection params={{ locale }} />
      </div>
    </section>
  );
};

export default Page;
