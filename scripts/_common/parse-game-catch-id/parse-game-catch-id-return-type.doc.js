/**
 * @import separator from "../_common/separator.js";
 * @import { SplitAtNth } from "./split-at-nth.js";
 * @import { ParseModIdReturnType } from "../filtered-game-catch-ids/_common/parse-mod-id-return-type.doc.js";
 * @import { ParseGameModIdReturnType } from "./_common/parse-game-mod-id-return-type.doc.js";
 * @import { GameCatchId } from "../_common/game-catch-id.doc.js";
 */

/**
 * @template {GameCatchId} GameCatchIdTemplate
 * @template {SplitAtNth<GameCatchIdTemplate, separator, 4>[0]} [OverriddenGameModIdTemplate=SplitAtNth<GameCatchIdTemplate, separator, 4>[0]]
 * @template {SplitAtNth<GameCatchIdTemplate, separator, 4>[1]} [OverridingModIdTemplate=SplitAtNth<GameCatchIdTemplate, separator, 4>[1]]
 * @template {ParseGameModIdReturnType<OverriddenGameModIdTemplate>} [ParsedOverriddenGameModIdTemplate=ParseGameModIdReturnType<OverriddenGameModIdTemplate>]
 * @template {ParseModIdReturnType<OverridingModIdTemplate>} [ParsedOverridingModIdTemplate=ParseModIdReturnType<OverridingModIdTemplate>]
 * @typedef {object} ParseGameCatchIdReturnType
 * @property {ParsedOverriddenGameModIdTemplate["gameId"]} gameId
 * @property {ParsedOverriddenGameModIdTemplate["gameCode"]} gameCode
 * @property {ParsedOverriddenGameModIdTemplate["gamePlatformId"]} gamePlatformId
 * @property {ParsedOverriddenGameModIdTemplate["modCode"]} overriddenModCode
 * @property {ParsedOverriddenGameModIdTemplate["modPlatformId"]} overriddenModPlatformId
 * @property {ParsedOverriddenGameModIdTemplate["modId"]} overriddenModId
 * @property {ParsedOverridingModIdTemplate["modCode"]} overridingModCode
 * @property {ParsedOverridingModIdTemplate["modPlatformId"]} overridingModPlatformId
 * @property {OverridingModIdTemplate} overridingModId
 */
