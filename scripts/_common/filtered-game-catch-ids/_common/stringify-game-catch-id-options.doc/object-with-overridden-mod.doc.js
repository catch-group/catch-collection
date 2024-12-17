/**
 * @import { Schema } from "type-fest";
 * @import { ObjectWithOverriddenModId, ObjectWithOverriddenModCodeAndOverriddenModPlatformId } from "./object-with-overridden-mod.doc/_exports.js";
 */

/**
 * @typedef {(
 * (ObjectWithOverriddenModId & Schema<Partial<ObjectWithOverriddenModCodeAndOverriddenModPlatformId>, never>) |
 * (Schema<Partial<ObjectWithOverriddenModId>, never> & ObjectWithOverriddenModCodeAndOverriddenModPlatformId) |
 * (ObjectWithOverriddenModId & ObjectWithOverriddenModCodeAndOverriddenModPlatformId)
 * )} ObjectWithOverriddenMod
 */
