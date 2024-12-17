import {
	isPlainObject, set, traverse
} from "@radashi-org/radashi";

import { fixJsonForMutagen } from "./format-json-file/_exports.js";

const {
	readTextFile,
	writeTextFile
} = Deno;

/**
 *
 * @param {string} filePath
 * @param {object} options - The root object
 * @param {Parameters<JSON["stringify"]>[1]} [options.replacer] - The root object
 * @example
 */
const formatJsonFile = async (filePath, { replacer } = {}) => {
	const fileContent = await readTextFile(filePath);

	const parsedJson = JSON.parse(JSON.stringify(JSON.parse(fileContent), replacer));

	let sortedParsedJson = {
		...parsedJson
	};

	traverse(
		parsedJson,
		(value, key, parent, { path }) => {
			sortedParsedJson = set(sortedParsedJson, path.join("."), isPlainObject(value)
				? Object.fromEntries(
					Object.entries(value)
						.toSorted(([keyA], [keyB]) => (
							keyA === "MutagenObjectType"
								? -1
								: (
									keyB === "MutagenObjectType"
										? 1
										: keyA.localeCompare(keyB, "en", { numeric: true })
								)
						))
				)
				: value);
		},
		{ rootNeedsVisit: true }
	);

	const formattedJson = JSON.stringify(sortedParsedJson, null, "\t");

	const fixedJson = fixJsonForMutagen(formattedJson);

	await writeTextFile(filePath, fixedJson);
};

export default formatJsonFile;
