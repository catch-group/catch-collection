/* eslint-disable max-lines-per-function */
import getMod from "./get-mod.js";
import { convertMarkdownToNexusModsDescription } from "./save-mod-details/_exports.js";

/**
 * @import { Page } from "@astral/astral";
 */

const categoryLabelsIds = new Map([[4_187, new Map([["Miscellaneous", 2]])]]);

const suggestedCategoryLabelsIds = new Map([[4_187, new Map([["Patches", 21]])]]);

const classTagLabelsIds = new Map([[4_187, new Map([["Full Master Plugin", 4_573]])]]);

const languageLabelsIds = new Map([["English", 5]]);

const typeLabelsIds = new Map([["Mod", 1], ["Translation", 2]]);

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
 * @param {number} [options.platformId] - The root object
 * @param options.version - The root object
 * @example
 */
const saveModDetails = async ({
	description,
	gamePlatformDomainName,
	gamePlatformId,
	name,
	nexusModsSessionPage,
	overriddenModPlatformId,
	overridingModPlatformId,
	platformId,
	version
}) => {
	console.log("Saving mod details...");
	const nexusModsDescription = convertMarkdownToNexusModsDescription(description);

	const fixedNexusModsDescription = nexusModsDescription
		.replaceAll(/^\[size=6\].*$\s+/gmv, "")
		.replaceAll("\n[list]", "[list]")
		.replaceAll(/(?<=Donate:)\n+\[url=/gv, "\n[url=")
		.replaceAll(/(?<=\[\/url\])\n+\[url=/gv, " [url=")
		.replaceAll(/(?<=\[\/url\])\n+(?=(?:\[\/list\]){2}\n)/gv, "")
		.replaceAll(/\[quote\]\n\[!IMPORTANT\]\n(?<text>.*)\n\[\/quote\]\n/gv, "\n[quote][b]Important[/b]\n$<text>[/quote]");

	const { name: overriddenModName } = await getMod({
		gamePlatformDomainName,
		modPlatformId: overriddenModPlatformId
	});

	const { name: overridingModName } = await getMod({
		gamePlatformDomainName,
		modPlatformId: overridingModPlatformId
	});

	const body = [
		["id", platformId],
		["game_id", gamePlatformId],
		["new_game_name", ""],
		["type", typeLabelsIds.get("Mod")],
		["category_id", categoryLabelsIds.get(gamePlatformId)?.get("Miscellaneous")],
		["suggested_category_id", suggestedCategoryLabelsIds.get(gamePlatformId)?.get("Patches")],
		["author", "Catch Group"],
		["classtags", classTagLabelsIds.get(gamePlatformId)?.get("Full Master Plugin")],
		["description", fixedNexusModsDescription],
		["language_id", languageLabelsIds.get("English")],
		["name", name],
		["summary", `Compatibility Patch for "${overriddenModName}" and "${overridingModName}"`],
		["tag_gore", 0],
		["tag_nudity", 0],
		["tag_profanity", 0],
		["tag_sexualised", 0],
		["tag_skimpy", 0],
		["version", version]
	]
		.filter(([key, value]) => value !== undefined)
		.map(([key, value]) => [key, encodeURIComponent(String(value)).replaceAll("%20", "+")].join("="))
		.join("&");

	const redirectUrl = await nexusModsSessionPage.evaluate(
		async ({
			body: innerBody
		} = {}) => {
			const response = await fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?Save", {
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
				redirect: innerRedirectUrl,
				status
			} = await response.json();

			if (!status) {
				throw new Error(message);
			}

			return innerRedirectUrl;
		},
		{
			args: [
				{
					body
				}
			]
		}
	);

	return Number((new URLSearchParams(redirectUrl)).get("id"));
};

export default saveModDetails;
