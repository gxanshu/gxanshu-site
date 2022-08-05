import siteConfig from "configs/config";
import { getAllFilesFrontMatter, getPostSlugs } from "lib/mdx";
import { Box, SimpleGrid, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import Seo from "components/Seo";
import { BlogCard, ListHead, Layout } from "components";

export default function BlogPagination({ posts, page, total }) {
  const hasNextPage = Math.ceil(total / siteConfig.postPerPage) > page;
  const hasPreviousPage = page > 1;
  const urlPrefix = "/blog/archives";

  return (
    <>
      <Seo
        templateTitle="Blog"
        description="Thoughts, mental models, and tutorials about front-end development. Rebuild your mental model so front-end development can be predictable."
      />
      <Layout>
        <ListHead
          title={"Blog"}
          description="Our latest news, updates, and stories for developers"
        />
        <Box py={10} px={[8, 10]}>
          <SimpleGrid columns={[1, 1, 1, 3]} spacing={12}>
            {posts?.map((post, index) => {
              return (
                <BlogCard
                  key={index}
                  title={post.frontMatter.title}
                  image={post.frontMatter.image}
                  description={post.frontMatter.description}
                  link={post.frontMatter.slug}
                  category={"blog"}
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
    </>
  );
}

export const getStaticPaths = async () => {
  const pages = Math.ceil(getPostSlugs("blog").length / siteConfig.postPerPage);
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

  const { posts, total } = await getAllFilesFrontMatter("blog");

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
