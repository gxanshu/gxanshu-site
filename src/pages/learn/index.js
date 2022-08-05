import { getAllFilesOfLearn } from "lib/mdx";
import Seo from "components/Seo";
import siteConfig from "configs/config";
import { Box, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { LearnCard, ListHead, Layout } from "components";

export default function Tutorials({ posts, total, page = 1 }) {
  const hasNextPage = Math.ceil(total / siteConfig.postPerPage) > page;
  const hasPreviousPage = page > 1;
  const urlPrefix = "/tutorials/archives";
  return (
    <Layout>
      <Seo
        templateTitle="Learn"
        description="Explore our structured learning paths to discover everything you need to know about building for the modern web."
      />
      <ListHead
        title={"Learn"}
        description="Explore our structured learning paths to discover everything you need to know about building for the modern web."
      />
      <Box py={16} px={[6, 28]}>
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={"12"}>
          {posts?.map((post, index) => {
            return (
              <LearnCard
                key={index}
                title={post.frontMatter.title}
                image={post.frontMatter.image}
                description={post.frontMatter.description}
                link={post.frontMatter.slug}
                list={post.frontMatter.list}
                category={"learn"}
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

export const getStaticProps = async () => {
  const { posts, total } = await getAllFilesOfLearn();

  return {
    props: {
      posts: posts.slice(0, siteConfig.postPerPage),
      total: total,
    },
  };
};
