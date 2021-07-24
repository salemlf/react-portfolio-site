// https://eslint.org/docs/rules/#variables
module.exports = {
  rules: {
    'init-declarations': 0,
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': ['error', {ignoreRestSiblings: true}],
    'no-use-before-define': 'error',
  },
};
