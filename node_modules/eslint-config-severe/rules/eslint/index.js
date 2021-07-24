module.exports = {
  extends: [
    // eslint:recommended must come first
    'eslint:recommended',
    require.resolve('./best-practices.js'),
    require.resolve('./es6.js'),
    require.resolve('./strict-mode.js'),
    require.resolve('./stylistic-issues.js'),
    require.resolve('./variables.js'),
  ],
};
