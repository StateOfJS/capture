export type MosaicConfig = Readonly<{
    thumb_width: number
    thumb_height: number
    columns: number
    background: number
}>

// `capture.yml`
export type CaptureConfig = Readonly<{
    baseUrl: string
    mosaic: MosaicConfig
}>

export type SitemapBlock = Readonly<{
    id: Readonly<string>
    enableExport?: Readonly<boolean>
}>

export type SitemapPage = Readonly<{
    id: string
    path: string
    blocks?: SitemapBlock[]
    children?: SitemapPage[]
}>

// `sitemap.yml` (VS `raw_sitemap.yml`)
// types only cover what's being used for capturing.
export type Sitemap = Readonly<{
    locales: { id: string }[]
    contents: SitemapPage[]
}>
