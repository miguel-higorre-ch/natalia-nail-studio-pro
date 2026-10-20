module.exports = {
  root: true,
  extends: [
    'astro/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    extraExtensions: ['.astro']
  },
  plugins: [
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.astro'],
      extends: [
        'astro/eslint-config-astro'
      ]
    }
  ],
  ignorePatterns: [
    'dist/',
    '.astro/',
    'node_modules/'
  ]
};