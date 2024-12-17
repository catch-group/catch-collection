/**
 * @import separator from "../../../_common/separator.js";
 * @import { SplitAtNth } from "../../split-at-nth.js";
 * @import { GameModId } from "../../../_common/game-mod-id.doc.js";
 */

/**
 * @template {GameModId} GameModIdTemplate
 * @typedef {object} ParseGameModIdBaseReturnType
 * @property {SplitAtNth<GameModIdTemplate, separator, 2>[0]} gameId
 * @property {SplitAtNth<GameModIdTemplate, separator, 2>[1]} modId
 */
