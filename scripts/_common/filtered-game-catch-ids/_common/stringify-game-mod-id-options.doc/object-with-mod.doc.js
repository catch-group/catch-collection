/**
 * @import { Schema } from "type-fest";
 * @import { ObjectWithModId, ObjectWithModCodeAndModPlatformId } from "./object-with-mod.doc/_exports.js";
 */

/**
 * @typedef {(
 * (ObjectWithModId & Schema<Partial<ObjectWithModCodeAndModPlatformId>, never>) |
 * (Schema<Partial<ObjectWithModId>, never> & ObjectWithModCodeAndModPlatformId) |
 * (ObjectWithModId & ObjectWithModCodeAndModPlatformId)
 * )} ObjectWithMod
 */
