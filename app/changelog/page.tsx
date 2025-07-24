import Image from "next/image";
import Link from "next/link";
import { Heading } from "../../common/heading";
import { ChangelogList } from "./_components/changelog-list";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { staticChangelogPosts } from "../../lib/data/static-content";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  return {
    title: "Changelog - RockCore",
    description: "Latest updates and improvements to RockCore products and services.",
  };
};

export default async function ChangelogPage() {
  const changelogPosts = staticChangelogPosts;
  const socialLinks = [
    { _id: "1", _title: "LinkedIn", icon: { url: "/placeholder.svg" }, url: "https://linkedin.com" },
    { _title: "Twitter", icon: { url: "/placeholder.svg" }, url: "https://twitter.com" }
  ];

  if (changelogPosts.length === 0) {
    return notFound();
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto flex w-full max-w-screen-md flex-col items-start justify-between gap-4 border-r border-gray-200 px-8 py-24 dark:border-gray-700 md:flex-row md:items-center">
          <Heading align="left" className="flex-1 !flex-col-reverse" subtitle="Latest updates and improvements">
            <h1>Changelog</h1>
          </Heading>
          <div className="flex items-center gap-2 md:flex-col">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Follow us
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link._id || link._title}
                  className="aspect-square hover:brightness-90"
                  href={link.url}
                  target="_blank"
                >
                  <Image
                    priority
                    alt={link._title}
                    height={18}
                    src={link.icon?.url ?? "/placeholder.svg"}
                    width={18}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="!mx-auto !max-w-screen-md px-8 pt-16">
        <ChangelogList changelogPosts={changelogPosts} />
      </div>
    </>
  );
}
