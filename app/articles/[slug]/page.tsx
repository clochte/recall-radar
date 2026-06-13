import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES, getArticleBySlug } from '@/lib/articles';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Recall Radar`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.publishedDate,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    dateModified: article.lastReviewedDate ?? article.publishedDate,
    publisher: {
      '@type': 'Organization',
      name: 'Recall Radar',
      url: 'https://recallradar.company',
    },
    author: {
      '@type': 'Organization',
      name: 'Recall Radar Editorial Team',
      url: 'https://recallradar.company/about#who-we-are',
    },
    articleSection: article.category,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://recallradar.company' },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://recallradar.company/articles' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://recallradar.company/articles/${article.slug}` },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-navy">Home</Link>
        <span>/</span>
        <Link href="/articles" className="hover:text-navy">Articles</Link>
        <span>/</span>
        <span className="text-foreground truncate">{article.title.slice(0, 50)}{article.title.length > 50 ? '…' : ''}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-navy/10 text-navy">
            {article.category}
          </span>
          <span className="text-xs text-muted">{formatDate(article.publishedDate)}</span>
          <span className="text-xs text-muted">{article.readingMinutes} min read</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy leading-snug mb-4">
          {article.title}
        </h1>
        <p className="text-gray-600 leading-relaxed text-base mb-3">{article.intro}</p>
        <p className="text-xs text-muted">
          Written by the{' '}
          <Link href="/about#who-we-are" className="text-navy-light hover:underline">
            Recall Radar editorial team
          </Link>
          {' · '}Sourced from official government recall databases
          {article.lastReviewedDate && article.lastReviewedDate !== article.publishedDate && (
            <span className="ml-2 text-muted">· Last reviewed: {formatDate(article.lastReviewedDate)}</span>
          )}
        </p>
      </header>

      {/* Article body */}
      <div className="space-y-8">
        {article.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-lg font-bold text-navy mb-3">{section.heading}</h2>
            <div className="space-y-3">
              {section.body.map((para, j) => (
                <p key={j} className="text-gray-700 leading-relaxed text-sm">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Related links */}
      {article.relatedLinks.length > 0 && (
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
            Related resources
          </p>
          <div className="space-y-2">
            {article.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 group"
              >
                <span className="text-navy-light shrink-0">→</span>
                <span className="text-sm text-navy group-hover:underline">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <p className="mt-8 text-xs text-muted border border-border rounded-lg px-4 py-3 bg-card">
        This article is for informational purposes only. For official recall notices,
        always refer to the source links provided on each recall page.{' '}
        <Link href="/about" className="text-navy-light hover:underline">
          About our data sources →
        </Link>
      </p>

      {/* Other articles */}
      <div className="mt-10 pt-6 border-t border-border">
        <p className="text-sm font-semibold text-navy mb-3">More articles</p>
        <div className="flex flex-wrap gap-2">
          {ARTICLES.filter((a) => a.slug !== slug).map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="text-xs px-3 py-1.5 bg-card border border-border rounded-full text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              {a.title.slice(0, 45)}{a.title.length > 45 ? '…' : ''}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
