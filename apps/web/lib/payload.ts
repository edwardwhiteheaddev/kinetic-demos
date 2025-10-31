interface PayloadCollection<T> {
  docs: T[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
}

const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL ?? 'http://localhost:3005';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${CMS_BASE_URL}/api/posts?limit=10`, { next: { revalidate: 300 } });
    if (!res.ok) {
      return [];
    }
    const data = (await res.json()) as PayloadCollection<BlogPost>;
    return data.docs;
  } catch (error) {
    console.error('Failed to fetch blog posts', error);
    return [];
  }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${CMS_BASE_URL}/api/posts?where[slug][equals]=${slug}`, { next: { revalidate: 300 } });
    if (!res.ok) {
      return null;
    }
    const data = (await res.json()) as PayloadCollection<BlogPost>;
    return data.docs[0] ?? null;
  } catch (error) {
    console.error('Failed to fetch blog post', error);
    return null;
  }
}
