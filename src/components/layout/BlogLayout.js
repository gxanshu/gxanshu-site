import {
  Center,
  Heading,
  VStack,
  Text,
  Box,
  Flex,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import Img from "next/image";
import { MDXComponents } from "components";
import { MDXRemote } from "next-mdx-remote";
import styles from "../../../styles/blogcard.module.css";
import Seo from "components/Seo";
import dynamic from "next/dynamic";
const Comment = dynamic(() => import("components/Comment"));

export function BlogLayout({ child, frontMatter }) {
  return (
    <>
      <Seo
        templateTitle={frontMatter.title}
        description={frontMatter.description}
      />
      <Center>
        <VStack
          minW={[370, 500, 700]}
          maxW={700}
          py={[100, 150]}
          spacing={5}
          px={6}
          alignItems="flex-start"
        >
          <Heading as="h1" fontSize={["24px", "26px", "28px", "30px"]}>
            {frontMatter.title}
          </Heading>
          <Flex align="center">
            <Avatar size="xs" name="Anshu i" mr={2} />
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.500", "gray.300")}
            >
              {"Ai Anshu | "}
              {new Date(frontMatter.date).toDateString() + " | "}
              {"Read Time "}
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
          <Box>
            <Img
              width={1280}
              height={720}
              src={frontMatter.image}
              alt={frontMatter.title}
              className={styles.radius}
            />
          </Box>
          <MDXRemote {...child} components={MDXComponents} />
          <Comment />
        </VStack>
      </Center>
    </>
  );
}
