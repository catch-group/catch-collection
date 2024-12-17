import { join } from "@std/path";

import {
	catchesFolderPath,
	filteredGameCatchIds,
	parseGameCatchId
} from "./_common/_exports.js";
import { generateHeaderImage, generateMainImage } from "./generate-images/_exports.js";

const {
	mkdir
} = Deno;

const numberOfHexColorDigits = 6;

for (const gameCatchId of filteredGameCatchIds) {
	console.info(`Generating images for ${gameCatchId}...`);

	const {
		gameId,
		overriddenModId,
		overridingModId
	} = parseGameCatchId(gameCatchId);

	const catchFolderPath = join(
		catchesFolderPath,
		gameId,
		overriddenModId,
		overridingModId
	);

	const catchImagesFolderPath = join(catchFolderPath, "images");

	await mkdir(catchImagesFolderPath, { recursive: true });

	const colorDigits = [overridingModId, overriddenModId]
		.flatMap((modId) => [...modId]
			.toReversed()
			.filter((character) => !Number.isNaN(Number(`0x${character}`)))
			.slice(0, numberOfHexColorDigits / 2)
			.join("")
			.padEnd(numberOfHexColorDigits / 2, "0"))
		.join("")
		.toLowerCase();

	const color = `#${colorDigits}`;

	await Promise.all([
		generateMainImage({
			color,
			folderPath: catchImagesFolderPath,
			gameId,
			overriddenModId,
			overridingModId
		}),
		generateHeaderImage({
			color,
			folderPath: catchImagesFolderPath
		})
	]);
}
