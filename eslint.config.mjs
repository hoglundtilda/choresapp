import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
  {
    // Modify the file patterns to exclude tsconfig.json and any other JSON files explicitly
    files: ['**/*.{js,mjs,cjs,ts}', '!tsconfig.json', '!**/tsconfig.json', '!**/*.json'],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
      parserOptions: {
        ecmaFeatures: {
          jsx: false,
        },
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: pluginImport,
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
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
  },
];
