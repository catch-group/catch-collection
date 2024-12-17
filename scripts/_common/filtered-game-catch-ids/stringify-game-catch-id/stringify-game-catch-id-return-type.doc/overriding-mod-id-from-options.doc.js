/**
 * @import { StringifyGameCatchIdOptions } from "../../_common/stringify-game-catch-id-options.doc.js";
 * @import { StringifyModIdReturnType } from "../../_common/stringify-mod-id-return-type.doc.js";
 */

/**
 * @template {StringifyGameCatchIdOptions} OptionsTemplate
 * @typedef {(
 * "overridingModId" extends keyof OptionsTemplate
 * 	? Extract<OptionsTemplate extends { overridingModId: string } ? OptionsTemplate["overridingModId"] : never, string>
 * 	: "overridingModCode" | "overridingModPlatformId" extends keyof OptionsTemplate
 * 		? StringifyModIdReturnType<{
 * 			modCode: Extract<OptionsTemplate extends { overridingModCode: string } ? OptionsTemplate["overridingModCode"] : never, string>,
 * 			modPlatformId: Extract<OptionsTemplate extends { overridingModPlatformId: number } ? OptionsTemplate["overridingModPlatformId"] : never, number>
 * 		}>
 * 		: never
 * )} OverridingModIdFromOptions
 */
