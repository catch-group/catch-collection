import separator from "../_common/separator.js";

/**
 * @import { Split } from "type-fest";
 * @import { ParseModIdReturnType } from "../filtered-game-catch-ids/_common/parse-mod-id-return-type.doc.js";
 * @import { ModId } from "../_common/mod-id.doc.js";
 */

/**
 * @template {ModId} ModIdTemplate
 * @param {ModIdTemplate} modId
 * @returns {ParseModIdReturnType<ModIdTemplate>}
 * @throws {Error}
 * @example
 */
const parseModId = (modId) => {
	const parts = /** @type {Split<ModIdTemplate, separator>} */ (modId.split(separator));

	if (parts.length !== 2) {
		throw new Error(`Invalid modId: ${modId}`);
	}

	const [modPlatformIdString, modCode] = parts;

	return /** @type {ParseModIdReturnType<ModIdTemplate>} */ ({
		modCode,
		modPlatformId: Number(modPlatformIdString)
	}
	);
};

export default parseModId;
