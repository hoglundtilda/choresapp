import { flat } from 'eslint-config-standard'
import globals from 'globals';
import jestPlugin from 'eslint-plugin-jest'
import prettier from 'eslint-config-prettier'
import tseslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    env: {
      browser: false,
      es6: true,
      node: true,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: pluginImport,
      'unused-imports': pluginUnusedImports,
      jest: jestPlugin,
    },
    extends: [flat, prettier],
    rules: {
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/quotes': ['error', 'single'],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
    ignorePatterns: ['node_modules/', '@generated-types', 'bin', '_generated/'],
  },
]
