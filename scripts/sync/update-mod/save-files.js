/* eslint-disable max-lines-per-function */
import { join } from "@std/path";

import { sleep } from "@radashi-org/radashi";
import {
	BlobReader, BlobWriter, ZipWriter
} from "@zip-js/zip-js";

/**
 * @import { Page } from "@astral/astral";
 */

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
 * @param {Page} options0.nexusModsSessionPage - The root object
 * @param options0.name - The root object
 * @param options0.version - The root object
 * @example
 */
const saveFiles = async ({
	folderPath,
	gamePlatformDomainName,
	gamePlatformId,
	name,
	nexusModsSessionPage,
	platformId,
	version
}) => {
	console.log("Saving files...");
	const saveFilesUrl = `https://www.nexusmods.com/${gamePlatformDomainName}/mods/edit/?step=files&id=${platformId}&gameId=${gamePlatformId}`;

	const pluginFileName = `${name}.esm`;

	const pluginFilePath = join(folderPath, pluginFileName);

	const pluginFileContent = await readFile(pluginFilePath);

	const zipWriter = new ZipWriter(new BlobWriter("application/zip"));

	await zipWriter.add(pluginFileName, new BlobReader(new Blob([pluginFileContent])));

	const zipBlob = await zipWriter.close();

	const zipArray = [...(new Uint8Array(await zipBlob.arrayBuffer()))];

	await nexusModsSessionPage.goto(saveFilesUrl);

	const dropAreaSelector = "#add_file_drop";

	await nexusModsSessionPage.waitForSelector(dropAreaSelector);

	await nexusModsSessionPage.evaluate(
		({
			dropAreaSelector: innerDropAreaSelector,
			pluginFileName: innerPluginFileName,
			zipArray: innerZipArray
		} = {}) => {
			try {
				const dropArea = document.querySelector(innerDropAreaSelector);

				if (dropArea === null) {
					throw new Error("Failed to drop files");
				}
				else {
					const dataTransfer = new DataTransfer();

					dataTransfer.items.add(new File([Uint8Array.from(innerZipArray)], `${innerPluginFileName}.zip`, { type: "application/zip" }));

					dropArea.dispatchEvent(new DragEvent("dragenter", { dataTransfer }));
					dropArea.dispatchEvent(new DragEvent("drop", { dataTransfer }));
				}
			}
			catch (error) {
				console.error(error);
			}
		},
		{
			args: [
				{
					dropAreaSelector,
					pluginFileName,
					zipArray
				}
			]
		}
	);

	await sleep(1_000);

	await nexusModsSessionPage.waitForNetworkIdle();

	await nexusModsSessionPage.evaluate(
		async ({
			gamePlatformId: innerGamePlatformId,
			name: innerName,
			platformId: innerPlatformId,
			pluginFileName: innerPluginFileName,
			version: innerVersion
		} = {}) => {
			let oldFileId;

			const existingFileTile = document.querySelector("div#file-category-container ol#file-category-1>li");

			if (existingFileTile !== null) {
				oldFileId = Number(existingFileTile.getAttribute("id").split("-").at(-1));
			}

			const secondToLastFormSection = [...document.querySelectorAll(".form-section-content")].at(-2);

			if (secondToLastFormSection !== undefined && secondToLastFormSection !== null) {
				const uploadedFileName = secondToLastFormSection.querySelector("#file-filename")?.value;

				const lastFormSection = [...document.querySelectorAll(".form-section-content")].at(-1);

				if (lastFormSection !== undefined && lastFormSection !== null) {
					const fileUuid = lastFormSection.querySelector("#file_uuid")?.value;
					const fileSize = Number(lastFormSection.querySelector("#file_size")?.value);

					const formEntries = [
						["game_id", innerGamePlatformId],
						["name", innerName],
						["file-version", innerVersion],
						["update-version", 1],
						["category", 1],
						["new-existing", 1],
						["old_file_id", oldFileId],
						["remove-old-version", 1],
						["brief-overview", ""],
						["set_as_main_nmm", 1],
						["requirements_pop_up", 1],
						["file_uuid", fileUuid],
						["file_size", fileSize],
						["mod_id", innerPlatformId],
						["id", innerPlatformId],
						["action", "add"],
						["uploaded_file", uploadedFileName],
						["original_file", `${innerPluginFileName}.zip`]
					]
						.filter(([key, value]) => value !== undefined);

					const boundary = "CATCH";

					const response = await fetch(
						"https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?AddFile",
						{
							body: `--${boundary}\r\n${formEntries.map(([key, value]) => `Content-Disposition: form-data; name="${key}"\r\n\r\n${value}\r\n`).join(`--${boundary}\r\n`)}--${boundary}--\r\n`,
							credentials: "include",
							headers: new Headers({
								accept: "*/*",
								"accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
								"cache-control": "no-cache",
								"content-type": `multipart/form-data; boundary=${boundary}`,
								pragma: "no-cache",
								priority: "u=1, i",
								"sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
								"sec-ch-ua-mobile": "?0",
								"sec-ch-ua-platform": "\"macOS\"",
								"sec-fetch-dest": "empty",
								"sec-fetch-mode": "cors",
								"sec-fetch-site": "same-origin",
								"x-requested-with": "XMLHttpRequest"
							}),
							method: "POST",
							mode: "cors",
							referrer: location.href,
							referrerPolicy: "strict-origin-when-cross-origin"
						}
					);

					console.log(response);

					const responseJson = await response.json();

					console.log(responseJson);

					return responseJson;
				}
			}

			throw new Error("Failed to save files");
		},
		{
			args: [
				{
					gamePlatformId,
					name,
					platformId,
					pluginFileName,
					version
				}
			]
		}
	);

	await sleep(1_000);
};

export default saveFiles;
