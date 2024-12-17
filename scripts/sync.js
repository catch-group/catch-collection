import { parseArgs } from "@std/cli";
import { join } from "@std/path";

import {
	retry, selectFirst, sleep
} from "@radashi-org/radashi";

import {
	catchesFolderPath,
	filteredGameCatchIds,
	getNexusModsSessionPage,
	parseGameCatchId
} from "./_common/_exports.js";
import {
	addMod, getGames, getPlatformIds,
	updateMod
} from "./sync/_exports.js";

const {
	Command,
	args,
	env,
	errors: { NotFound },
	readTextFile,
	stat
} = Deno;

const spriggitCliPath = env.get("SPRIGGIT_CLI_PATH");

if (spriggitCliPath === undefined) {
	throw new Error("SPRIGGIT_CLI_PATH environment variable is not set");
}

const games = await getGames();

const nexusModsSessionPage = await getNexusModsSessionPage();

// TODO[2025-01-01]: Make this dynamic
const defaultVersion = "0.1.0";

for (const gameCatchId of filteredGameCatchIds.slice(8)) {
	console.log(gameCatchId);

	await retry(
		{
			delay: 10_000,
			times: 3
		},
		async () => {
			const {
				gameId,
				gamePlatformId,
				overriddenModId,
				overriddenModPlatformId,
				overridingModId,
				overridingModPlatformId
			} = parseGameCatchId(gameCatchId);

			const catchFolderPath = join(
				catchesFolderPath,
				gameId,
				overriddenModId,
				overridingModId
			);

			const catchReadmeFileName = "readme.md";

			const catchReadmeFilePath = join(catchFolderPath, catchReadmeFileName);

			try {
				await stat(catchReadmeFilePath);
			}
			catch (error) {
				if (error instanceof NotFound) {
					console.error(`File not found: ${catchReadmeFilePath}`);

					return;
				}

				throw error;
			}

			const catchReadmeFileContent = await readTextFile(catchReadmeFilePath);

			const catchName = `Catch - ${overriddenModId} - ${overridingModId}`;

			let {
				modId: catchPlatformId
			} = await getPlatformIds(catchName) ?? {};

			const gamePlatformDomainName = selectFirst(
				games,
				({ domain_name: domainName }) => domainName,
				({ id }) => id === gamePlatformId
			);

			if (catchPlatformId === undefined) {
				console.error(`Platform ID not found for ${catchName}`);

				catchPlatformId = await addMod({
					description: catchReadmeFileContent,
					gamePlatformDomainName,
					gamePlatformId,
					name: catchName,
					nexusModsSessionPage,
					overriddenModPlatformId,
					overridingModPlatformId,
					version: defaultVersion
				});
			}

			console.log(`https://nexusmods.com/${gamePlatformDomainName}/mods/${catchPlatformId}`);

			await updateMod({
				description: catchReadmeFileContent,
				folderPath: catchFolderPath,
				gameCatchId,
				gamePlatformDomainName,
				gamePlatformId,
				name: catchName,
				nexusModsSessionPage,
				overriddenModPlatformId,
				overridingModPlatformId,
				platformId: catchPlatformId,
				version: defaultVersion
			});

			await sleep(10_000);
		}
	);
}

await nexusModsSessionPage.browser().close();