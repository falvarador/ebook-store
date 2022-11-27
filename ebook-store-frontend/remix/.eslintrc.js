module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/node',
		'eslint-config-prettier',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'standard-with-typescript',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react'],
	rules: {},
}
