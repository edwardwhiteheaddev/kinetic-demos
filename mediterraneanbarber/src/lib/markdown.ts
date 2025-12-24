import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export async function markdownToHtml(markdown: string): Promise<string> {
    const processed = await remark().use(remarkGfm).use(html).process(markdown);
    return processed.toString();
}
