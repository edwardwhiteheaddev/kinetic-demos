import { getMarkdownData } from '@/lib/markdown';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMarkdownData('about');
  return {
    title: (data as any).title,
    description: (data as any).description,
  };
}

export default async function About() {
  const data = await getMarkdownData('about');
  const { contentHtml, title } = data as any;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>
        <div className="prose lg:prose-xl mx-auto" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}
