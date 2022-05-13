module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  "ignorePatterns": [".eslintrc.js"],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    "project": "./tsconfig.json"
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
  },
};
