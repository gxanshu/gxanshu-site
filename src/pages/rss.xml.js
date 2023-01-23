import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "CodeNanshu - developer's coding blog",
    description: "codenanshu is the coding & programming blog that write about web development, artifical intelligence and machine learning. help you to understand computers",
    site: 'https://codenanshu.in/',
    items: import.meta.glob('./**/*.mdx'),
    customData: `<language>en-us</language>`,
  });
}