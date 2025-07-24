import Image from 'next/image';
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Heading } from "../../../common/heading";
import { authorFragment, optimizedImageFragment } from "../../../lib/types/static-types";
import { CodeSnippet } from "../../../components/code-snippet";
import { richTextBaseComponents, richTextClasses } from "../../../components/rich-text";
import { ButtonLink } from "../../../common/button";
import { AvatarsGroup } from "../../../common/avatars-group";
import { Author } from "../../../common/avatar";
import { formatDate } from "../../_utils/dates";
import { PageView } from "../../../components/page-view";

export const dynamic = "force-static";
export const revalidate = 30;

interface ChangelogPageParams {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = async () => {
  // Return empty array for now since we don't have static changelog data
  return [];
};

export const generateMetadata = async ({
  params: _params,
}: ChangelogPageParams): Promise<Metadata | undefined> => {
  const params = await _params;
  // Static data - basehub dependency removed
  const data = {
    site: {
      settings: {
        metadata: {
          titleTemplate: true,
          sitename: true,
        },
      },
      changelog: {
        posts: {
          __args: {
            filter: {
              _sys_slug: { eq: params.slug },
            },
            first: 1,
          },
          items: {
            _title: true,
            excerpt: true,
            ogImage: { url: true },
            _id: true,
          },
        },
      },
    },
  };

  const post = data.site.changelog.posts.items[0];

  if (!post) return undefined;

  const images = [{ url: post.ogImage.url }];

  return {
    title: post._title,
    description: post.excerpt,
    openGraph: {
      images,
    },
    twitter: {
      images,
      card: "summary_large_image",
      site: data.site.settings.metadata.sitename,
    },
  };
};

export default async function ChangelogPage({ params: _params }: ChangelogPageParams) {
  const params = await _params;
  const [
    {
      site: { changelog, generalEvents },
    },
    allPosts,
  ] = await Promise.all([
    // Static data - basehub dependency removed
    Promise.resolve({
      site: {
        generalEvents: { ingestKey: "static" },
        changelog: {
          goBackText: "Back to changelog",
          posts: {
            items: []
          },
          socialLinksTitle: "Share",
          socialLinks: []
        }
      }
    }),
    // Static data - basehub dependency removed
    Promise.resolve({
      site: {
        changelog: {
          posts: {
            items: []
          }
        }
      }
    }),
  ]);

  const post = changelog.posts.items.at(0);
  const socialLinks = changelog.socialLinks;
  if (!post) return notFound();

  const postIndex = allPosts.site.changelog.posts.items.findIndex((p) => p._slug === post._slug);
  const nextPost =
    allPosts.site.changelog.posts.items[postIndex + 1] ?? allPosts.site.changelog.posts.items[0];

  return (
    <>
      <PageView ingestKey={generalEvents.ingestKey} />
      <div className="flex items-center justify-between border-b border-[--border] dark:border-[--dark-border]">
        <div className="mx-auto flex w-full max-w-screen-md flex-col items-start justify-between gap-4 border-r border-[--border] px-8 py-24 dark:border-[--dark-border] md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <Link
              className="flex w-max items-center gap-1 text-sm text-[--text-tertiary] hover:underline dark:text-[--dark-text-tertiary] md:text-sm"
              href={`/changelog#${post._slug}`}
            >
              <ArrowLeftIcon /> {changelog.goBackText}
            </Link>
            <Heading align="left">
              <h1>{post._title}</h1>
            </Heading>
            <p className="text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary] md:text-base">
              {formatDate(post.publishedAt)}
            </p>
          </div>
          <div className="flex items-center gap-2 md:flex-col">
            <p className="text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
              {changelog.socialLinksTitle}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link._id}
                  className="aspect-square hover:brightness-90"
                  href={link.url}
                  target="_blank"
                >
                  <Image
                    priority
                    alt={link._title}
                    height={18}
                    src={link.icon?.url ?? ""}
                    width={18}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-md flex-col gap-8 px-8 pb-20 pt-16">
        <Image
          priority
          alt={post.image.alt ?? post._title}
          blurDataURL={post.image.blurDataURL}
          className="h-auto w-full rounded-xl"
          height={post.image.height}
          placeholder="blur"
          src={post.image.url}
          style={{ aspectRatio: post.image.aspectRatio }}
          width={post.image.width}
        />
        <p className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary] md:text-base">
          {post.excerpt}
        </p>
        <div className={richTextClasses}>
          <div>
            {post.body.json.content}
          </div>
        </div>
        <div className="flex items-center justify-between">
          {post.authors.length > 1 ? (
            <AvatarsGroup animate>
              {post.authors.map((author) => (
                <Author {...author} key={author._id} />
              ))}
            </AvatarsGroup>
          ) : post.authors[0] ? (
            <div className="flex items-center gap-2">
              <Author {...post.authors[0]} />
              <p className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary] md:text-base">
                {post.authors[0]._title}
              </p>
            </div>
          ) : null}

          {nextPost ? (
            <ButtonLink
              className="text-sm text-[--text-tertiary] hover:underline dark:text-[--dark-text-tertiary]"
              href={`/changelog/${nextPost._slug}`}
              icon={<ArrowRightIcon />}
              iconSide="right"
              intent="secondary"
            >
              {nextPost._title.slice(0, 35)}
              {nextPost._title.length > 35 ? "..." : ""}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </>
  );
}
