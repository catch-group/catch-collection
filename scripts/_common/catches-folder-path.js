import { join } from "@std/path";

const {
	cwd
} = Deno;

const catchesFolderPath = join(cwd(), "catches");

export default catchesFolderPath;
