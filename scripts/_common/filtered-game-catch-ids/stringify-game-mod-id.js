import separator from "../_common/separator.js";

import {
	stringifyGameId,
	stringifyModId
} from "./_common/_exports.js";

/**
 * @import { StringifyGameModIdOptions } from "./_common/_exports.js";
 * @import { StringifyGameModIdReturnType } from "./stringify-game-mod-id/_exports.js";
 */

/**
 *
 * @template {StringifyGameModIdOptions} OptionsTemplate
 * @param {OptionsTemplate} options - The root object
 * @returns {StringifyGameModIdReturnType<OptionsTemplate>}
 * @example
 */
const stringifyGameModId = ({
	gameCode,
	gameId,
	gamePlatformId,
	modCode,
	modId,
	modPlatformId
}) => /** @type {StringifyGameModIdReturnType<OptionsTemplate>} */ (
	[
		gameId ?? stringifyGameId({
			gameCode,
			gamePlatformId
		}),
		modId ?? stringifyModId({
			modCode,
			modPlatformId
		})
	].join(separator)
);

export default stringifyGameModId;
