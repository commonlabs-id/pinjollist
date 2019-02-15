const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin/lib/configs/recommended.json');
const typescriptEslintPrettier = require('eslint-config-prettier/@typescript-eslint');

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: Object.assign(typescriptEslintRecommended.rules, typescriptEslintPrettier.rules, {
        'no-undef': 'off',
        '@typescript-eslint/explicit-function-return-type': ['off'],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
      }),
    },
  ],
};
