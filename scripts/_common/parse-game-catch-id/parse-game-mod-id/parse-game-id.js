import separator from "../../_common/separator.js";

/**
 * @import { Split } from "type-fest";
 * @import { ParseGameIdReturnType } from "../_common/parse-game-id-return-type.doc.js";
 * @import { GameId } from "../../_common/game-id.doc.js";
 */

/**
 *
 * @template {GameId} GameIdTemplate
 * @param {GameIdTemplate} gameId
 * @returns {ParseGameIdReturnType<GameIdTemplate>}
 * @example
 */
const parseGameId = (gameId) => {
	const parts = /** @type {Split<GameIdTemplate, separator>} */ (gameId.split(separator));

	if (parts.length !== 2) {
		throw new Error(`Invalid gameId: ${gameId}`);
	}

	const [gamePlatformIdString, gameCode] = parts;

	return /** @type {ParseGameIdReturnType<GameIdTemplate>} */ ({
		gameCode,
		gamePlatformId: Number(gamePlatformIdString)
	});
};

export default parseGameId;
