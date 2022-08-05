import {
  Center,
  Heading,
  VStack,
  Text,
  Flex,
  Divider,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { MDXComponents } from "components";
import { MDXRemote } from "next-mdx-remote";
import Seo from "components/Seo";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../../styles/blogcard.module.css";
import { useRouter } from "next/router";

export function LearnLayout({ child, frontMatter, chapters }) {
  const { query } = useRouter();
  const bgcolor = useColorModeValue("gray.100", "gray.900");
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
          <MDXRemote {...child} components={MDXComponents} lazy/>
          <VStack w={"100%"}>
            {chapters.map((chapter) => {
              return (
                <Link
                  href={
                    chapter.main === true
                      ? chapter.slug
                      : `${query.topic}/${chapter.slug}`
                  }
                  key={chapter.position}
                  passHref={true}
                >
                  <Flex
                    w={"100%"}
                    className={Styles.pointerT}
                    key={chapter.position}
                    bgColor={bgcolor}
                  >
                    <Text bgColor="brand.blue" p={4} color="black">
                      {chapter.position}
                    </Text>
                    <Text p={4} ml={5}>
                      {chapter.title}
                    </Text>
                  </Flex>
                </Link>
              );
            })}
          </VStack>
        </VStack>
      </Center>
    </>
  );
}
