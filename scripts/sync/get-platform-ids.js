import {
	mapValues
} from "@radashi-org/radashi";

import getNexusModsSessionPage from "../_common/get-nexus-mods-session-page.js";

/**
 *
 * @param {string} modName
 * @example
 */
const getPlatformIds = async (modName) => {
	// TODO[2024-12-12]: needs second gameName parameter, as multiple catches with the same modName but in different games are possible
	// TODO[2024-12-12]: needs handling of multiple pages on "my mods" page
	const nexusModsSessionPage = await getNexusModsSessionPage();

	await nexusModsSessionPage.goto("https://www.nexusmods.com/users/myaccount?tab=my+files");

	const modTileElementDatasetJson = await nexusModsSessionPage.evaluate(
		(innerModName = "") => {
			const modTitleElements = [...document.querySelectorAll(".file-manage-title>h3>a")];

			const modTitleElementWithModName = modTitleElements
				.find(({ textContent }) => textContent === innerModName);

			if (modTitleElementWithModName) {
				const modTileElement = /** @type {HTMLElement} */ (
					modTitleElementWithModName.closest(".mod-tile-left")
				);

				if (modTileElement) {
					return JSON.stringify(modTileElement.dataset);
				}

				console.error("Mod tile element is not found");
			}

			console.error(`Mod with name ${innerModName} is not found`);

			return null;
		},
		{ args: [modName] }
	);

	await nexusModsSessionPage.browser().close();

	if (modTileElementDatasetJson === null) {
		return null;
	}

	return mapValues(JSON.parse(modTileElementDatasetJson), Number);
};

export default getPlatformIds;
