import { BuildElement } from '@/features/docBuilder'

export const secondStep: BuildElement = {
  label: '2. Setup ESLint and Prettier',
  description: {
    description: [
      'Install dependencies',
      'Rename .eslinttrc.json to .eslinttrc.js and paste this:',
      'Create .prettierrc and paste this:',
      'Create .eslintignore and paste this:',
      'Create .prettierignore and paste this:',
    ],
    codeSnippet: [
      `pnpm install -D prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks lint-staged npm-run-all tsconfig-paths-webpack-plugin `,
      `module.exports = {
        root: true,
        env: {
          node: true,
          es6: true,
        },
        parserOptions: { ecmaVersion: 8, sourceType: 'module' },
        ignorePatterns: ['node_modules/*'],
        extends: ['eslint:recommended', 'plugin:@next/next/recommended'],
        overrides: [
          {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: {
              react: { version: 'detect' },
              'import/resolver': {
                typescript: {},
              },
            },
            env: {
              browser: true,
              node: true,
              es6: true,
            },
            extends: [
              'eslint:recommended',
              'plugin:import/errors',
              'plugin:import/warnings',
              'plugin:import/typescript',
              'plugin:@typescript-eslint/recommended',
              'plugin:react/recommended',
              'plugin:react-hooks/recommended',
              'plugin:jsx-a11y/recommended',
              'plugin:prettier/recommended',
              'next/core-web-vitals'
            ],
            rules: {
              'no-restricted-imports': [
                'error',
                {
                  patterns: ['@/features/*/*'],
                },
              ],
              'linebreak-style': ['error', 'unix'],
              'react/prop-types': 'off',
              'import/default': 'off',
              'import/no-named-as-default-member': 'off',
              'import/no-named-as-default': 'off',
      
              'react/react-in-jsx-scope': 'off',
      
              'jsx-a11y/anchor-is-valid': 'off',
      
              '@typescript-eslint/no-unused-vars': ['error'],
      
              '@typescript-eslint/explicit-function-return-type': ['off'],
              '@typescript-eslint/explicit-module-boundary-types': ['off'],
              '@typescript-eslint/no-empty-function': ['off'],
              '@typescript-eslint/no-explicit-any': ['off'],
      
              'prettier/prettier': ['error', {}, { usePrettierrc: true }],
            },
          },
        ],
      }`,
      `{
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false
}`,
      `.next
public
node_modules
!pnpm-lock.yaml
package.json
**/*.test.js
coverage`,
      `.next
public
node_modules
!pnpm-lock.yaml
package.json
**/*.test.js
coverage`,
    ],
  },
}
