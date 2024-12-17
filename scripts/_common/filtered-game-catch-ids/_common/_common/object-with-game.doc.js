/**
 * @import { Schema } from "type-fest";
 * @import { ObjectWithGameId, ObjectWithGameCodeAndGamePlatformId } from "./object-with-game.doc/_exports.js";
 */

/**
 * @typedef {(
 * (ObjectWithGameId & Schema<Partial<ObjectWithGameCodeAndGamePlatformId>, never>) |
 * (Schema<Partial<ObjectWithGameId>, never> & ObjectWithGameCodeAndGamePlatformId) |
 * (ObjectWithGameId & ObjectWithGameCodeAndGamePlatformId)
 * )} ObjectWithGame
 */
