import {
	alphabetical, isPlainObject, traverse
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

	const sortedParsedJson = {};

	traverse(
		parsedJson,
		(key, value, parent, { path }) => {
			if (isPlainObject(value)) {
				return Object.fromEntries(
					alphabetical(Object.entries(value), ([innerKey]) => innerKey)
				);
			}

			return value;
		},
		{ rootNeedsVisit: true }
	);

	const formattedJson = JSON.stringify(parsedJson, replacer, "\t");

	await writeTextFile(filePath, formattedJson);
};

export default formatJsonFile;
