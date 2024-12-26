import { Markdown } from "@/components/Markdown";
import { getArticleBySlug } from "@/data/articles";
import { format } from "date-fns";
import { notFound } from "next/navigation";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  // TODO: Fetch article by slug. For now, use a static list of articles.
  const article = getArticleBySlug(slug);

  // If article not found, you might return a 404 page or some fallback
  if (!article) {
    return notFound();
  }

  const { date, content } = article;

  return (
    <main className="min-h-screen antialiased">
      <div className="mx-auto max-w-2xl px-8 py-16">
        <small className="border-l border-gray-500 pl-2 text-gray-500">
          {format(new Date(date), "MMMM do yyyy")}
        </small>

        <article className="prose prose-invert mt-8">
          <Markdown content={content} />
        </article>
      </div>
    </main>
  );
}
