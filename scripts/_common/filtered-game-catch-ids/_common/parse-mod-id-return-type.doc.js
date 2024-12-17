/**
 * @import { Split } from "type-fest";
 * @import separator from "../../_common/separator.js";
 * @import { ModId } from "../../_common/mod-id.doc.js";
 * @import { StringToNumber } from "./string-to-number.doc.js";
 */

/**
 * @template {ModId} ModIdTemplate
 * @typedef {object} ParseModIdReturnType
 * @property {Split<ModIdTemplate, separator>[1]} modCode
 * @property {StringToNumber<Split<ModIdTemplate, separator>[0]>} modPlatformId
 */
