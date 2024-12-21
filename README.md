### react-access-tool

module.exports = {
root: true,
parser: '@typescript-eslint/parser',
parserOptions: {
project: './tsconfig.base.json',
tsconfigRootDir: \_\_dirname,
},
plugins: [
'react',
'react-hooks',
'@typescript-eslint',
'prettier',
],
extends: [
'eslint:recommended',
'plugin:react/recommended',
'plugin:react-hooks/recommended',
'plugin:@typescript-eslint/recommended',
'plugin:prettier/recommended',
],
settings: {
react: {
version: 'detect',
},
},
rules: {
'react/prop-types': 'off',
'@typescript-eslint/explicit-module-boundary-types': 'off',
'no-console': 'warn',
'prettier/prettier': ['error', { singleQuote: true, semi: true }],

},
ignorePatterns: ['node_modules/', 'dist/', 'examples/', 'docs/'],
};
