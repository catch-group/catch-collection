/**
 * @import separator from "../../_common/separator.js";
 * @import { StringifyGameModIdOptions } from "../_common/stringify-game-mod-id-options.doc.js";
 * @import { ModIdFromOptions } from "./stringify-game-mod-id-return-type.doc/_exports.js";
 * @import { GameIdFromOptions } from "../_common/game-id-from-options.doc.js";
 */

/**
 * @template {StringifyGameModIdOptions} OptionsTemplate
 * @template {GameIdFromOptions<OptionsTemplate>} [GameIdTemplate=GameIdFromOptions<OptionsTemplate>]
 * @template {ModIdFromOptions<OptionsTemplate>} [ModIdTemplate=ModIdFromOptions<OptionsTemplate>]
 * @typedef {`${GameIdTemplate}${separator}${ModIdTemplate}`} StringifyGameModIdReturnType
 */
