import globals from 'globals';
import jsPlugin from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
import prettierRecommendedPlugin from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';



export default [
    jsPlugin.configs.recommended,
    ...tseslint.configs.recommended,
    reactPlugin.configs.flat.recommended,
    prettierRecommendedPlugin,
    {
        files: ["packages/*/src/**/*.{ts,tsx}", "scripts/*.js"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        }
    },
    {
        plugins: {
            prettierConfig: prettierConfig,
            'react-hooks': reactHookPlugin,
        },
        
        rules:{
            semi: ["warn"],
            "@typescript-eslint/no-unused-vars": ["warn", {"ignoreRestSiblings": true}],
            "@typescript-eslint/interface-name-prefix": "off",
            ...reactHookPlugin.configs.recommended.rules,
        },
    },
];
