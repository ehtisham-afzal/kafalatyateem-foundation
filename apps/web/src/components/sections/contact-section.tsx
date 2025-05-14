"use client";

import { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Github, Dribbble } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import type { PagebuilderType } from "@/types";
import { RichText } from "@/components/richtext";

// Schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy.",
  }),
});

type ContactSectionBlockProps = PagebuilderType<"contactSection">;

export function ContactSectionBlock({
  sectionLabel,
  sectionTitle,
  sectionDescription,
  formFields,
  privacyText,
  privacyLink,
  submitText,
  officesTitle,
  officesDescription,
  officeLocations,
  emailTitle,
  emailDescription,
  emailDepartments,
  socialTitle,
  socialPlatforms,
  mapsApiKey,
  mapsDefaultZoom,
  mapsDefaultCenter,
}: ContactSectionBlockProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Setup form with react-hook-form and zod validation
  const contactForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      privacyPolicy: false,
    },
  });

  // Form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Typically send the form data to your backend
    contactForm.reset();
    alert("Form submitted successfully!");
  }

  // Helper to render the appropriate social icon
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case "facebook":
        return <Facebook className="h-6 w-6" />;
      case "instagram":
        return <Instagram className="h-6 w-6" />;
      case "github":
        return <Github className="h-6 w-6" />;
      case "dribbble":
        return <Dribbble className="h-6 w-6" />;
      default:
        return null;
    }
  };

  // Initialize Google Maps
  useEffect(() => {
    if (!mapLoaded && mapRef.current && mapsApiKey) {
      const loadGoogleMaps = () => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
      };

      const initMap = () => {
        if (!mapRef.current) return;

        const mapOptions = {
          zoom: mapsDefaultZoom || 5,
          center: mapsDefaultCenter || { lat: 35.0844, lng: -106.6504 },
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#242f3e" }],
            },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#242f3e" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
          ],
        };

        // @ts-ignore - Google Maps will be loaded by the script
        const map = new google.maps.Map(mapRef.current, mapOptions);

        // Add markers for each office
        if (officeLocations && officeLocations.length > 0) {
          officeLocations.forEach((location) => {
            if (!location.coordinates) return;

            // @ts-ignore - Google Maps will be loaded by the script
            const marker = new google.maps.Marker({
              position: location.coordinates,
              map: map,
              title: `${location.region} - ${location.address}`,
            });

            // @ts-ignore - Google Maps will be loaded by the script
            const infoWindow = new google.maps.InfoWindow({
              content: `
                <div style="color: #242f3e; padding: 8px;">
                  <h3 style="font-weight: bold; margin-bottom: 4px;">${location.region}</h3>
                  <p style="margin: 0;">${location.address}</p>
                  <p style="margin: 0;">${location.zipCode}</p>
                </div>
              `,
            });

            marker.addListener("click", () => {
              infoWindow.open(map, marker);
            });
          });
        }

        setMapLoaded(true);
      };

      loadGoogleMaps();
    }
  }, [
    mapRef,
    mapLoaded,
    mapsApiKey,
    mapsDefaultZoom,
    mapsDefaultCenter,
    officeLocations,
  ]);

  return (
    <section className="w-full bg-background container">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left column - Contact form */}
        <div className="py-6 px-2 lg:p-10 space-y-6 max-w-xl mx-auto">
          {" "}
          <div className="space-y-4">
            {sectionLabel && <p className="text-muted-foreground">{sectionLabel}</p>}
            {sectionTitle && (
              <h2 className="text-3xl md:text-4xl font-bold">{sectionTitle}</h2>
            )}
            {sectionDescription && (
              <div className="text-muted-foreground max-w-md">
                <RichText richText={sectionDescription} />
              </div>
            )}
          </div>
          <Form {...contactForm}>
            <form
              onSubmit={contactForm.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={contactForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={formFields?.namePlaceholder || "Name"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={formFields?.emailPlaceholder || "Email"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={contactForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={
                          formFields?.messagePlaceholder || "Type your message"
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={contactForm.control}
                name="privacyPolicy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-muted-foreground font-normal">
                        {privacyText || "By selecting this you agree to our"}{" "}
                        {privacyLink && (
                          <a
                            href={privacyLink.url}
                            className=" underline "
                          >
                            {privacyLink.text || "Privacy Policy"}
                          </a>
                        )}
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
              >
                {submitText || "Send message"}
              </Button>
            </form>
          </Form>
        </div>

        {/* Right column - Office locations, email, social */}
        <div className="p-6 lg:p-10 space-y-10 bg-accent rounded-3xl">
          {/* Office locations */}
          {officeLocations && officeLocations.length > 0 && (
            <div className="space-y-4">
              {officesTitle && (
                <h3 className="text-xl font-bold">{officesTitle}</h3>
              )}
              {officesDescription && (
                <p className="text-muted-foreground">{officesDescription}</p>
              )}

              {/* Google Maps */}
              <div
                ref={mapRef}
                className="w-full h-[250px] mt-4 rounded-md overflow-hidden"
                aria-label="Map showing our office locations"
              ></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {officeLocations.map((location, index) => (
                  <div key={index} className="space-y-1">
                    {location.region && (
                      <h4 className="font-medium">{location.region}</h4>
                    )}
                    {location.address && (
                      <p className="text-muted-foreground">{location.address}</p>
                    )}
                    {location.zipCode && (
                      <p className="text-muted-foreground">{location.zipCode}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <hr className="border" />

          {/* Email us */}
          {emailDepartments && emailDepartments.length > 0 && (
            <div className="space-y-4">
              {emailTitle && (
                <h3 className="text-xl font-bold">{emailTitle}</h3>
              )}
              {emailDescription && (
                <p className="text-muted-foreground">{emailDescription}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {emailDepartments.map((department, index) => (
                  <div key={index} className="space-y-1">
                    {department.name && (
                      <h4 className="font-medium">{department.name}</h4>
                    )}
                    {department.email && (
                      <a
                        href={`mailto:${department.email}`}
                        className="text-muted-foreground"
                      >
                        {department.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <hr className="border" />

          {/* Social media */}
          {socialPlatforms && socialPlatforms.length > 0 && (
            <div className="space-y-4">
              {socialTitle && (
                <h3 className="text-xl font-bold">{socialTitle}</h3>
              )}
              <div className="flex space-x-6 mt-4">
                {socialPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    aria-label={platform.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {renderSocialIcon(platform.icon)}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
