import {
	alphabetical, isPlainObject, set, traverse
} from "@radashi-org/radashi";

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

	const parsedJson = JSON.parse(fileContent);

	let sortedParsedJson = {};

	traverse(
		parsedJson,
		(value, key, parent, { path }) => {
			sortedParsedJson = set(sortedParsedJson, path.join("."), isPlainObject(value)
				? Object.fromEntries(
					Object.entries(value)
						.toSorted(([keyA], [keyB]) => keyA.localeCompare(keyB))
				)
				: value);
		},
		{ rootNeedsVisit: true }
	);

	const formattedJson = JSON.stringify(sortedParsedJson, replacer, "\t");

	await writeTextFile(filePath, formattedJson);
};

export default formatJsonFile;
