import separator from "../../_common/separator.js";

/**
 * @import { Join } from "type-fest";
 * @import { StringifyModIdOptions } from "./_common/_exports.js";
 * @import { StringifyModIdReturnType } from "./stringify-mod-id-return-type.doc.js";
 */

/**
 *
 * @param {StringifyModIdOptions} options - The root object
 * @returns {StringifyModIdReturnType<StringifyModIdOptions>}
 * @example
 */
const stringifyModId = ({ modCode, modPlatformId }) => (
/** @type {Join<readonly [modPlatformId, modCode], separator>} */
	(
		[modPlatformId, modCode]
			.join(separator)
	)
);

export default stringifyModId;
