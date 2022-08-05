import { CourseLayout } from "components";
import { getFiles, getFilesFromSlug, getChapters } from "lib/mdx";

export default function TopicsPage({ frontMatter, mdxSource, chapters }) {
  return (
    <CourseLayout
      frontMatter={frontMatter}
      child={mdxSource}
      chapters={chapters}
    ></CourseLayout>
  );
}

export async function getStaticPaths() {
  const topicDirs = getFiles("learn");

  const allPaths = [];

  topicDirs.forEach((topic) => {
    const files = getFiles(`learn/${topic}`);
    files.splice(
      files.findIndex((el) => el === "index.mdx"),
      1
    );
    files.forEach((fileName) => {
      const path = {
        params: {
          topic: topic,
          slug: fileName.replace(".mdx", ""),
        },
      };

      allPaths.push(path);
    });
  });

  return {
    paths: allPaths,
    fallback: false, // if access path/slug that doesn't exist -> 404 page
  };
}

export async function getStaticProps({ params: { topic, slug } }) {
  const post = await getFilesFromSlug(`learn/${topic}`, slug);
  const chapters = await getChapters(topic);
  return {
    props: {
      ...post,
      chapters: chapters.sort((a, b) => {
        return a.position - b.position;
      }),
    },
  };
}
