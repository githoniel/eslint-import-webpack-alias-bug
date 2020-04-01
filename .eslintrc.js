module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 2,
    'import/no-extraneous-dependencies': 2
  },
  settings: {
    'import/resolver': { 'webpack': { 'config': 'webpack.alias.config.js' } },
  }
}
