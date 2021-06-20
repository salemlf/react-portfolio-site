module.exports = {
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    './rules/array-func/index.js',
    './rules/eslint/index.js',
    './rules/eslint-comments/index.js',
    './rules/filenames/index.js',
    './rules/import/index.js',
    './rules/jest/index.js',
    './rules/jsx-a11y/index.js',
    './rules/lean-imports/index.js',
    './rules/promise/index.js',
    './rules/react/index.js',

    // Prettier overrides come last
    './rules/prettier/index.js',
  ],

  // http://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: 'babel-eslint',

  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  // https://eslint.org/docs/user-guide/configuring#adding-shared-settings
  settings: {
    react: {
      version: 'detect',
    },
  },
};
