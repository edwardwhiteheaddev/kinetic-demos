import { getMarkdownData } from '@/lib/markdown';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMarkdownData('home');
  return {
    title: (data as any).title,
    description: (data as any).description,
    keywords: (data as any).keywords,
  };
}

export default async function Home() {
  const data = await getMarkdownData('home');
  const { contentHtml, title, description } = data as any;

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Visit Us Today
              </a>
              <a href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                Our Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
         <div className="prose lg:prose-xl mx-auto" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}
