import React from "react";
import {
  IconButton,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiX, FiMenu } from "react-icons/fi";
import { MDXComponents } from "components";
import { MDXRemote } from "next-mdx-remote";
import Seo from "components/Seo";
import styles from "../../../styles/blogcard.module.css";
import NextLink from "next/link";
import { useRouter } from "next/router";

export function CourseLayout({ child, frontMatter, chapters }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { query } = useRouter();

  const findCurrentPageIndex = (obj) => {
    return obj.slug == query.slug;
  };

  return (
    <>
      <Seo
        templateTitle={frontMatter.title}
        description={frontMatter.description}
      />
      <Box minH="100vh" sx={{ contain: "content" }}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          chapters={chapters}
          query={query}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent
              onClose={onClose}
              chapters={chapters}
              query={query}
              onCLick={onClose}
            />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} py={20} px={[6, 20]}>
          <MDXRemote {...child} components={MDXComponents} lazy />
          <Flex justifyContent={"space-between"} py={10}>
            <NextLink
              href={
                chapters[chapters.find(findCurrentPageIndex)?.position - 2]
                  ?.main === true
                  ? `../${query.topic}`
                  : `../${query.topic}/${
                      chapters[
                        chapters.find(findCurrentPageIndex)?.position - 2
                      ]?.slug
                    }`
              }
              passHref
            >
              <Box
                bgColor={useColorModeValue("gray.100", "gray.900")}
                sx={{ cursor: "pointer" }}
                w="100%"
                mr={3}
                p={4}
              >
                👈🏻{" "}
                {
                  chapters[chapters.find(findCurrentPageIndex)?.position - 2]
                    .title
                }
              </Box>
            </NextLink>
            <NextLink
              href={`../${query.topic}/${
                chapters[chapters.find(findCurrentPageIndex)?.position]?.slug
              }`}
              passHref
            >
              <Box
                bgColor={useColorModeValue("gray.100", "gray.900")}
                sx={{ cursor: "pointer" }}
                w="100%"
                ml={3}
                p={4}
                textAlign="right"
              >
                {chapters[chapters.find(findCurrentPageIndex)?.position]?.title}{" "}
                👉🏻
              </Box>
            </NextLink>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

const SidebarContent = ({ onCLick, query, chapters, onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pt={20}
      overflow="scroll"
      className={styles.scroll}
      pos="fixed"
      h="100%"
      {...rest}
    >
      <Text m="4" textAlign={"center"}>
        Chapters
      </Text>
      <IconButton
        pos="fixed"
        sx={{ right: 5, top: 90 }}
        display={["flex", "none"]}
        variant="outline"
        onClick={onCLick}
        aria-label="open menu"
        icon={<FiX />}
      />
      {chapters.map((link) => (
        <NavItem
          key={link.position}
          slug={link.slug}
          main={link.main}
          pos={link.position}
          query={query}
        >
          {link.title}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ pos, query, main, slug, children, ...rest }) => {
  return (
    <NextLink
      href={main === true ? `../${query.topic}` : `../${query.topic}/${slug}`}
      passHref
    >
      <Link style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          <Box
            px={2}
            mr={2}
            bgColor="blue.600"
            rounded="full"
            _groupHover={{
              color: "white",
            }}
            color="white"
          >
            {pos}
          </Box>
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <>
      <Box
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        bg={useColorModeValue("white", "gray.900")}
        {...rest}
        height={16}
        borderWidth="1px"
      ></Box>
      <IconButton
        pos="fixed"
        sx={{ right: 5, top: 90 }}
        display={["flex", "none"]}
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </>
  );
};
