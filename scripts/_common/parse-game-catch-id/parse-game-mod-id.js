import separator from "../_common/separator.js";

import { parseGameId } from "./parse-game-mod-id/_exports.js";
import parseModId from "./parse-mod-id.js";
import splitAtNth from "./split-at-nth.js";

/**
 * @import { ParseGameModIdReturnType } from "./_common/_exports.js";
 * @import { GameModId } from "../_common/game-mod-id.doc.js";
 */

/**
 *
 * @template {GameModId} GameModIdTemplate
 * @param {GameModIdTemplate} gameModId
 * @returns {ParseGameModIdReturnType<GameModIdTemplate>}
 * @example
 */
const parseGameModId = (gameModId) => {
	const parts = splitAtNth(gameModId, separator, 2);

	if (parts.length !== 2) {
		throw new Error(`Invalid gameModId: ${gameModId}`);
	}

	const [gameId, modId] = parts;

	return /** @type {ParseGameModIdReturnType<GameModIdTemplate>} */ ({
		...parseModId(modId),
		...parseGameId(gameId),
		gameId,
		modId
	});
};

export default parseGameModId;
