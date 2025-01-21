import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import tseslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import unicornPlugin from 'eslint-plugin-unicorn'
import sortImportPlugin from 'eslint-plugin-simple-import-sort'
import checkFilePlugin from 'eslint-plugin-check-file'
import jestPlugin from 'eslint-plugin-jest'

export default tseslint.config(
    {
        files: ['src/**/*.ts'],
        ignores: ['node_modules/**', 'dist/**'],
        plugins: {
            '@typescript-eslint': tseslintPlugin,
            import: importPlugin,
            prettier: prettierPlugin,
            sortImport: sortImportPlugin,
            checkFile: checkFilePlugin,
        },
        extends: [
            eslint.configs.recommended,
            tseslint.configs.strict,
            tseslint.configs.stylistic,
            unicornPlugin.configs['flat/all'],
        ],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
                tsconfigRootDir: import.meta.dirname,
                ecmaVersion: 'latest',
                project: './tsconfig.json',
            },
            globals: {
                'jest/globals': true,
            },
        },
        rules: {
            'no-console': 'warn',
            'import/no-unresolved': 'error',
            'import/order': ['error', { 'newlines-between': 'always', named: true }],
            'import/named': 'error',
            'import/default': 'error',
            'sortImport/imports': 'error',
            'sortImport/exports': 'error',
            'no-var': 'error',
            eqeqeq: 'error',
            camelcase: 'error',
            'checkFile/filename-naming-convention': [
                'error',
                { '**/*.{ts}': 'CAMEL_CASE' },
                { ignoreMiddleExtensions: true },
            ],
            'checkFile/folder-naming-convention': [
                'error',
                {
                    'src/**/': 'CAMEL_CASE',
                },
            ],
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.ts'],
                    moduleDirectory: ['node_modules', 'src/'],
                },
            },
        },
    },
    {
        files: ['**/*.spec.ts'],

        plugins: {
            '@typescript-eslint': tseslintPlugin,
            import: importPlugin,
            prettier: prettierPlugin,
            sortImport: sortImportPlugin,
            checkFile: checkFilePlugin,
            jest: jestPlugin,
        },
        extends: [
            eslint.configs.recommended,
            tseslint.configs.strict,
            tseslint.configs.stylistic,
            unicornPlugin.configs['flat/all'],
            jestPlugin.configs['flat/all'],
        ],
    },
)
