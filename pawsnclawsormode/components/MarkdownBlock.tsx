type Props = {
    html: string;
    className?: string;
};

export function MarkdownBlock({ html, className }: Props) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
