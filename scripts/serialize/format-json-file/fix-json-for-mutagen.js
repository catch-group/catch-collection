/* eslint-disable regexp/no-super-linear-move */
/* eslint-disable security/detect-non-literal-regexp */

const subRegexes = /** @type {const} */ ([
	[[1], /BNAM|ChanceNone|FMAH|FMIH|ODTY|XILS/v],
	[[2], /DirectionalFade|(?:Far|Near)Height(?:Mid|Range)|Fog(?:(?:Far|Near)(?:Scale)?|High(?:Far|Near)Scale|Max|Power)|HighDensityScale|Unknown(?:1[467]|6)/v],
	[[3], /Intensity|Position/v],
	[[5], /BlendIntensity/v],
	[[3, 5], /Value/v],
	[[5, 9], /ComparisonValue/v]
]);

const subRegexesUnion = new RegExp(
	[
		...subRegexes
			.map(([tabCounts, subRegex]) => {
				const tabCountsRegexUnion = new RegExp(
					tabCounts
						.map((tabCount) => `\\t{${tabCount}}`)
						.join("|"),
					"v"
				);

				return new RegExp(`(?:${tabCountsRegexUnion.source})"(?:${subRegex.source})"`, "gmv");
			}),
		/\s+\{\s+"MutagenObjectType": "ScriptFloatProperty",[^\}]+"Data"/gv
	]
		.map((subRegex) => `(?:${subRegex.source})`)
		.join("|")

);

const floatsRegexPrefix = String.raw`(?<!^\s+"Resistances": \[[^\]]+"Value": )(?<=^(?:`;
const floatsRegexSuffix = String.raw`): )(?<number>-?\d+)(?=,|\n)`;

const floatsRegex = new RegExp(
	`${floatsRegexPrefix}${subRegexesUnion.source}${floatsRegexSuffix}`,
	"gmv"
);

/**
 *
 * @param {string} json
 * @returns {string}
 * @example
 */
const fixJsonForMutagen = (json) => json.replaceAll(floatsRegex, "$<number>.0");

export default fixJsonForMutagen;
