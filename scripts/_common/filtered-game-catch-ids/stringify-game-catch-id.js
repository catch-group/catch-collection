import separator from "../_common/separator.js";

import {
	stringifyGameId,
	stringifyModId
} from "./_common/_exports.js";

/**
 * @import { StringifyGameCatchIdOptions } from "./_common/_exports.js";
 * @import { StringifyGameCatchIdReturnType } from "./stringify-game-catch-id/_exports.js";
 */

/**
 *
 * @template {StringifyGameCatchIdOptions} OptionsTemplate
 * @param {OptionsTemplate} options - The root object
 * @returns {StringifyGameCatchIdReturnType<OptionsTemplate>}
 * @example
 */
const stringifyGameCatchId = ({
	gameCode,
	gameId,
	gamePlatformId,
	overriddenModCode,
	overriddenModId,
	overriddenModPlatformId,
	overridingModCode,
	overridingModId,
	overridingModPlatformId
}) => /** @type {StringifyGameCatchIdReturnType<OptionsTemplate>} */ (
	[
		gameId ?? stringifyGameId({
			gameCode,
			gamePlatformId
		}),
		overriddenModId ?? stringifyModId({
			modCode: overriddenModCode,
			modPlatformId: overriddenModPlatformId
		}),
		overridingModId ?? stringifyModId({
			modCode: overridingModCode,
			modPlatformId: overridingModPlatformId
		})
	].join(separator)
);

export default stringifyGameCatchId;
