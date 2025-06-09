module.exports = {
  parserOptions: {
    requireConfigFile: false
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  rules: {
    // Add any custom rules here
  }
}