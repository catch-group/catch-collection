import { saveModDetails } from "./_common/_exports.js";
import {
	saveArticles, saveDocumentation, saveFiles, saveMedia, savePermissions, saveRequirements
} from "./update-mod/_exports.js";

/**
 * @import { Page } from "@astral/astral";
 */

/**
 *
 * @param {object} options - The root object
 * @param {string} options.description - The root object
 * @param {string} options.gamePlatformDomainName - The root object
 * @param {number} options.gamePlatformId - The root object
 * @param {string} options.name - The root object
 * @param {Page} options.nexusModsSessionPage - The root object
 * @param {number} options.overriddenModPlatformId - The root object
 * @param {number} options.overridingModPlatformId - The root object
 * @param {number} options.platformId - The root object
 * @param options.folderPath - The root object
 * @param options.version - The root object
 * @param options.gameCatchId - The root object
 * @example
 */
const updateMod = async ({
	description,
	folderPath,
	gameCatchId,
	gamePlatformDomainName,
	gamePlatformId,
	name,
	nexusModsSessionPage,
	overriddenModPlatformId,
	overridingModPlatformId,
	platformId,
	version
}) => {
	const updateModUrl = `https://www.nexusmods.com/${gamePlatformDomainName}/mods/edit/?step=details&id=${platformId}&gameId=${gamePlatformId}`;

	await nexusModsSessionPage.goto(updateModUrl);

	await saveModDetails({
		description,
		gamePlatformDomainName,
		gamePlatformId,
		name,
		nexusModsSessionPage,
		overriddenModPlatformId,
		overridingModPlatformId,
		platformId,
		version
	});

	await saveMedia({
		folderPath,
		gamePlatformDomainName,
		gamePlatformId,
		nexusModsSessionPage,
		platformId
	});

	await saveDocumentation();

	await savePermissions({
		gamePlatformDomainName,
		gamePlatformId,
		nexusModsSessionPage,
		overriddenModPlatformId,
		overridingModPlatformId,
		platformId
	});

	await saveRequirements({
		gameCatchId,
		gamePlatformDomainName,
		gamePlatformId,
		nexusModsSessionPage,
		overriddenModPlatformId,
		overridingModPlatformId,
		platformId,
		version
	});

	await saveFiles({
		folderPath,
		gamePlatformDomainName,
		gamePlatformId,
		name,
		nexusModsSessionPage,
		platformId,
		version
	});

	await saveArticles();
};

export default updateMod;
