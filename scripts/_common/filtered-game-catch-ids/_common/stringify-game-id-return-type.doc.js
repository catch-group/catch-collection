/**
 * @import separator from "../../_common/separator.js";
 * @import { StringifyGameIdOptions } from "./_common/stringify-game-id-options.doc.js";
 * @import { GameCode } from "../../_common/game-code.doc.js";
 * @import { GamePlatformId } from "../../_common/game-platform-id.doc.js";
 */

/**
 * @template {StringifyGameIdOptions} OptionsTemplate
 * @template {GameCode} [GameCodeTemplate=StringifyGameIdOptions["gameCode"]]
 * @template {GamePlatformId} [GamePlatformIdTemplate=StringifyGameIdOptions["gamePlatformId"]]
 * @typedef {`${GamePlatformIdTemplate}${separator}${GameCodeTemplate}`} StringifyGameIdReturnType
 */
