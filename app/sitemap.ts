
// export const baseUrl = 'https://kafalatyateem.com'

import { siteConfig } from "@/config/site"

type Sitemap = Array<{
    url: string
    lastModified?: Date | string
    changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
    priority?: number
    // alternates?: {
    //     languages?: Languages<string>
    // }
}>

export default async function sitemap() {


    const routes: Sitemap = ['', '/About', "/Donate", "/posts", '/TeamBehind', '/Services', 'Contact'].map((route: string) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'daily',
        priority: 1
    }))

    return [...routes]
}