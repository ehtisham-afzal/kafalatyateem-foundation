---
description: "Guidelines for adding new components and blocks to the Turbo Start Sanity project"
mode : "agent"
tools : ['etCurrentMilestone', 'file_search', 'semantic_search', 'read_file', 'insert_edit_into_file', 'create_file', 'replace_string_in_file', 'fetch_webpage', ]
---

# Guide for Adding New Blocks to Turbo Start Sanity

This document outlines the complete process for adding a new component block to the Turbo Start Sanity project. Follow these steps in sequence to ensure all parts of the system are properly connected.

## Step 1: Create the React Component

First, create the React component that will render the block on the frontend. Place this in `apps/web/src/components/sections/`:

```tsx
// filepath: apps/web/src/components/sections/feature-list.tsx
import { Badge } from "@workspace/ui/components/badge";
import type { PagebuilderType } from "@/types";
import { RichText } from "../richtext";
import { SanityImage } from "../sanity-image";
import { Buttons } from "../buttons";
import FeatureCard from "@/components/featureCard"

type FeatureListBlockProps = PagebuilderType<"featureList">;

export function FeatureListBlock({
  eyebrow,
  title,
  description,
  features,
}: FeatureListBlockProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid gap-8 md:gap-12">
          {eyebrow && (
            <Badge variant="secondary">{eyebrow}</Badge>
          )}
          {title && <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>}
          {description && (
            <div className="max-w-3xl">
              <RichText richText={description} />
            </div>
          )}

          {features && features.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard data={feature} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

Follow these guidelines:

- Use semantic HTML elements (`section`, `h2`, `h3`, etc.)
- Prefer grid over flex for complex layouts; use flex only for simple parent-child relationships
- Add proper null-checking for optional fields
- Use shared UI components like `Badge`, `Card`, `SanityImage`, etc.
- Use `RichText` for any formatted text content
- Use `Buttons` resolver for any button arrays
- Follow the project's component naming pattern (kebab-case for files)
- Maintain consistent class naming with other components
- For internationalization support, use direction-neutral classes (e.g., `ms` instead of `ml`)

## Step 2: Add Component to PageBuilder

Register the new component in `apps/web/src/components/pagebuilder.tsx`:

```tsx
// 1. Import the component
import { FeatureListBlock } from "./sections/feature-list";

// 2. Add to BLOCK_COMPONENTS object
const BLOCK_COMPONENTS = {
  // ...existing components,
  featureList: FeatureListBlock,
} as const;
```

## Step 3: Create Sanity Schema

Create a schema file in `apps/studio/schemaTypes/blocks/` that defines the content structure:

```typescript
// filepath: apps/studio/schemaTypes/blocks/feature-list.ts
import { defineField, defineType, defineArrayMember } from "sanity";
import { List } from "sanity/icons";
// Only import from lucide-react if no suitable icon exists in sanity/icons
// import { ListChecks } from "lucide-react";

