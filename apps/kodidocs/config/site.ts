export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description: "Beautifully Music",
  mainNav: [
    {
      title: "Home",
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
