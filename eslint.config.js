import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'arrow-body-style': ['error', 'as-needed'],
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          printWidth: 120,
          useTabs: false,
          semi: true,
          bracketSameLine: false,
          singleQuote: true,
        },
      ],
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/no-cycle': ['error', { maxDepth: 10 }],
      'import/order': [
        'warn',
        {
          groups: [['external', 'builtin'], 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            { pattern: '@/assets/**', group: 'internal', position: 'after' },
            { pattern: '@/components/**', group: 'internal', position: 'after' },
            { pattern: '@/pages/**', group: 'internal', position: 'after' },
            { pattern: '@/styles/**', group: 'internal', position: 'after' },
            { pattern: '@/**', group: 'internal', position: 'after' },
            { pattern: './*.module.scss', group: 'sibling', position: 'after' },
            { pattern: './*.scss', group: 'sibling', position: 'after' },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      // Enforce Prettier formatting rules as ESLint errors
      indent: ['error', 2],
      'max-len': ['error', { code: 120 }],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],
    },
  },
];
