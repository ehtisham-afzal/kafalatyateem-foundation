// filepath: c:\ScriptCodes\turbo-start-sanity\apps\web\src\components\sections\testimonial-section.tsx
import { Badge } from "@workspace/ui/components/badge";
import type { PagebuilderType } from "@/types";
import { RichText } from "../richtext";
import { SanityImage } from "../sanity-image";
import { Card } from "@workspace/ui/components/card";

type TestimonialSectionBlockProps = PagebuilderType<"testimonialSection">;

export function TestimonialSectionBlock({
  eyebrow,
  title,
  description,
  testimonials,
}: TestimonialSectionBlockProps): React.JSX.Element {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container">
        <div className="flex flex-col items-center space-y-8 text-center w-full">
          {/* Section header */}
          <div className="space-y-4">
            {eyebrow && <Badge variant="secondary">{eyebrow}</Badge>}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <div className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
                <RichText richText={description} />
              </div>
            )}
          </div>

          {/* Testimonials grid */}
          {testimonials && testimonials.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial._key}
                  className="flex flex-col p-6 hover:shadow-md rounded-3xl"
                >
                  <blockquote className="flex-1">
                    <p className="text-foreground text-base md:text-lg leading-relaxed text-start">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-4 mt-6">
                    {testimonial.author?.avatar && (
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <SanityImage
                          asset={testimonial.author.avatar}
                          alt={`Avatar of ${testimonial.author.name || "author"}`}
                          className="object-cover"
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                    <div className="flex flex-col items-start">
                      {testimonial.author?.name && (
                        <span className="text-foreground font-medium">
                          {testimonial.author.name}
                        </span>
                      )}
                      {testimonial.author?.title && (
                        <span className="text-muted-foreground text-sm">
                          {testimonial.author.title}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
