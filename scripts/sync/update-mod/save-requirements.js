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
 * @param options0.name - The root object
 * @param options0.version - The root object
 * @param options0.gameCatchId - The root object
 * @example
 */
const saveRequirements = async ({
	gameCatchId,
	gamePlatformDomainName,
	gamePlatformId,
	nexusModsSessionPage,
	overriddenModPlatformId,
	overridingModPlatformId,
	platformId,
	version
}) => {
	console.log("Saving requirements...");
	const saveRequirementsUrl = `https://www.nexusmods.com/${gamePlatformDomainName}/mods/edit/?step=requirements&id=${platformId}&gameId=${gamePlatformId}`;

	await nexusModsSessionPage.goto(saveRequirementsUrl);

	const encodedTag = encodeURIComponent(`${gameCatchId}@${version}`);

	const body = [
		["id", platformId],
		["game_id", gamePlatformId],
		["req-dlc-1", 1],
		[`nexus-req-note-${overriddenModPlatformId}`, ""],
		[`nexus-req-note-${overridingModPlatformId}`, ""],
		["mirror-name-1", "GitHub"],
		["mirror-url-1", `https://github.com/catch-group/catch-collection/releases/tag/${encodedTag}`],
		["action", "save"],
		["external-requirements-counter", 0],
		["mirror-counter", 1],
		["nexus-requirements", `${overriddenModPlatformId},${overridingModPlatformId}`]
	]
		.filter(([key, value]) => value !== undefined)
		.map(([key, value]) => [key, encodeURIComponent(String(value)).replaceAll("%20", "+")].join("="))
		.join("&");

	await nexusModsSessionPage.evaluate(
		async ({
			body: innerBody
		} = {}) => {
			const response = await fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?SaveRequirements", {
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

export default saveRequirements;
