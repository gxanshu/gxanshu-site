import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const blog = await getCollection("blog");
  return rss({
    title: "gxanshu - developer's coding blog",
    description:
      "gxanshu is the coding & programming blog that write about web development, artifical intelligence and machine learning. help you to understand computers",
    site: "https://gxanshu.in/",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
