import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent } from "@workspace/ui/components/card";

import type { PagebuilderType } from "@/types";

import { RichText } from "../richtext";

type StatsBlockProps = PagebuilderType<"stats">;

type StatItemProps = {
  title: string;
  value: string;
  description?: string | null;
};

function StatItem({ title, value, description }: StatItemProps) {
  return (
    <Card className="flex flex-col hover:shadow-md p-6 rounded-3xl">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-3 text-4xl md:text-5xl tracking-tight">{value}</p>
      {description && (
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      )}
    </Card>
  );
}

export function StatsBlock({
  eyebrow,
  title,
  description,
  stats,
}: StatsBlockProps): React.JSX.Element {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 w-full mx-auto">
        <div className="flex flex-col space-y-8  mx-auto w-full">
          {/* Section header */}
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6">
            {eyebrow && <Badge variant="secondary">{eyebrow}</Badge>}
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl ">
              {title}
            </h2>
            {description && (
              <RichText
                richText={description}
                className="max-w-3xl text-base md:text-lg text-muted-foreground"
              />
            )}
          </div>

          {/* Stats grid */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
              {stats.map((stat) => (
                <StatItem
                  key={stat._key}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
