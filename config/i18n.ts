export const defaultLocale = 'en'
export const locales = ['en', 'ar', 'de', 'pk'] as const
export const localePrefix = 'always' // or 'as-needed'

export type Locale = (typeof locales)[number] 