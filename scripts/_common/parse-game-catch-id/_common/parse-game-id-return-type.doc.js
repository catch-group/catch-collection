/**
 * @import { Split } from "type-fest";
 * @import separator from "../../_common/separator.js";
 * @import { GameId } from "../../_common/game-id.doc.js";
 * @import { StringToNumber } from "../../filtered-game-catch-ids/_common/string-to-number.doc.js";
 */

/**
 * @template {GameId} GameIdTemplate
 * @typedef {object} ParseGameIdReturnType
 * @property {Split<GameIdTemplate, separator>[1]} gameCode
 * @property {StringToNumber<Split<GameIdTemplate, separator>[0]>} gamePlatformId
 */
