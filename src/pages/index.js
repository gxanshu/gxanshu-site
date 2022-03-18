import HeroSection from "container/Hero";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Stack,
  Circle,
  useColorModeValue,
  chakra,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { getAllFilesFrontMatter, getAllFilesOfLearn } from "lib/mdx";
import BlogCard from "components/PostCard/BlogCard";
import DiscordStrip from "container/DiscordStrip";
import Container from "container/container";
import Author from "container/Author";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import LearnCard from "components/PostCard/LearnCard";
import Seo from "components/Seo";

export default function Home({ blogPosts, tutorialsPost, lessionsPost }) {
  const blogPostBg = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Seo
        templateTitle="Developer blog"
        description="Thoughts, mental models, and tutorials about front-end development. Rebuild your mental model so front-end development can be predictable."
      />
      <div>
        <HeroSection />
        {/* here is the section for latest blog post */}
        <Stack w={"100%"} px={10} py={5} spacing={8}>
          <Flex justifyContent={"space-between"} pr={[0, 20]}>
            <Text>Latest Articles</Text>
            <Link href="/blog" passHref>
              All Posts
            </Link>
          </Flex>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={3}>
            {blogPosts.map((post, index) => {
              return (
                <Stack
                  key={index}
                  maxW={[300, 250]}
                  spacing={2}
                  p={3}
                  borderRadius={5}
                  bgColor={blogPostBg}
                  justifyContent="space-evenly"
                  sx={{
                    _hover: {
                      outline: "solid 2px",
                      outlineOffset: "5px",
                      outlineColor: "gray.300",
                      transition: "all 0.6s",
                    },
                  }}
                >
                  <Link href={`blog/${post.frontMatter.slug}`} passHref>
                    <Text as="h3" fontSize={18} fontWeight="bold">
                      {post.frontMatter.title}
                    </Text>
                  </Link>
                  <Text>{post.frontMatter.description}</Text>
                  <Link href={`blog/${post.frontMatter.slug}`} passHref>
                    <Text color="green.400">Read More</Text>
                  </Link>
                </Stack>
              );
            })}
          </SimpleGrid>
        </Stack>
      </div>

      {/* section for tutorials */}

      <Box py={20}>
        <Stack w={"100%"} px={10} py={5} spacing={8}>
          <Flex justifyContent={"space-between"} pr={[0, 20]}>
            <Text>Latest Tutorials</Text>
            <Link href="/blog" passHref>
              All Posts
            </Link>
          </Flex>
          <SimpleGrid columns={[1, 2, 3]} spacing={20}>
            {tutorialsPost.map((post, index) => {
              return (
                <BlogCard
                  category={post.frontMatter.category}
                  description={post.frontMatter.description}
                  image={post.frontMatter.image}
                  link={post.frontMatter.slug}
                  title={post.frontMatter.title}
                  list={1}
                  key={index}
                />
              );
            })}
          </SimpleGrid>
        </Stack>
      </Box>
      <Author />
      {/* section for tutorials */}

      <Box py={20}>
        <Stack w={"100%"} px={10} py={5} spacing={8}>
          <Flex justifyContent={"space-between"} pr={[0, 20]}>
            <Text>Latest Lessions</Text>
            <Link href="/blog" passHref>
              All Posts
            </Link>
          </Flex>
          <SimpleGrid columns={[1, 2, 3]} spacing={20} pt={10}>
            {lessionsPost.map((post, index) => {
              return (
                <LearnCard
                  category={post.frontMatter.category}
                  description={post.frontMatter.description}
                  image={post.frontMatter.image}
                  link={post.frontMatter.slug}
                  title={post.frontMatter.title}
                  list={1}
                  key={index}
                />
              );
            })}
          </SimpleGrid>
        </Stack>
      </Box>
      <Box
        bgImage="url(/audio-bar.svg)"
        bgPos="bottom center"
        bgSize="120px"
        bgRepeat="repeat no-repeat"
      >
        <Container
          pt="7.5rem"
          pb="10rem"
          maxW="50rem"
          mx="auto"
          textAlign="center"
        >
          <Flex direction="column" align="center" maxW="600px" mx="auto">
            <Circle size="80px" bg="blackAlpha.200" color="blue.400">
              <FaGithub size="40px" />
            </Circle>
            <chakra.h2
              fontSize={42}
              fontWeight="bold"
              textStyle="heading"
              mt="6"
              mb="6"
            >
              {"Want to contribute to this project"}
            </chakra.h2>
            <Text mb="40px" fontSize="lg" opacity={0.7}>
              {
                "Want to contribute to this project ? then just clone the poject and feal free to make a pull request."
              }
            </Text>
          </Flex>
          <Button
            h="4rem"
            px="40px"
            fontSize="1.2rem"
            as="a"
            href="https://github.com/aianshume/codenanshu"
            size="lg"
            colorScheme="blue"
            rightIcon={<FaArrowRight fontSize="0.8em" />}
          >
            {"Contribute now"}
          </Button>
        </Container>
      </Box>
      <DiscordStrip />
    </>
  );
}

export async function getStaticProps() {
  const blogPost = await getAllFilesFrontMatter("blog");
  const TutorialsPost = await getAllFilesFrontMatter("tutorials");
  const lessionsPost = await getAllFilesOfLearn();

  return {
    props: {
      blogPosts: blogPost.posts.slice(0, 4),
      tutorialsPost: TutorialsPost.posts.slice(0, 3),
      lessionsPost: lessionsPost.posts.slice(0, 3),
    },
  };
}
