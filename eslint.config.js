import pumpnEslintConfig from "@pumpn/eslint-config";

const eslintConfig = [
	...pumpnEslintConfig,
	{
		rules: {
			"@eslint-react/naming-convention/filename": "off",
			"func-params-args/func-args": [
				"warn",
				{
					global: 3,
					join: -1,
					reduce: 4
				}
			],
			"regexp/require-unicode-sets-regexp": "error",
			"security/detect-possible-timing-attacks": "off",
			"unicorn/prevent-abbreviations": [
				"error",
				{
					ignore: [/mod/iv]
				}
			]
		}
	},
	{
		files: ["**/*.doc.js"],
		rules: {
			"import-x/unambiguous": "off",
			"unicorn/no-empty-file": "off",
			"unicorn/prevent-abbreviations": "off"
		}
	},
	{
		ignores: [
			"**/*.md/*.js",
			"**/*.jsdoc-defaults",
			"**/*.jsdoc-params",
			"**/*.jsdoc-properties"
		]
	}
];

export default eslintConfig;
