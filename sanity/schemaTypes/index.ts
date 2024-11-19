import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { homePage } from './homeType'
import { servicesandfacilitiessection } from './servicesAndFacilitiestype'
import { aboutepagetype } from './aboutePageType'
import { teamBehined } from './teamBehinedtype'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,
    categoryType,
    postType, authorType,
    homePage,
    aboutepagetype,
    servicesandfacilitiessection,
    teamBehined
  ],
}
