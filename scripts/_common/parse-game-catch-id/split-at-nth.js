/* eslint-disable security/detect-non-literal-regexp -- safe */

/**
 * @template {number} N
 * @template {readonly unknown[]} [T=readonly []]
 * @typedef {T["length"] extends N ? T : BuildTupleOfLength<N, readonly [...T, unknown]>} BuildTupleOfLength
 */

/**
 * @template {string} S
 * @template {string} Sep
 * @template {readonly unknown[]} N
 * @typedef {(
 * N extends readonly [unknown, ...infer R]
 * 	? (
 * 		S extends `${infer Before}${Sep}${infer After}`
 * 			? R extends readonly []
 * 				? readonly [Before, After]
 * 				: (
 * 					SplitAtNthImpl<After, Sep, R> extends readonly [infer A extends string, infer B extends string]
 * 						? [`${Before}${Sep}${A}`, B]
 * 						: [S]
 * 				  )
 * 			: [S] | readonly [string, string]
 * 	  )
 * 	: [S]
 * )} SplitAtNthImpl
 */

/**
 * @template {string} S
 * @template {string} Sep
 * @template {number} N
 * @typedef {SplitAtNthImpl<S, Sep, BuildTupleOfLength<N>>} SplitAtNth
 */

/**
 * @template {string} StringTemplate
 * @template {string} SeparatorTemplate
 * @template {number} NthTemplate
 * @param {StringTemplate} string
 * @param {SeparatorTemplate} separator
 * @param {NthTemplate} nth
 * @returns {SplitAtNth<StringTemplate, SeparatorTemplate, NthTemplate>}
 * @example
 */
const splitAtNth = (string, separator, nth) => {
	const regex = new RegExp(`(?<=(?:${separator}.*){${nth - 1}})${separator}(.*?)$`, "sv");

	return /** @type {SplitAtNth<StringTemplate, SeparatorTemplate, NthTemplate>} */ (
		string.split(regex).filter(Boolean)
	);
};

export default splitAtNth;
