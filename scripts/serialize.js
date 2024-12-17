import { parseArgs } from "@std/cli";
import { walk } from "@std/fs";
import { join } from "@std/path";

import { isPlainObject } from "@radashi-org/radashi";

import {
	catchesFolderPath,
	filteredGameCatchIds,
	parseGameCatchId
} from "./_common/_exports.js";
import { formatJsonFile } from "./serialize/_exports.js";

const {
	Command,
	args,
	env,
	errors: { NotFound },
	stat
} = Deno;

const spriggitCliPath = env.get("SPRIGGIT_CLI_PATH");

if (spriggitCliPath === undefined) {
	throw new Error("SPRIGGIT_CLI_PATH environment variable is not set");
}

const decoder = new TextDecoder();

const {
	override
} = parseArgs(
	args,
	{
		boolean: ["override"],
		default: {
			override: true
		},
		negatable: ["override"]
	}
);

console.log("Serializing these catches:");
console.log(filteredGameCatchIds.join("\n"));

/**
 *
 * @param {string} key
 * @param {unknown} value
 * @returns {unknown}
 * @example
 */
const replacer = (key, value) => {
	if (key === "ModHeader" && isPlainObject(value)) {
		return {
			...value,
			Author: "Catch Group",
			Description: "0.1.0"
		};
	}

	return value;
};

for (const gameCatchId of filteredGameCatchIds) {
	const {
		gameId,
		overriddenModId,
		overridingModId
	} = parseGameCatchId(gameCatchId);

	const gameFolderPath = join(catchesFolderPath, gameId);

	const catchFolderPath = join(gameFolderPath, overriddenModId, overridingModId);

	const catchName = `Catch - ${overriddenModId} - ${overridingModId}`;

	const catchFileName = `${catchName}.esm`;

	const catchFilePath = join(catchFolderPath, catchFileName);

	await stat(catchFilePath);

	const catchSourceFolderPath = join(catchFolderPath, "source");

	const catchSourceMetaFilePath = join(catchSourceFolderPath, "spriggit-meta.json");

	let catchSourceSerialized = false;

	try {
		await stat(catchSourceMetaFilePath);

		catchSourceSerialized = true;
	}
	catch (error) {
		if (!(error instanceof NotFound)) {
			throw error;
		}
	}

	if (override || !catchSourceSerialized) {
		const command = new Command(
			spriggitCliPath,
			{
				args: [
					"serialize",
					"--InputPath",
					catchFilePath,
					"--OutputPath",
					catchSourceFolderPath,
					"--GameRelease",
					"Starfield",
					"--PackageName",
					"Spriggit.Json"
				],
				stderr: "inherit",
				stdout: "piped"
			}
		);

		console.info(`Serializing ${catchFilePath}`);

		const { stdout: encodedOutput } = await command.output();

		const output = decoder.decode(encodedOutput);

		const outputLines = output.split("\n");

		const missingModExceptionLines = outputLines
			.filter((outputLine) => outputLine.startsWith("MissingModException"));

		if (missingModExceptionLines.length > 0) {
			for (const missingModExceptionLine of missingModExceptionLines) {
				const matchArrayOrNull = missingModExceptionLine.match(/(?<=^.* ).*?(?=:)/v);

				if (matchArrayOrNull === null) {
					console.error(missingModExceptionLine);
				}
				else {
					const [match] = matchArrayOrNull;

					console.error(`${match} missing from .spriggit file!`);
				}
			}
		}
		else if (outputLines.some((outputLine) => outputLine.startsWith("Error"))) {
			console.error(output);
		}

		const walkIterator = walk(catchSourceFolderPath, {
			exts: [".json"],
			includeDirs: false,
			includeSymlinks: false
		});

		const recordDataFilePath = join(catchSourceFolderPath, "RecordData.json");

		for await (const { path } of walkIterator) {
			await formatJsonFile(
				path,
				{
					replacer: path === recordDataFilePath
						? replacer
						: null
				}
			);
		}
	}
}

// .\Path\To\Spriggit.CLI.exe deserialize --InputPath "C:\Users\Levia\Downloads\SpriggitOutput\SomeMod.esp" --OutputPath "C:\MyGitRepository\SomeMod.esp"
