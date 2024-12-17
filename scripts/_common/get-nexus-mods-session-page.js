import { launch } from "@astral/astral";

const {
	env
} = Deno;

const {
	Now
} = Temporal;

const millisecondsInSecond = 1_000;

/**
 *
 * @example
 */
const getNexusModsSessionPage = async () => {
	const nexusModsSession = env.get("NEXUS_MODS_SESSION");

	if (!nexusModsSession) {
		throw new Error("NEXUS_MODS_SESSION environment variable is not set");
	}

	const browser = await launch();

	const page = await browser.newPage();

	await page.setCookies([
		// @ts-ignore
		{
			domain: ".nexusmods.com",
			expires: Math.floor(
				Now.zonedDateTimeISO().add({ days: 30 }).epochMilliseconds / millisecondsInSecond
			),
			httpOnly: true,
			name: "nexusmods_session",
			path: "/",
			priority: "Medium",
			sameSite: "Lax",
			secure: true,
			size: 49,
			value: nexusModsSession
		}
	]);

	return page;
};

export default getNexusModsSessionPage;
