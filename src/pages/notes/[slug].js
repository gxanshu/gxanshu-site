import { getFiles, getFilesFromSlug } from "lib/mdx";
import BlogLayout from "components/layout/NotesLayout";

export default function Blog({ frontMatter, mdxSource }) {
  return <BlogLayout frontMatter={frontMatter} child={mdxSource}></BlogLayout>;
}

export async function getStaticPaths() {
  const posts = getFiles("notes");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFilesFromSlug("notes", params.slug);

  return { props: post };
}
