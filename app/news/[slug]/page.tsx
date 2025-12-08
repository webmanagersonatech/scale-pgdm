import { newsData } from "../../../data/newsdata";
import NewsDetailAnimated from "../../../components/NewsDetailAnimated";

export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}

interface NewsPageProps {
  params: { slug: string };
}

// Type guard to filter out undefined values
function filterUndefinedStrings(arr?: (string | undefined)[]): string[] | undefined {
  if (!arr) return undefined;
  return arr.filter((img): img is string => img !== undefined);
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = params;

  const newsItem = newsData.find((n) => n.slug === slug);

  if (!newsItem) {
    return <p className="p-6">News not found</p>;
  }

  // Create a strictly matching object
  const filteredNewsItem = {
    title: newsItem.title,
    date: newsItem.date,
    event_period: newsItem.event_period,
    category: newsItem.category,
    image: newsItem.image,
    slug: newsItem.slug,
    content: newsItem.content,
    relevantImages: filterUndefinedStrings(newsItem?.relevantImages),
    pressrealse: filterUndefinedStrings((newsItem as any)?.pressrealse),
  };

  return <NewsDetailAnimated newsItem={filteredNewsItem} />;
}
