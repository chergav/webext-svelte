// @ts-check

import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import tsParser from '@typescript-eslint/parser';
import svelteParser from 'svelte-eslint-parser';
import stylistic from '@stylistic/eslint-plugin';

export default [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginSvelte.configs['flat/recommended'],
	stylistic.configs['recommended-flat'],
	{
		ignores: ['node_modules/**', 'dist/**'],
	},
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.webextensions,
				...globals.node,
			},
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				project: false,
				extraFileExtensions: ['.svelte'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'@stylistic/max-len': ['error', {
				code: 120,
				tabWidth: 4,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			}],
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/jsx-indent-props': [2, 'tab'],
			'@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line' }],
			'@stylistic/multiline-ternary': ['error', 'always-multiline'],
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
			'@stylistic/no-tabs': 'off',
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/object-curly-newline': ['error', {
				multiline: true,
				consistent: true,
			}],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/semi-style': ['error', 'last'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/space-before-function-paren': ['error', {
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			}],
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'no-unused-vars': 'off',
			'no-irregular-whitespace': [
				'error',
				{
					skipStrings: true,
					skipTemplates: true,
					skipRegExps: true,
					skipComments: true,
				},
			],

			'svelte/sort-attributes': [
				'error',
				{
					order: [
						'this',
						'bind:this',
						'id',
						'name',
						'slot',
						{
							match: '/^--/u',
							sort: 'alphabetical',
						},
						['style', '/^style:/u'],
						'class',
						{
							match: '/^class:/u',
							sort: 'alphabetical',
						},
						{
							match: ['!/:/u', '!/^(?:this|id|name|style|class)$/u', '!/^--/u'],
							sort: 'alphabetical',
						},
						['/^bind:/u', '!bind:this', '/^on:/u'],
						{
							match: '/^use:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^transition:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^in:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^out:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^animate:/u',
							sort: 'alphabetical',
						},
						{
							match: '/^let:/u',
							sort: 'alphabetical',
						},
					],
				},
			],
			'svelte/button-has-type': [
				'error',
				{
					button: true,
					submit: true,
					reset: true,
				},
			],
			'svelte/no-useless-mustaches': [
				'error',
				{
					ignoreIncludesComment: false,
					ignoreStringEscape: false,
				},
			],
			'svelte/html-quotes': [
				'error',
				{
					prefer: 'double', // or "single"
					dynamic: {
						quoted: false,
						avoidInvalidUnquotedInHTML: false,
					},
				},
			],
			'svelte/mustache-spacing': [
				'error',
				{
					textExpressions: 'never', // or "always"
					attributesAndProps: 'never', // or "always"
					directiveExpressions: 'never', // or "always"
					tags: {
						openingBrace: 'never', // or "always"
						closingBrace: 'never', // or "always" or "always-after-expression"
					},
				},
			],
			'svelte/no-extra-reactive-curlies': 'error',
			'svelte/shorthand-attribute': ['error', { prefer: 'always' }],
			'svelte/shorthand-directive': ['error', { prefer: 'always' }],
			'svelte/spaced-html-comment': ['error', 'always'],

		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
			},
		},
	},
];
