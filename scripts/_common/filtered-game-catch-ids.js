import { parseArgs } from "@std/cli";
import { join } from "@std/path";

import { unique } from "@radashi-org/radashi";

import catchesFolderPath from "./catches-folder-path.js";
import {
	stringifyGameCatchId,
	stringifyGameModId
} from "./filtered-game-catch-ids/_exports.js";
import parseGameCatchId from "./parse-game-catch-id.js";

/**
 * @import { GameId, ModId, GameCatchId, GameModId } from "./_common/_exports.js";
 */

const {
	args,
	readDir
} = Deno;

const catchesFolderEntries = await Array.fromAsync(readDir(catchesFolderPath));

const availableGameIds = /** @type {readonly GameId[]} */ (
	catchesFolderEntries
		.filter(({ isDirectory }) => isDirectory)
		.map(({ name }) => name)
);

const availableCatches = [];

for (const gameId of availableGameIds) {
	const gameFolderPath = join(catchesFolderPath, gameId);
	const gameFolderEntries = await Array.fromAsync(readDir(gameFolderPath));

	const gameFolderFolderNames = /** @type {readonly ModId[]} */ (
		gameFolderEntries
			.filter(({ isDirectory }) => isDirectory)
			.map(({ name }) => name)
	);

	for (const overriddenModId of gameFolderFolderNames) {
		const overriddenModFolderPath = join(gameFolderPath, overriddenModId);

		const overriddenModFolderEntries = await Array.fromAsync(
			readDir(overriddenModFolderPath)
		);

		const overriddenModFolderFolderNames = /** @type {readonly ModId[]} */ (
			overriddenModFolderEntries
				.filter(({ isDirectory }) => isDirectory)
				.map(({ name }) => name)
		);

		for (const overridingModId of overriddenModFolderFolderNames) {
			const overridingModFolderPath = join(
				overriddenModFolderPath,
				overridingModId
			);

			const overridingModFolderEntries = await Array.fromAsync(
				readDir(overridingModFolderPath)
			);

			const overridingModFolderNames = overridingModFolderEntries
				.filter(({ isDirectory }) => isDirectory)
				.map(({ name }) => name);

			if (overridingModFolderNames.includes("source")) {
				availableCatches.push({
					gameCatchId: stringifyGameCatchId({
						gameId,
						overriddenModId,
						overridingModId
					}),
					gameId,
					overriddenModId,
					overridingModId
				});
			}
		}
	}
}

const availableGameCatchIds = availableCatches
	.map(({ gameCatchId }) => gameCatchId);

const availableGameModIds = unique(
	availableCatches
		.flatMap(({
			gameId,
			overriddenModId,
			overridingModId
		}) => [
			stringifyGameModId({
				gameId,
				modId: overriddenModId
			}),
			stringifyGameModId({
				gameId,
				modId: overridingModId
			})
		])
);

/**
 * @typedef {object} ParsedArgs
 * @property {readonly GameCatchId[]} catches
 * @property {readonly GameCatchId[]} excludedCatches
 * @property {readonly GameId[]} excludedGames
 * @property {readonly GameModId[]} excludedMods
 * @property {readonly GameId[]} games
 * @property {readonly GameModId[]} mods
 */

const {
	catches: includedGameCatchIds,
	excludedCatches: excludedGameCatchIds,
	excludedGames: excludedGameIds,
	excludedMods: excludedGameModIds,
	games: includedGameIds,
	mods: includedGameModIds
} = /** @type {ParsedArgs} */ (
	parseArgs(
		args,
		{
			alias: {
				catches: "c",
				excludedCatches: ["excluded-catches", "d"],
				excludedGames: ["excluded-games", "h"],
				excludedMods: ["excluded-mods", "n"],
				games: "g",
				mods: "m"
			},
			collect: [
				"catches",
				"excludedCatches",
				"excludedGames",
				"excludedMods",
				"games",
				"mods"
			],
			default: {
				catches: availableGameCatchIds,
				excludedCatches: /** @type {string[]} */ ([]),
				excludedGames: /** @type {string[]} */ ([]),
				excludedMods: /** @type {string[]} */ ([]),
				games: availableGameIds,
				mods: availableGameModIds
			},
			negatable: ["override"],
			string: [
				"catches",
				"excludedCatches",
				"excludedGames",
				"excludedMods",
				"games",
				"mods"
			]
		}
	));

const gameIds = new Set(
	includedGameIds
		.filter((game) => !excludedGameIds.includes(game))
);

const gameModIds = new Set(
	includedGameModIds
		.filter((gameModId) => !excludedGameModIds.includes(gameModId))
);

const gameCatchIds = includedGameCatchIds
	.filter((gameCatchId) => !excludedGameCatchIds.includes(gameCatchId));

const filteredGameCatchIds = gameCatchIds
	.filter((gameCatchId) => {
		const {
			gameId,
			overriddenModId,
			overridingModId
		} = parseGameCatchId(gameCatchId);

		return (
			gameIds.has(gameId) &&
			(
				gameModIds.has(
					stringifyGameModId({
						gameId,
						modId: overriddenModId
					})
				) ||
				gameModIds.has(
					stringifyGameModId({
						gameId,
						modId: overridingModId
					})
				)
			)
		);
	})
	.toSorted((gameCatchIdA, gameCatchIdB) => (
		gameCatchIdA.localeCompare(gameCatchIdB, "en-US", { numeric: true })
	));

export default filteredGameCatchIds;
