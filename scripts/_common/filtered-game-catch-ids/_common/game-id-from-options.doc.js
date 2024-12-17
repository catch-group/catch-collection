/**
 * @import { StringifyGameModIdOptions } from "./stringify-game-mod-id-options.doc.js";
 * @import { StringifyGameCatchIdOptions } from "./stringify-game-catch-id-options.doc.js";
 * @import { StringifyGameIdReturnType } from "./stringify-game-id-return-type.doc.js";
 */

/**
 * @template {StringifyGameModIdOptions | StringifyGameCatchIdOptions} OptionsTemplate
 * @typedef {(
 * "gameId" extends keyof OptionsTemplate
 * 	? Extract<OptionsTemplate extends { gameId: string } ? OptionsTemplate["gameId"] : never, string>
 * 	: "gameCode" | "gamePlatformId" extends keyof OptionsTemplate
 * 		? StringifyGameIdReturnType<{
 * 			gameCode: Extract<OptionsTemplate extends { gameCode: string } ? OptionsTemplate["gameCode"] : never, string>,
 * 			gamePlatformId: Extract<OptionsTemplate extends { gamePlatformId: number } ? OptionsTemplate["gamePlatformId"] : never, number>
 * 		}>
 * 		: never
 * )} GameIdFromOptions
 */
