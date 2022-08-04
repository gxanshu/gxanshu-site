import { getAllFilesFrontMatter } from "lib/mdx";
import Seo from "components/Seo";
import siteConfig from "configs/config";
import { Box, SimpleGrid, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import {BlogCard, ListHead, Layout} from 'components'

export default function BlogPage({ posts, total, page = 1 }) {
  const hasNextPage = Math.ceil(total / siteConfig.postPerPage) > page;
  const hasPreviousPage = page > 1;
  const urlPrefix = "/blog/archives";
  return (
    <Layout>
      <Seo
        templateTitle="Blog"
        description="Thoughts, mental models, and tutorials about front-end development. Rebuild your mental model so front-end development can be predictable."
      />
      <ListHead
        title={"Blog"}
        description="Our latest news, updates, and stories for developers"
      />
      <Box py={10} px={[8, 12]}>
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={"24"}>
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
  );
}

export const getStaticProps = async () => {
  const { posts, total } = await getAllFilesFrontMatter("blog");

  return {
    props: {
      posts: posts.slice(0, siteConfig.postPerPage),
      total: total,
    },
  };
};
