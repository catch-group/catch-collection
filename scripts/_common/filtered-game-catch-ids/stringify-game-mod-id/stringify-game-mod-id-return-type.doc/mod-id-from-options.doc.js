/**
 * @import { StringifyGameModIdOptions } from "../../_common/stringify-game-mod-id-options.doc.js";
 * @import { StringifyModIdReturnType } from "../../_common/stringify-mod-id-return-type.doc.js";
 */

/**
 * @template {StringifyGameModIdOptions} OptionsTemplate
 * @typedef {(
 * "modId" extends keyof OptionsTemplate
 * 	? Extract<OptionsTemplate extends { modId: string } ? OptionsTemplate["modId"] : never, string>
 * 	: "modCode" | "modPlatformId" extends keyof OptionsTemplate
 * 		? StringifyModIdReturnType<{
 * 			modCode: Extract<OptionsTemplate extends { modCode: string } ? OptionsTemplate["modCode"] : never, string>,
 * 			modPlatformId: Extract<OptionsTemplate extends { modPlatformId: number } ? OptionsTemplate["modPlatformId"] : never, number>
 * 		}>
 * 		: never
 * )} ModIdFromOptions
 */
