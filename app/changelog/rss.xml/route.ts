export const dynamic = "force-static";

import { siteUrl } from "../../../lib/constants";
export async function GET() {
  // Static data - basehub dependency removed
  const data = {
    site: {
      changelog: {
        title: "Changelog",
        subtitle: "Latest updates",
        posts: {
          items: []
        }
      }
    }
  };

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
          <channel>
              <title>${data.site.changelog.title}</title>
              <description>${data.site.changelog.subtitle}</description>
              <link>${siteUrl}/changelog</link>
              <language>en-us</language>${data.site.changelog.posts.items
                .map((post) => {
                  return `
              <item>
                  <title>${post._title}</title>
                  <link>${siteUrl}/changelog/${post._slug}</link>
                  <description>${post.excerpt}</description>
                  <pubDate>${post.publishedAt}</pubDate>
              </item>`;
                })
                .join("")}
          </channel>
      </rss>`;

  return new Response(feed, {
    status: 200,
    headers: { "Content-Type": "application/rss+xml" },
  });
}
