const {
	env
} = Deno;

const baseUrl = "https://api.nexusmods.com/v1/games";

/**
 *
 * @param modPlatformId.gamePlatformDomainName
 * @param modPlatformId - The root object
 * @param modPlatformId.modPlatformId - The root object
 * @example
 */
const getMod = async ({ gamePlatformDomainName, modPlatformId }) => {
	const nexusModsApiKey = env.get("NEXUS_MODS_API_KEY");

	if (nexusModsApiKey === undefined) {
		throw new Error("NEXUS_MODS_API_KEY environment variable is not set");
	}

	const endpoint = `${baseUrl}/${gamePlatformDomainName}/mods/${modPlatformId}.json`;

	const response = await fetch(
		endpoint,
		{
			headers: new Headers({
				accept: "application/json",
				apikey: nexusModsApiKey
			})
		}
	);

	if (response.ok) {
		return await response.json();
	}

	throw new Error(`Failed to fetch games: ${response.statusText}`);
};

export default getMod;
