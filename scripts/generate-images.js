import { join } from "@std/path";

import {
	catchesFolderPath,
	filteredGameCatchIds,
	parseGameCatchId
} from "./_common/_exports.js";
import { generateHeaderImage, generateMainImage } from "./generate-images/_exports.js";

const {
	mkdir,
	stat
} = Deno;

const numberOfHexColorDigits = 6;

for (const gameCatchId of filteredGameCatchIds) {
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

	const mainImageFilePath = join(catchImagesFolderPath, "main.png");
	const headerImageFilePath = join(catchImagesFolderPath, "header.png");

	let alreadyExists = false;

	try {
		await stat(mainImageFilePath);
		await stat(headerImageFilePath);

		alreadyExists = true;
	}
	catch {
		// do nothing
	}

	if (!alreadyExists) {
		console.info(`Generating images for ${gameCatchId}...`);

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
}
