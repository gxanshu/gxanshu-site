import {
  Center,
  Heading,
  VStack,
  Text,
  Flex,
  Divider,
  Box,
} from "@chakra-ui/react";
import MDXComponents from "components/MDXComponent";
import { MDXRemote } from "next-mdx-remote";
import Seo from "components/Seo";
import Image from "next/image";
import Comment from "components/Comment";

export default function BlogLayout({ child, frontMatter }) {
  return (
    <>
      <Seo
        templateTitle={frontMatter.title}
        description={frontMatter.description}
      />
      <Flex
        pt={[28, 36]}
        pb={18}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Box px={[8, 16]}>
          <Heading
            as="h1"
            textAlign={["center", "left"]}
            fontSize={28}
            maxW={460}
          >
            {frontMatter.title}
          </Heading>
          <Text maxW={360} textAlign={["center", "left"]} my={5}>
            {frontMatter.description}
          </Text>
        </Box>
        <Box px={[0, 16]}>
          <Image
            src={frontMatter.image}
            width={540}
            height={320}
            alt={frontMatter.title}
          />
        </Box>
      </Flex>
      <Divider mt={10} />
      <Center>
        <VStack
          minW={[370, 500, 700]}
          maxW={700}
          spacing={5}
          px={6}
          py={16}
          alignItems="flex-start"
        >
          <MDXRemote {...child} components={MDXComponents} />
          <Comment />
        </VStack>
      </Center>
    </>
  );
}
