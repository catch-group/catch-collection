import { join } from "@std/path";

import svgToPng from "@pumpn/svg-to-png";

const {
	writeTextFile
} = Deno;

/**
 *
 * @param {object} options - The root object
 * @param {string} options.color - The root object
 * @param {string} options.folderPath - The root object
 * @example
 */
const generateHeaderImage = async ({
	color,
	folderPath
}) => {
	const imageFileName = "header.svg";

	const imageFilePath = join(
		folderPath,
		imageFileName
	);

	const svgText = `
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1300 372"
		>
			<style>
				@import url("https://rsms.me/inter/inter.css");

				:root {
					font-family: "Inter", sans-serif;
				}

				@supports (font-variation-settings: normal) {
					:root {
						font-family: "Inter var", sans-serif;
					}
				}

				text {
					font-family: "Inter", sans-serif;
					font-feature-settings: "ss01", "ss02";
					font-weight: bold;
					fill: oklch(from white l c h);
					mix-blend-mode: difference;
				}

				#bg {
					fill: oklch(from ${color} l c h);
				}

				#group {
					transform-origin: center;
					transform: translateX(200px) rotate(45deg) scale(2);
				}

				.icon {
					fill: oklch(from white l c h);
					mix-blend-mode: difference;
					transform-origin: center;
					stroke: #${[...color].slice(1).toReversed().join("")};
					stroke-width: 1px;
				}
			</style>
			<defs>
				<symbol
					id="icon-symbol"
					viewBox="0 0 46.9466 17.3671"
				>
					<path
						d="M41.8286-0H46.9466C46.9466 7.39 45.0811 11.7322 36.7478 11.7322H32.0554C28.176 11.7322 26.5863 13.1728 26.5863 17.3671H20.3787C20.3787 13.1728 18.79 11.7322 14.91 11.7322H10.1989C1.8663 11.7322.0002 7.39.0002-0H5.1364C5.1364 4.3414 6.9101 5.3761 10.7346 5.3761H16.7945C19.6767 5.3761 22.1341 6.522 23.1318 11.5098H23.8339C24.8313 6.522 27.27 5.3761 30.1519 5.3761H36.2125C40.0553 5.3761 41.8286 4.3414 41.8286-0Z"
					/>
				</symbol>
			</defs>

			<rect
				id="bg"
				width="1300"
				height="372"
			/>
			<g id="group">
				${
					Array.from({ length: 9 }, (empty, index) => `
						<use
							href="#icon-symbol"
							class="icon"
							style="transform: scale(${(9 - index) / 10}) translateX(${20 * index}px) rotate(${10 * index}deg);"
						/>
					`)
						.join("")
				}
			</g>
		</svg>
	`
		.trim()
		.replaceAll(/^\t{2}/gmv, "");

	const pngFilePath = imageFilePath.replace(/\.svg$/v, ".png");

	await Promise.all([
		writeTextFile(
			imageFilePath,
			svgText
		),
		svgToPng(
			imageFilePath,
			pngFilePath,
			{ resizeWidth: 3_900 }
		)
	]);
};

export default generateHeaderImage;
