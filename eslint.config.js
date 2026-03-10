import eslintReact from '@eslint-react/eslint-plugin'
import eslintJs from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default defineConfig({
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  extends: [eslintJs.configs.recommended, ...tseslint.configs.recommended, eslintReact.configs['recommended-typescript'], eslintReact.configs['disable-conflict-eslint-plugin-react']],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/no-unused-expressions': 'off',
    'react/react-in-jsx-scope': 'off'
  }
})
