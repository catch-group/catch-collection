/* eslint-disable sonarjs/max-switch-cases */
/* eslint-disable complexity */

import { clamp } from "@radashi-org/radashi";
import remarkGfm from "remark-gfm";
import parse from "remark-parse";
import { unified } from "unified";

/**
 * @import { Root, RootContent, Definition, FootnoteDefinition, Blockquote, Code, List, TableCell, TableRow, InlineCode, Heading } from "mdast";
 */

const maximumDepth = 5;
const maximumHeadingSize = 7;

/**
 * State class used to track and render markdown AST nodes.
 */
const State = class {

	/** @type {string[]|null} */
	#currentRow = null;

	/** @type {Definition[]} */
	#definitions = [];

	/** @type {FootnoteDefinition[]} */
	#footnoteDefinitions = [];

	/** @type {boolean} */
	#headersProcessed = false;

	/** @type {{ headers: string[]|null, rows: string[][] }|null} */
	#table = null;

	/**
	 * Render the entire AST tree.
	 *
	 * @param {Root} tree - The AST root.
	 * @returns {string} The rendered output.
	 * @example
	 */
	render(tree) {
		const renderedContent = this.#renderNodes(tree.children || []);
		const linkDefinitions = this.#renderLinkDefinitions();
		const footnotes = this.#renderFootnotes();

		const result = [
			renderedContent,
			linkDefinitions,
			footnotes
		].join("").trim();

		return result
			.replaceAll("\n\n\n", "\n\n")
			.replaceAll("[*]\n", "[*]");
	}

	/**
	 * Render a blockquote node.
	 *
	 * @param {Blockquote} node
	 * @returns {string}
	 * @example
	 */
	#renderBlockquote(node) {
		return `[quote]${this.#renderNodes(node.children)}[/quote]\n`;
	}

	/**
	 * Render all collected footnote definitions.
	 *
	 * @returns {string}
	 * @example
	 */
	#renderFootnotes() {
		return this.#footnoteDefinitions
			.map((footnote) => `\n^${footnote.identifier}: ${this.#renderNodes(footnote.children || [])}`)
			.join("");
	}

	/**
	 * Render a heading node.
	 *
	 * @param {Heading} node
	 * @returns {string}
	 * @example
	 */
	#renderHeading(node) {
		const size = maximumHeadingSize - clamp(node.depth, 1, maximumDepth);

		return `\n[size=${size}]${this.#renderNodes(node.children)}[/size]\n\n`;
	}

	/**
	 * Render an inline code node.
	 *
	 * @param {InlineCode} node
	 * @returns {string}
	 * @example
	 */
	#renderInlineCode(node) {
		// If rendering a table, don't wrap inline code.
		if (this.#table) {
			return node.value;
		}

		return `[font=Courier New]${node.value}[/font]`;
	}

	/**
	 * Render all collected link definitions.
	 *
	 * @returns {string}
	 * @example
	 */
	#renderLinkDefinitions() {
		return this.#definitions
			.map((linkDefinition) => {
				const anchor = linkDefinition.title || linkDefinition.identifier;

				return `\n^${linkDefinition.identifier}: [url=${linkDefinition.url}]${anchor}[/url]`;
			})
			.join("");
	}

	/**
	 * Render a list node.
	 *
	 * @param {List} node
	 * @returns {string}
	 * @example
	 */
	#renderList(node) {
		if (node.ordered) {
			return `\n[list=1]\n${this.#renderNodes(node.children)}[/list]`;
		}

		return `\n[list]\n${this.#renderNodes(node.children)}[/list]`;
	}

	/**
	 * Render a single node based on its type.
	 *
	 * @param {RootContent} node - The AST node.
	 * @returns {string} The rendered node.
	 * @example
	 */
	#renderNode(node) {
		switch (node.type) {
			case "blockquote":
				return this.#renderBlockquote(node);
			case "break":
				return "\n\n";
			case "code":
				return `\n[code]${node.value}[/code]\n`;
			case "definition":
				this.#definitions.push(node);

				return "";
			case "delete":
				return `[s]${this.#renderNodes(node.children)}[/s]`;
			case "emphasis":
				return `[i]${this.#renderNodes(node.children)}[/i]`;
			case "footnoteDefinition":
				this.#footnoteDefinitions.push(node);

				return "";
			case "footnoteReference":
				return `(See ^${node.identifier})`;
			case "heading":
				return this.#renderHeading(node);
			case "html":
				return node.value;
			case "image":
				return `[img]${node.url}[/img]`;
			case "imageReference":
				return `[${node.identifier}] ${node.alt || ""}`;
			case "inlineCode":
				return this.#renderInlineCode(node);
			case "link":
				return `[url=${node.url}]${this.#renderNodes(node.children)}[/url]`;
			case "linkReference":
				return `(See image ${node.identifier}; ${this.#renderNodes(node.children)})`;
			case "list":
				return this.#renderList(node);
			case "listItem":
				return `[*]${this.#renderNodes(node.children)}`;
			case "paragraph":
				return `\n${this.#renderNodes(node.children)}\n`;
			case "strong":
				return `[b]${this.#renderNodes(node.children)}[/b]`;
			case "table":
				return this.#renderTable(node);
			case "tableCell":
				return this.#renderTableCell(node);
			case "tableRow":
				return this.#renderTableRow(node);
			case "text":
				return node.value;
			case "thematicBreak":
				return "\n\n[line]\n\n";
			case "yaml":
				return `\n[code]${node.value}[/code]\n\n`;
			default:
				return "";
		}
	}

	/**
	 * Render multiple nodes.
	 *
	 * @param {RootContent[]} nodeList - A list of AST nodes.
	 * @returns {string} Rendered string of all nodes.
	 * @example
	 */
	#renderNodes(nodeList) {
		return nodeList.map((node) => this.#renderNode(node)).join("");
	}

	/**
	 * Render a table node.
	 *
	 * @param {{children: RootContent[]}} node
	 * @returns {string}
	 * @example
	 */
	#renderTable(node) {
		this.#table = {
			headers: null,
			rows: []
		};
		this.#renderNodes(node.children);

		const result = this.#tableToString();

		this.#table = null;
		this.#headersProcessed = false;

		return `\n[font=Courier][code]${result}[/code][/font]\n`;
	}

	/**
	 * Render a table cell node.
	 *
	 * @param {TableCell} node
	 * @returns {string}
	 * @example
	 */
	#renderTableCell(node) {
		const cellContent = this.#renderNodes(node.children);

		if (this.#currentRow) {
			this.#currentRow.push(cellContent);
		}

		return "";
	}

	/**
	 * Render a table row node.
	 *
	 * @param {TableRow} node
	 * @returns {string}
	 * @example
	 */
	#renderTableRow(node) {
		this.#currentRow = [];
		this.#renderNodes(node.children);

		if (this.#currentRow) {
			if (this.#headersProcessed && this.#table) {
				this.#table.rows.push(this.#currentRow);
			}
			else {
				if (this.#table) {
					this.#table.headers = this.#currentRow;
				}
				this.#headersProcessed = true;
			}
		}
		this.#currentRow = null;

		return "";
	}

	/**
	 * Convert the accumulated table data into a string.
	 *
	 * @returns {string}
	 * @example
	 */
	#tableToString() {
		if (!this.#table) {
			return "";
		}

		const lines = [];

		if (this.#table.headers) {
			lines.push(this.#table.headers.join(" | "));
		}
		for (const row of this.#table.rows) {
			lines.push(row.join(" | "));
		}

		return lines.join("\n");
	}

};

/**
 * Transform markdown input into a NexusMods-compatible description format.
 *
 * @param {string} input - The root object
 * @returns {string} - The Nexus Mods compatible description
 * @example
 */
const convertMarkdownToNexusModsDescription = (input) => {
	const tree = unified()
		.use(parse)
		.use(remarkGfm)
		.parse(input);

	const state = new State();

	return state.render(tree);
};

export default convertMarkdownToNexusModsDescription;
