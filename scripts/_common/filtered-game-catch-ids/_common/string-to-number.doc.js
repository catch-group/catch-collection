/**
 * @import { PositiveInfinity, NegativeInfinity } from "type-fest";
 */

/**
 * @template {string} StringTemplate
 * @typedef {(
 * StringTemplate extends `${infer NumberTemplate extends number}`
 * 	? NumberTemplate
 * 	: StringTemplate extends "Infinity"
 * 		? PositiveInfinity
 * 		: StringTemplate extends "-Infinity"
 * 			? NegativeInfinity
 * 			: never
 * )} StringToNumber
 */
