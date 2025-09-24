import Link from "next/link";
import Image from "next/image";
import { cx } from "class-variance-authority";
import { Avatar } from "../../../common/avatar";
import { formatDate } from "../../_utils/dates";
import { StaticBlogPost } from "../../../lib/data/static-content";

type BlogPostCardProps = {
  type?: "card" | "list";
  className?: string;
} & StaticBlogPost;

export function BlogpostCard({ type = "list", className, ...post }: BlogPostCardProps) {
  if (type === "card") {
    return (
      <Link
        key={post._id}
        className={cx(
          "group flex flex-col self-stretch rounded-xl border transition-shadow",
          "border-gray-200 bg-white text-gray-600 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",
          "focus-visible:ring-2 outline-0 focus-visible:ring-green-500",
          className,
        )}
        href={`/blog/${post._slug}`}
      >
        {post.coverImage && (
          <figure className="overflow-hidden p-2">
            <Image
              alt={post.coverImage.alt}
              className="h-full w-full rounded-sm object-cover"
              height={post.coverImage.height}
              width={post.coverImage.width}
              src={post.coverImage.url}
            />
          </figure>
        )}
        <div className="flex flex-col justify-between gap-3 p-4">
          <header className="flex items-center justify-between gap-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(post.publishedAt)}
            </p>
            <Avatar {...post.author.image} />
          </header>
          <main className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {post._title}
            </h3>
            <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
              {post.excerpt}
            </p>
          </main>
        </div>
      </Link>
    );
  }

  return (
    <article className="border-b border-gray-200 py-4 dark:border-gray-700">
      <Link
        href={`/blog/${post._slug}`}
        className="block rounded-lg p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_auto]">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              {post._title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
              {post.excerpt}
            </p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(post.publishedAt)}
          </div>
          <div className="flex items-center">
            <Avatar {...post.author.image} />
          </div>
        </div>
      </Link>
    </article>
  );
}
