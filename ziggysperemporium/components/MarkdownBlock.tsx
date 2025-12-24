import clsx from 'classnames';
import ReactMarkdown from 'react-markdown';

export type MarkdownBlockProps = {
    content: string;
    className?: string;
};

export function MarkdownBlock({ content, className }: MarkdownBlockProps) {
    return (
        <div className={clsx('markdown', className)}>
            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => <p {...props} />,
                    ul: ({ node, ...props }) => <ul {...props} />,
                    li: ({ node, ...props }) => <li {...props} />,
                    strong: ({ node, ...props }) => <strong {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
