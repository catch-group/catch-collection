import separator from "../../_common/separator.js";

/**
 * @import { Join } from "type-fest";
 * @import { StringifyGameIdOptions } from "./_common/_exports.js";
 * @import { StringifyGameIdReturnType } from "./stringify-game-id-return-type.doc.js";
 */

/**
 *
 * @param {StringifyGameIdOptions} options - The root object
 * @returns {StringifyGameIdReturnType<StringifyGameIdOptions>}
 * @example
 */
const stringifyGameId = ({ gameCode, gamePlatformId }) => (
/** @type {Join<readonly [gamePlatformId, gameCode], separator>} */
	(
		[gamePlatformId, gameCode]
			.join(separator)
	)
);

export default stringifyGameId;
