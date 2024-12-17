/**
 * @import { StringifyGameCatchIdOptions } from "../../_common/stringify-game-catch-id-options.doc.js";
 * @import { StringifyModIdReturnType } from "../../_common/stringify-mod-id-return-type.doc.js";
 */

/**
 * @template {StringifyGameCatchIdOptions} OptionsTemplate
 * @typedef {(
 * "overriddenModId" extends keyof OptionsTemplate
 * 	? Extract<OptionsTemplate extends { overriddenModId: string } ? OptionsTemplate["overriddenModId"] : never, string>
 * 	: "overriddenModCode" | "overriddenModPlatformId" extends keyof OptionsTemplate
 * 		? StringifyModIdReturnType<{
 * 			modCode: Extract<OptionsTemplate extends { overriddenModCode: string } ? OptionsTemplate["overriddenModCode"] : never, string>,
 * 			modPlatformId: Extract<OptionsTemplate extends { overriddenModPlatformId: number } ? OptionsTemplate["overriddenModPlatformId"] : never, number>
 * 		}>
 * 		: never
 * )} OverriddenModIdFromOptions
 */
