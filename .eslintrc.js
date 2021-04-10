module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 2,
    'class-methods-use-this': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
    },
  },
};
