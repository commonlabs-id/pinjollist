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
  plugins: ['@typescript-eslint', 'prettier'],
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
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: Object.assign(typescriptEslintRecommended.rules, typescriptEslintPrettier.rules, {
        '@typescript-eslint/explicit-function-return-type': ['off'],
        'no-undef': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'react/prop-types': 'off',
      }),
    },
  ],
};
