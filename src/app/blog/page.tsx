import { ArticleLink } from "@/components/ArticleLink";
import { ARTICLES } from "@/data/articles";

export default function BlogPage() {
  return (
    <main className="min-h-screen antialiased">
      <div className="relative mx-auto flex max-w-5xl flex-col justify-start px-8 md:mt-20">
        <h1 className="text-left font-bold text-gray-100 sm:text-xl md:text-4xl lg:h-24 lg:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-loose tracking-wide text-gray-400 md:text-base">
          All my thoughts in one place.
        </p>
        <div className="mx-auto mt-20">
          <div className="flex max-w-3xl flex-col space-y-16">
            {ARTICLES.map((article) => (
              <ArticleLink
                key={article.id}
                href={`/blog/${article.slug}`}
                date={article.date}
                title={article.title}
                description={article.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
