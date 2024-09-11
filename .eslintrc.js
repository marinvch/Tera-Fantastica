module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      throwIfNamespace: false,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true, // Use eslint-plugin-import for sorting imports
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'import/no-unresolved': 'error', // Turn on errors for missing imports
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
        pathGroups: [
          {
            pattern: '@(react|react-*)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
