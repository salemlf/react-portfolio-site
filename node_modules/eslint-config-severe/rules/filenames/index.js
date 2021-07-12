module.exports = {
  plugins: ['filenames'],
  rules: {
    // File/folder names must use kebab case.
    'filenames/match-regex': ['error', '^([a-z0-9]+)([^A-Z][a-z0-9]+)*$'],

    // Exported items can resolve to kebab case.
    'filenames/match-exported': ['error', 'kebab'],

    // Allow index.* files.
    'filenames/no-index': 0,
  },
};
