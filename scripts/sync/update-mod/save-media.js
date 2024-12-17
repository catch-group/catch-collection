import { join } from "@std/path";

import { sleep } from "@radashi-org/radashi";

const {
	readFile
} = Deno;

/**
 *
 * @param options0 - The root object
 * @param options0.folderPath - The root object
 * @param options0.gamePlatformDomainName - The root object
 * @param options0.gamePlatformId - The root object
 * @param options0.platformId - The root object
 * @param options0.nexusModsSessionPage - The root object
 * @example
 */
const saveMedia = async ({
	folderPath,
	gamePlatformDomainName,
	gamePlatformId,
	nexusModsSessionPage,
	platformId
}) => {
	console.log("Saving media...");
	const saveMediaUrl = `https://www.nexusmods.com/${gamePlatformDomainName}/mods/edit/?step=media&id=${platformId}&gameId=${gamePlatformId}`;

	const mainImageFilePath = join(folderPath, "images", "main.png");

	const mainImageFileContent = await readFile(mainImageFilePath);

	await nexusModsSessionPage.goto(saveMediaUrl);

	const dropAreaSelector = "#mod_admin_add_image_drop";

	await nexusModsSessionPage.waitForSelector(dropAreaSelector);

	await nexusModsSessionPage.evaluate(
		async ({
			dropAreaSelector: innerDropAreaSelector,
			gamePlatformId: innerGamePlatformId,
			imageFileContent: innerImageFileContent,
			platformId: innerPlatformId
		} = {}) => {
			const existingImageTiles = document.querySelectorAll("li.image-tile.image-mod-page.author-image-tile.ui-sortable-handle");

			for (const existingImageTile of existingImageTiles) {
				const imageId = Number(existingImageTile.dataset.imageId);

				await fetch(`https://www.nexusmods.com/Core/Libs/Common/Managers/ModImages?Delete&game_id=${innerGamePlatformId}&image_id=${imageId}`, {
					body: null,
					credentials: "include",
					headers: {
						accept: "application/json, text/javascript, */*; q=0.01",
						"accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
						"cache-control": "no-cache",
						pragma: "no-cache",
						priority: "u=1, i",
						"sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
						"sec-ch-ua-mobile": "?0",
						"sec-ch-ua-platform": "\"macOS\"",
						"sec-fetch-dest": "empty",
						"sec-fetch-mode": "cors",
						"sec-fetch-site": "same-origin",
						"x-requested-with": "XMLHttpRequest"
					},
					method: "GET",
					mode: "cors",
					referrer: location.href,
					referrerPolicy: "strict-origin-when-cross-origin"
				});
			}

			const dropArea = document.querySelector(innerDropAreaSelector);

			if (dropArea !== null) {
				const dataTransfer = new DataTransfer();

				dataTransfer.items.add(new File([Uint8Array.from(innerImageFileContent)], "main.png", { type: "image/png" }));

				dropArea.dispatchEvent(new DragEvent("dragenter", { dataTransfer }));
				dropArea.dispatchEvent(new DragEvent("drop", { dataTransfer }));
			}

			// TODO[2025-01-01]: Investigate how to upload header image
		},
		{
			args: [
				{
					dropAreaSelector,
					gamePlatformId,
					imageFileContent: [...mainImageFileContent],
					platformId
				}
			]
		}
	);

	await sleep(1_000);

	await nexusModsSessionPage.waitForNetworkIdle();
};

export default saveMedia;
