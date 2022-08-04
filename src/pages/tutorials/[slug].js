import { getFiles, getFilesFromSlug } from "lib/mdx";
import { TutorialsPostLayout } from "components";

export default function TutorialPage({ frontMatter, mdxSource }) {
  return (
    <TutorialPostLayout
      frontMatter={frontMatter}
      child={mdxSource}
    ></TutorialPostLayout>
  );
}

export async function getStaticPaths() {
  const posts = getFiles("tutorials");

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
  const post = await getFilesFromSlug("tutorials", params.slug);

  return { props: post };
}
