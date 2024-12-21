import globals from 'globals'
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginPrettierConfig from 'eslint-config-prettier';

import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ["packages/*/src/**/*.{ts,tsx}", "scripts/*.js"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                project: path.resolve(__dirname, 'tsconfig.json'),
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            },
        },
        plugins: {
            prettier: pluginPrettier,
            prettierConfig: pluginPrettierConfig,
            react: pluginReact.configs.recommended,
            'react-hooks': pluginReactHooks.configs.recommended
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules:{
            semi: ["warn"],
            "@typescript-eslint/no-unused-vars": ["warn", {"ignoreRestSiblings": true}],
            "@typescript-eslint/interface-name-prefix": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
        ignores: []
    },
];
