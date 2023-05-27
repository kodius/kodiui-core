import { BuildElement } from '@/features/docBuilder'

export const firstStep: BuildElement = {
  label: '1. Create new Next.js project',
  description: {
    description: ['Create with:', 'Select these options:'],
    codeSnippet: [
      `pnpm create next-app`,
      `✔ What is your project named? … my-app
✔ Would you like to use TypeScript with this project? … Yes
✔ Would you like to use ESLint with this project? … Yes
✔ Would you like to use "src/" directory with this project? … Yes
✔ Would you like to use experimental "app/" directory with this project? … No
✔ What import alias would you like configured? … @/*
`,
    ],
  },
}