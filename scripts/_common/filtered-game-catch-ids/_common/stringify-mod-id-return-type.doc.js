/**
 * @import separator from "../../_common/separator.js";
 * @import { StringifyModIdOptions } from "./_common/stringify-mod-id-options.doc.js";
 * @import { ModCode } from "../../_common/mod-code.doc.js";
 * @import { ModPlatformId } from "../../_common/mod-platform-id.doc.js";
 */

/**
 * @template {StringifyModIdOptions} OptionsTemplate
 * @template {ModCode} [ModCodeTemplate=StringifyModIdOptions["modCode"]]
 * @template {ModPlatformId} [ModPlatformIdTemplate=StringifyModIdOptions["modPlatformId"]]
 * @typedef {`${ModPlatformIdTemplate}${separator}${ModCodeTemplate}`} StringifyModIdReturnType
 */
