import { Heading } from "../../common/heading";
import { Section } from "../../common/section-wrapper";
import { BlogpostCard } from "./_components/simple-blogpost-card";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { staticBlogPosts, staticAuthors } from "../../lib/data/static-content";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  return {
    title: "Blog - RockCore",
    description: "Latest insights and updates from RockCore on industrial computing solutions.",
  };
};

export default async function BlogPage() {
  const posts = staticBlogPosts;
  const authors = staticAuthors;

  if (posts.length === 0) {
    notFound();
  }

  return (
    <Section className="gap-16">
      <div className="grid grid-cols-1 gap-5 self-stretch md:grid-cols-2">
        <Heading align="left">
          <h2>Latest Blog Posts</h2>
        </Heading>
        {posts.slice(0, 3).map((post) => (
          <BlogpostCard key={post._id} type="card" {...post} />
        ))}
      </div>
      <div className="w-full space-y-3">
        <Heading align="left">
          <h3 className="!text-xl lg:!text-2xl">All Posts</h3>
        </Heading>
        <div className="-mx-4 flex flex-col self-stretch">
          {posts.map((post) => (
            <BlogpostCard key={post._id} {...post} className="-mx-4" />
          ))}
        </div>
      </div>
    </Section>
  );
}
