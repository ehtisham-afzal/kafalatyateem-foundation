import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { homePage } from './homeType'
import { servicesandfacilitiessection } from './servicesAndFacilitiestype'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, homePage, servicesandfacilitiessection],
}