export const featureList = defineType({
  name: "featureList",
  title: "Feature List",
  type: "object",
  icon: List,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      description: "The smaller text that sits above the title to provide context",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "The large text that is the primary focus of the block",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Additional context explaining this section",
      type: "richText",
    }),
    defineField({
      name: "features",
      title: "Features",
      description: "List of features to display in this section",
      type: "array",
      of: [
        defineArrayMember({
          type: "feature",
          preview: {
            select: {
              title: "title",
              media: "icon",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    // for defining image field just use `${imageFragment},`
  ],
  preview: {
    select: {
      title: "title",
      features: "features",
    },
    prepare: ({ title, features }) => ({
      title: title || "Feature List",
      subtitle: `${features.length} feature${features.length === 1 ? "" : "s"}`,
    }),
  },
});

```

Follow these guidelines:

- Always import and use `defineField`, `defineType`, and `defineArrayMember`
- Use icons preferably from `@sanity/icons` first, then consider `lucide-react`
- Include helpful descriptions for content editors for every field
- Add validation rules where appropriate
- Create a meaningful preview configuration
- Follow the established schema patterns
- Use standard field templates for common elements (eyebrow, title, etc.)

## Step 4: Register Schema in Index

Add the new schema to `apps/studio/schemaTypes/blocks/index.ts`:

```typescript
// filepath: apps/studio/schemaTypes/blocks/index.ts
import { featureList } from "./feature-list";
// ...other imports

export const pageBuilderBlocks = [
  // ...existing blocks,
  featureList,
];
```

## Step 5: Add GROQ Query Fragment

Add a query fragment to `apps/web/src/lib/sanity/query.ts`:

```typescript
// filepath: apps/web/src/lib/sanity/query.ts
// Add this new fragment with the other block fragments
const _featureListBlock = /* groq */ `
  _type == "featureList" => {
    _type,
    _key,
    eyebrow,
    title,
    description,
    features[]{
      _key,
      title,
      description,
      icon {
        _type,
        asset->._ref,
        alt
      },
      ${buttonsFragment},
    }
  }
`;

// Then update the pageBuilderFragment by adding your new block:
const pageBuilderFragment = /* groq */ `
  pageBuilder[]{
    ...,
    _type,
    _key,
    ${_ctaBlock},
    ${_heroBlock},
    // ...other blocks,
    ${_featureListBlock},
  }
`;
```

Follow these guidelines:

- Prefix reusable fragments with underscore (e.g., `_featureListBlock`)
- Match the query structure to the schema definition
- Include all fields needed by the React component
- Always include the `_key` field for array items
- Don't expand image assets unless specifically needed
- Follow existing patterns for field expansion
- Maintain proper indentation and consistent style

## Step 6: Generate TypeScript Types

Run the type generation command from the studio directory:

```bash
cd apps/studio && pnpm sanity schema extract && pnpm sanity typegen generate --enforce-required-fields
```

This will:

1. Extract the schema to a schema.json file
2. Generate TypeScript types based on the schema
3. Make types available for the frontend components

## Step 7: Test and Verify

1. Check the Sanity Studio to ensure the new block appears in the page builder
2. Create a test page using the new block
3. Verify that the block renders correctly on the frontend
4. Test with different content configurations
5. Check responsive behavior
6. Verify internationalization works if applicable

## Additional Guidelines

### Reusable Fields

Use these common field patterns for consistency:

- **Rich Text**: For formatted content

  ```typescript
  defineField({
    name: "richText",
    title: "Rich Text",
    description:
      "Large body of text that has links, ordered/unordered lists and headings",
    type: "richText",
  });
  ```

- **Image**: For visual elements

  ```typescript
  defineField({
    name: "image",
    title: "Image",
    type: "image",
    fields: [
      defineField({
        name: "alt",
        type: "string",
        description: "Alternative text for accessibility and SEO",
        title: "Alt Text",
      }),
    ],
  });
  ```

- **Buttons**: For CTAs and links
  ```typescript
  defineField({
    name: "buttons",
    title: "Buttons",
    description: "Add buttons here, the website will handle the styling",
    type: "array",
    of: [{ type: "button" }],
  });
  ```

### Naming Conventions

- Use kebab-case for file names (`feature-list.ts`, not `featureList.ts`)
- Use PascalCase for components and types (`FeatureListBlock`, not `featureListBlock`)
- Use camelCase for fields and variables (`featureTitle`, not `FeatureTitle`)
- Prefix query fragments with underscore (`_featureListBlock`, not `featureListBlock`)

### Component Layout Guidelines

- Use `grid` for complex layouts with multiple elements
- Use `flex` only for simple parent-child relationships or when aligning two sibling elements
- Use appropriate semantic HTML elements:
  - `section` for distinct content sections
  - `article` for self-contained content
  - `h1` through `h6` for hierarchical headings
  - `nav` for navigation menus

### Common Issues

- If the block doesn't appear in the page builder, check that it's properly exported in index.ts
- If TypeScript errors occur, ensure you've run the type generation command
- If the query doesn't return expected data, verify the GROQ fragment matches the schema
- If the component doesn't render, check the pagebuilder.tsx registration

### Performance Considerations

- Keep queries focused and minimal
- Validate user inputs to prevent errors
- Use proper semantic HTML for accessibility
- Optimize images using the SanityImage component
- Use conditional rendering to avoid null reference errors
