/**
 * @import separator from "../../_common/separator.js";
 * @import { StringifyGameCatchIdOptions } from "../_common/stringify-game-catch-id-options.doc.js";
 * @import { OverriddenModIdFromOptions, OverridingModIdFromOptions } from "./stringify-game-catch-id-return-type.doc/_exports.js";
 * @import { GameIdFromOptions } from "../_common/game-id-from-options.doc.js";
 */

/**
 * @template {StringifyGameCatchIdOptions} OptionsTemplate
 * @template {GameIdFromOptions<OptionsTemplate>} [GameIdTemplate=GameIdFromOptions<OptionsTemplate>]
 * @template {OverriddenModIdFromOptions<OptionsTemplate>} [OverriddenModIdTemplate=OverriddenModIdFromOptions<OptionsTemplate>]
 * @template {OverridingModIdFromOptions<OptionsTemplate>} [OverridingModIdTemplate=OverridingModIdFromOptions<OptionsTemplate>]
 * @typedef {`${GameIdTemplate}${separator}${OverriddenModIdTemplate}${separator}${OverridingModIdTemplate}`} StringifyGameCatchIdReturnType
 */
