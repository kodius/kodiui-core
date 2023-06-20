export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "KODIUI",
  description: "KODIUI documentation",
  mainNav: [
    {
      title: "KODIUI | Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

export const routes = {
  login: "/login",
  docs: "/docs",
  welcome: "/",
} as const
