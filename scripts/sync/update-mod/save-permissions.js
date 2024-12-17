import { join } from "@std/path";

import { sleep } from "@radashi-org/radashi";

import getMod from "../_common/get-mod.js";

const {
	readFile
} = Deno;

/**
 *
 * @param options0 - The root object
 * @param options0.gamePlatformDomainName - The root object
 * @param options0.gamePlatformId - The root object
 * @param options0.nexusModsSessionPage - The root object
 * @param options0.overriddenModPlatformId - The root object
 * @param options0.overridingModPlatformId - The root object
 * @param options0.platformId - The root object
 * @example
 */
const savePermissions = async ({
	gamePlatformDomainName,
	gamePlatformId,
	nexusModsSessionPage,
	overriddenModPlatformId,
	overridingModPlatformId,
	platformId
}) => {
	console.log("Saving permissions...");
	const savePermissionsUrl = `https://www.nexusmods.com/${gamePlatformDomainName}/mods/edit/?step=permissions&id=${platformId}&gameId=${gamePlatformId}`;

	await nexusModsSessionPage.goto(savePermissionsUrl);

	const {
		author: overriddenModAuthor,
		name: overriddenModName
	} = await getMod({
		gamePlatformDomainName,
		modPlatformId: overriddenModPlatformId
	});

	const {
		author: overridingModAuthor,
		name: overridingModName
	} = await getMod({
		gamePlatformDomainName,
		modPlatformId: overridingModPlatformId
	});

	const body = [
		["id", platformId],
		["game_id", gamePlatformId],
		["user-comments", 2],
		["self-discussion", 1],
		["bug-reports", 1],
		["endorsements", 1],
		["tags", 1],
		["upload-images", 2],
		["upload-videos", 2],
		["stats", 1],
		["archived_files", 1],
		["distrib-assets", 1],
		["upload-other", 1],
		["convert", 1],
		["reuse-assets", 3],
		["use-assets", 3],
		["perm_earn_dp", 2],
		["permission-additional", "This compatibility patch is released under the Catch License 1.0.0. Any redistribution or modification that constitutes a \"Compatibility Patch\" must adhere to the license terms, including proper crediting of the original Mod’s Author and maintaining the Catch License for all downstream Compatibility Patches. If you create a patch for this patch, treat the Author of this patch as the original Author under the Catch License terms. Any attempt to change the license terms or restrict freedoms granted by it violates the conditions."],
		["credits", `- ${overriddenModName}: ${overriddenModAuthor}\n- ${overridingModName}: ${overridingModAuthor}`],
		["action", "save"],
		["team", ""]
	]
		.filter(([key, value]) => value !== undefined)
		.map(([key, value]) => [key, encodeURIComponent(String(value)).replaceAll("%20", "+")].join("="))
		.join("&");

	await nexusModsSessionPage.evaluate(
		async ({
			body: innerBody
		} = {}) => {
			const response = await fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?SavePermissions", {
				body: innerBody,
				credentials: "include",
				headers: new Headers({
					accept: "*/*",
					"accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
					"cache-control": "no-cache",
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
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
			});

			if (!response.ok) {
				throw new Error("Failed to add mod");
			}

			const {
				message,
				status
			} = await response.json();

			if (!status) {
				throw new Error(message);
			}

			return status;
		},
		{
			args: [
				{
					body
				}
			]
		}
	);

	await sleep(1_000);
};

export default savePermissions;
