import { defineArrayMember } from "sanity";
import { defineField } from "sanity";
import { defineType } from "sanity";
import {BookText} from "lucide-react"


export const aboutepagetype = defineType({
    type: "document",
    name: "aboutepage",
    title: "Aboute Page",
    icon : BookText,
    fields: [
      defineField({
        type: "array",
        name: "content",
        title: "Content",
        validation: (e) => e.required(),
        of: [defineArrayMember({ type: "block" , })],
      }),
    ],
  });
  
  
  