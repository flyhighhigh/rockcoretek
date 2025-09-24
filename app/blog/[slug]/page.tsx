import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "../../../common/section-wrapper";
import { Heading } from "../../../common/heading";
import { Avatar } from "../../../common/avatar";
import { SimpleRichText } from "../../../components/simple-rich-text";
import { formatDate } from "../../_utils/dates";
import { staticBlogPosts } from "../../../lib/data/static-content";
import { authorFragment, darkLightImageFragment } from "../../../lib/types/static-types";
import { FaqItemComponentFragment, richTextCalloutComponentFragment } from "../../../components/rich-text";
import { codeSnippetFragment } from "../../../components/code-snippet";
import { DarkLightImage } from "../../../common/dark-light-image";
import { richTextClasses } from "../../../components/rich-text";
import { cx } from "class-variance-authority";
import { PageView } from "../../../components/page-view";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateStaticParams = async () => {
  return staticBlogPosts.map((post) => ({
    slug: post._slug,
  }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> => {
  const { slug } = await params;
  const post = staticBlogPosts.find(p => p._slug === slug);
  
  if (!post) return undefined;

  return {
    title: post._title,
    description: post.excerpt,
  };
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = staticBlogPosts.find(p => p._slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Section className="gap-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <Heading align="left" className="mb-4">
            <h1>{post._title}</h1>
          </Heading>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Avatar {...post.author.image} />
              <span>{post.author._title}</span>
            </div>
            <span>•</span>
            <time>{formatDate(post.publishedAt)}</time>
          </div>
        </header>

        {post.coverImage && (
          <figure className="mb-8">
            <Image
              alt={post.coverImage.alt}
              className="w-full rounded-lg object-cover"
              height={post.coverImage.height}
              width={post.coverImage.width}
              src={post.coverImage.url}
            />
          </figure>
        )}

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <SimpleRichText content={post.content || post.excerpt} />
        </div>
      </div>
    </Section>
  );
}
