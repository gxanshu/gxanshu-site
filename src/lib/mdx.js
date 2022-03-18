import { readFileSync, readdirSync, readdir } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXComponents from "components/MDXComponent";
import readingTime from "reading-time";
import { sortByDate } from "./mdxClient";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const rootPath = process.cwd();

export function getFiles(category) {
  return readdirSync(join(rootPath, "content", category));
}

export async function getFilesFromSlug(category, slug) {
  const source = slug
    ? readFileSync(join(rootPath, "content", category, `${slug}.mdx`), "utf8")
    : readFileSync(join(rootPath, "content", category, `index.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        rehypeAutolinkHeadings,
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

const getSlugFromFileName = (filePath) => {
  return filePath.replace(/\.mdx?$/, "");
};

export const getPostSlugs = (category) => {
  let slugs = getFiles(category);
  return slugs.map(getSlugFromFileName);
};

export async function getAllFilesFrontMatter(category) {
  const allPosts = await Promise.all(
    getPostSlugs(category).map(async (slug) => {
      const source = slug
        ? readFileSync(
            join(rootPath, "content", category, `${slug}.mdx`),
            "utf8"
          )
        : readFileSync(join(rootPath, "content", `${category}.mdx`), "utf8");

      const { data, content } = matter(source);

      return {
        frontMatter: {
          ...data,
        },
      };
    })
  );
  return {
    posts: sortByDate(allPosts),
    total: allPosts.length,
  };
}

// @ from here code is only for learn section

export async function getAllFilesOfLearn() {
  let slugs = getFiles("learn");
  let allPosts = await Promise.all(
    slugs.map(async (slug) => {
      const source = readFileSync(
        join(rootPath, "content", "learn", slug, "index.mdx"),
        "utf-8"
      );

      const { data, content } = matter(source);

      return {
        frontMatter: {
          ...data,
        },
      };
    })
  );

  return {
    posts: sortByDate(allPosts),
    total: allPosts.length,
  };
}

export async function getChapters(cource) {
  let paths = getFiles(`learn/${cource}`);

  let chapters = paths.map((path) => {
    let source = readFileSync(
      join(rootPath, "content", "learn", cource, path),
      "utf-8"
    );
    let { data } = matter(source);
    return {
      position: data.position,
      slug: data.slug,
      title: data.title,
      main: data.main,
    };
  });

  return chapters;
}
// learn section code end
