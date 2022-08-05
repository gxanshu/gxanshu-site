import { getChapters, getFiles, getFilesFromSlug } from "lib/mdx";
import { LearnLayout } from "components";

export default function TopicPage({ frontMatter, mdxSource, chapters }) {
  return (
    <LearnLayout
      frontMatter={frontMatter}
      child={mdxSource}
      chapters={chapters}
    ></LearnLayout>
  );
}

export async function getStaticPaths() {
  const posts = getFiles("learn");

  return {
    paths: posts.map((p) => ({
      params: {
        topic: p,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFilesFromSlug(`learn/${params.topic}`);
  const chapters = await getChapters(params.topic);

  return {
    props: {
      ...post,
      chapters: chapters.sort((a, b) => {
        return a.position - b.position;
      }),
    },
  };
}
