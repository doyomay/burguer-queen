module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'no-use-before-define' : 'off',
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'react/jsx-filename-extension': 'off',
        'no-undef' : 'off',
      }
    }
  ],
};
