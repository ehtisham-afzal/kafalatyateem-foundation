import ContactUsForm from "@/components/ContactUsForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "@/lib/Data";
import {
  MailIcon,
  MapPinnedIcon,
  MessageCircleMore,
  PhoneCallIcon,
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

        <div className="space-y-4 w-full flex flex-col gap-6 justify-between lg:flex-row">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Contact information</h3>
              <p className="text-muted-foreground">
                Reach out to us using the information below.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MailIcon className="size-6" />
                <div className="">
                  <h4 className="font-semibold">Email</h4>
                  <p>iftikharfarooqi3115@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneCallIcon className="w-6 h-6 flex-shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-semibold">Call us</h4>
                  <p>+92 344 5003115</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPinnedIcon className="w-6 h-6 flex-shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-semibold">Address</h4>
                  <p>
                    zlum kot roud dheri alladand malakand agency kpk pakistan
                  </p>
                </div>
              </div>
            </div>
            <iframe
              className="w-full h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.389510682023!2d72.03128196706386!3d34.59923645075192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc0175207f721b%3A0xf49583e88babd73b!2sKafalat%20Yatim%20center!5e0!3m2!1sen!2s!4v1712144146463!5m2!1sen!2s"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Social media</h3>
              <p className="text-muted-foreground">
                Follow us on social media for updates.
              </p>
            </div>
            <div className="grid grid-cols-3 items-center gap-4 text-center">
              {SocialLinks.map((link, i) => (
                <a
                  href={link.IdURL}
                  key={i}
                  className="text-lg hover:text-blue-500"
                  target="__blank"
                >
                  {t(`NavLinks.Socials.${link.Name}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
