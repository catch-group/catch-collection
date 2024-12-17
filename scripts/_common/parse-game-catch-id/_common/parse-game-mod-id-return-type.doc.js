/**
 * @import { ParseGameModIdBaseReturnType } from "./parse-game-mod-id-return-type.doc/_exports.js";
 * @import { ParseModIdReturnType } from "../../filtered-game-catch-ids/_common/parse-mod-id-return-type.doc.js";
 * @import { ParseGameIdReturnType } from "./parse-game-id-return-type.doc.js";
 * @import { GameModId } from "../../_common/game-mod-id.doc.js";
 */

/**
 * @template {GameModId} GameModIdTemplate
 * @template {ParseGameModIdBaseReturnType<GameModIdTemplate>} [ParseGameModIdBaseReturnTypeTemplate=ParseGameModIdBaseReturnType<GameModIdTemplate>]
 * @typedef {(
 * ParseGameModIdBaseReturnTypeTemplate &
 * ParseModIdReturnType<ParseGameModIdBaseReturnTypeTemplate["modId"]> &
 * ParseGameIdReturnType<ParseGameModIdBaseReturnTypeTemplate["gameId"]>
 * )} ParseGameModIdReturnType
 */
