const {
	env
} = Deno;

const gamesEndpoint = "https://api.nexusmods.com/v1/games.json?include_unapproved=true";

/**
 *
 * @example
 */
const getGames = async () => {
	const nexusModsApiKey = env.get("NEXUS_MODS_API_KEY");

	if (nexusModsApiKey === undefined) {
		throw new Error("NEXUS_MODS_API_KEY environment variable is not set");
	}

	const response = await fetch(
		gamesEndpoint,
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

export default getGames;
