import { SocialLinks } from "@/lib/Data";
import { MailIcon, MapPinnedIcon, PhoneCallIcon } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";


type Props = {
  params: { locale: string };
};

const ContactInformationSection = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <section>
      <Separator />
      {/* Contact Information */}

      <div className="space-y-4 w-full flex flex-col gap-6 justify-between lg:flex-row mt-6">
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
                <p>zlum kot roud dheri alladand malakand agency kpk pakistan</p>
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
    </section>
  );
};

export default ContactInformationSection;
