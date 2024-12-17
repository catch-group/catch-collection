/**
 * @import { Schema, SimplifyDeep } from "type-fest";
 * @import { ObjectWithOverridingModId, ObjectWithOverridingModCodeAndOverridingModPlatformId } from "./object-with-overriding-mod.doc/_exports.js";
 */

/**
 * @typedef {(
 * (ObjectWithOverridingModId & Schema<Partial<ObjectWithOverridingModCodeAndOverridingModPlatformId>, never>) |
 * (Schema<Partial<ObjectWithOverridingModId>, never> & ObjectWithOverridingModCodeAndOverridingModPlatformId) |
 * (ObjectWithOverridingModId & ObjectWithOverridingModCodeAndOverridingModPlatformId)
 * )} ObjectWithOverridingMod
 */
