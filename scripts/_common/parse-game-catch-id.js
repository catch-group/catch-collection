import separator from "./_common/separator.js";
import {
	parseGameModId,
	parseModId,
	splitAtNth
} from "./parse-game-catch-id/_exports.js";

/**
 * @import { ParseGameCatchIdReturnType } from "./parse-game-catch-id/_exports.js";
 * @import { GameCatchId } from "./_common/game-catch-id.doc.js";
 */

/**
 *
 * @template {GameCatchId} GameCatchIdTemplate
 * @param {GameCatchIdTemplate} gameCatchId
 * @returns {ParseGameCatchIdReturnType<GameCatchIdTemplate>}
 * @example
 */
const parseGameCatchId = (gameCatchId) => {
	const splitPosition = 4;
	const [overriddenGameModId, overridingModId] = splitAtNth(
		gameCatchId,
		separator,
		splitPosition
	);

	const {
		gameCode,
		gameId,
		gamePlatformId,
		modCode: overriddenModCode,
		modId: overriddenModId,
		modPlatformId: overriddenModPlatformId
	} = parseGameModId(overriddenGameModId);

	const {
		modCode: overridingModCode,
		modPlatformId: overridingModPlatformId
	} = parseModId(overridingModId);

	return /** @type {ParseGameCatchIdReturnType<GameCatchIdTemplate>} */ ({
		gameCode,
		gameId,
		gamePlatformId,
		overriddenModCode,
		overriddenModId,
		overriddenModPlatformId,
		overridingModCode,
		overridingModId,
		overridingModPlatformId
	});
};

export default parseGameCatchId;
