import { getMarkdownData } from '@/lib/markdown';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMarkdownData('contact');
  return {
    title: (data as any).title,
    description: (data as any).description,
  };
}

export default async function Contact() {
  const data = await getMarkdownData('contact');
  const { contentHtml, title, address, phone, hours, map_url } = data as any;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Get in Touch</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose lg:prose-xl mx-auto" dangerouslySetInnerHTML={{ __html: contentHtml }} />

            <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src={map_url}
                    width="100%"
                    height="450"
                    style={{border:0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
      </div>
    </div>
  );
}
