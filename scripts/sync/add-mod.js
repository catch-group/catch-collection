import { saveModDetails } from "./_common/_exports.js";

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
 * @param options.version - The root object
 * @example
 */
const addMod = async ({
	description,
	gamePlatformDomainName,
	gamePlatformId,
	name,
	nexusModsSessionPage,
	overriddenModPlatformId,
	overridingModPlatformId,
	version
}) => {
	const addModUrl = `https://www.nexusmods.com/${gamePlatformDomainName}/mods/add`;

	await nexusModsSessionPage.goto(addModUrl);

	return await saveModDetails({
		description,
		gamePlatformDomainName,
		gamePlatformId,
		name,
		nexusModsSessionPage,
		overriddenModPlatformId,
		overridingModPlatformId,
		version
	});
};

export default addMod;
