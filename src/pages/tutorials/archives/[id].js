import siteConfig from "configs/config";
import { getAllFilesFrontMatter, getPostSlugs } from "lib/mdx";
import Layout from "components/layout/Layout";
import ListHead from "components/ListHead";
import { Box, Flex, Button, VStack, SimpleGrid } from "@chakra-ui/react";
import TutorialCard from "components/PostCard/TutorialsCard";
import Link from "next/link";
import Seo from "components/Seo";

export default function NotesPagination({ posts, page, total }) {
  const hasNextPage = Math.ceil(total / siteConfig.postPerPage) > page;
  const hasPreviousPage = page > 1;
  const urlPrefix = "/tutorials/archives";

  return (
    <Layout>
      <Seo
        templateTitle="Tutorials"
        description="Biggest Online Tutorials Library - The Best Content on latest technologies including C, C++, Java, Python, PHP, Machine Learning, Data Science, AppML, AI with Python, Behave, Java16, Spacy."
      />
      <ListHead
        title={"Tutorials"}
        description="Explore our structured learning paths to discover everything you need to know about building for the modern web."
      />
      <Box py={16} px={[6, 28]}>
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={"12"}>
          {posts?.map((post, index) => {
            return (
              <TutorialCard
                key={index}
                title={post.frontMatter.title}
                image={post.frontMatter.image}
                description={post.frontMatter.description}
                link={post.frontMatter.slug}
                category={"tutorials"}
              />
            );
          })}
        </SimpleGrid>
        <Flex justifyContent={"space-between"} mt={16}>
          {hasPreviousPage ? (
            <Link href={urlPrefix + `/${page - 1}`} passHref>
              <Button>Prev</Button>
            </Link>
          ) : (
            <Box></Box>
          )}
          {hasNextPage && (
            <Link href={urlPrefix + `/${page + 1}`} passHref>
              <Button>Next</Button>
            </Link>
          )}
        </Flex>
      </Box>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const pages = Math.ceil(
    getPostSlugs("tutorials").length / siteConfig.postPerPage
  );
  const paths = Array.from(Array(pages).keys()).map((page) => ({
    params: { id: String(page + 1) },
  }));

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { id } = params;

  const { posts, total } = await getAllFilesFrontMatter("tutorials");

  let firstCut = (id - 1) * siteConfig.postPerPage;
  let lastCut = id * siteConfig.postPerPage;

  return {
    props: {
      posts: posts.slice(firstCut, lastCut),
      page: Number(id),
      total,
    },
  };
}
