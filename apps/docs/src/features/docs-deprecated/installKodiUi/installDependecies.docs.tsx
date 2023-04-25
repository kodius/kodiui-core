import { BuildElement } from '@/features/docBuilder'

export const installDependecies: BuildElement = {
  label: '1. Install dependecies',
  description: {
    description: [
      '@kodiui/ui',
      '@vanill-extract - optional (for building components)',
      'NextJS plugin',
    ],
    codeSnippet: [
      `pnpm install @kodiui/ui @vanilla-extract/css`,
      `pnpm install @vanilla-extract/recipes @vanilla-extract/sprinkles`,
      `pnpm install @vanilla-extract/next-plugin`,
    ],
  },
}
