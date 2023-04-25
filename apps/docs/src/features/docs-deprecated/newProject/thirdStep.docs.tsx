import { BuildElement } from '@/features/docBuilder'

export const thirdStep: BuildElement = {
  label: '3. Setup Husky',
  description: {
    description: [
      'Install Husky:',
      'Add scripts to package.json:',
      'In .husky/pre-commit paste this:',
    ],
    codeSnippet: [
      `pnpm dlx husky-init && pnpm install`,
      `"format": "prettier --check --ignore-path .gitignore --ignore-path .prettierignore .",
"format:fix": "prettier --write --ignore-path .gitignore --ignore-path .prettierignore .",
"validate": "npm-run-all --parallel lint format"`,
      `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
      
pnpm validate`,
    ],
  },
}
