import { readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export type MarkdownSection = {
    html: string;
    data: Record<string, unknown>;
};

export async function loadMarkdown(relativePath: string): Promise<MarkdownSection> {
    const contentPath = path.join(process.cwd(), "content", relativePath);
    const file = await readFile(contentPath, "utf8");
    const { content, data } = matter(file);
    const processed = await remark().use(html).process(content);

    return { html: processed.toString(), data };
}
