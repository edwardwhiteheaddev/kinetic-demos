import clsx from "clsx";
import ReactMarkdown from "react-markdown";

export function MarkdownBlock({
    children,
    className,
}: {
    children?: string;
    className?: string;
}) {
    if (!children) return null;

    return (
        <div
            className={clsx(
                "prose prose-slate max-w-none text-base leading-relaxed prose-p:my-2 prose-ul:my-2 prose-li:my-1 prose-strong:text-slate-900 prose-blockquote:border-l-4 prose-blockquote:border-orange-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-700",
                className
            )}
        >
            <ReactMarkdown
                components={{
                    a({ href, children: linkChildren }) {
                        return (
                            <a
                                href={href}
                                className="font-semibold text-orange-600 underline decoration-2 underline-offset-4 transition hover:text-orange-500"
                            >
                                {linkChildren}
                            </a>
                        );
                    },
                    ul({ children: listChildren }) {
                        return <ul className="ml-5 list-disc space-y-1 text-base">{listChildren}</ul>;
                    },
                    li({ children: listItem }) {
                        return <li className="text-slate-800">{listItem}</li>;
                    },
                }}
            >
                {children}
            </ReactMarkdown>
        </div>
    );
}
