import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Ma = ({ image, title, description, link }) => {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        w="md"
        mx="auto"
        py={4}
        px={8}
        bg={useColorModeValue("gray.100", "gray.900")}
        rounded="lg"
        sx={{
          _hover: {
            outline: "solid 2px",
            outlineOffset: "5px",
            outlineColor: useColorModeValue("gray.300", "white"),
            transition: "all 0.6s",
          },
        }}
      >
        <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
          <Image
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor={useColorModeValue("brand.500", "brand.400")}
            alt="Testimonial avatar"
            src={image}
            zIndex={10}
          />
        </Flex>

        <chakra.h2
          color={useColorModeValue("gray.800", "white")}
          fontSize={{ base: "2xl", md: "3xl" }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          {title}
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
          {description}
        </chakra.p>

        <Flex justifyContent="end" mt={4}>
          <NextLink href={`learn/${link}`} passHref>
            <Link
              fontSize="xl"
              color={useColorModeValue("brand.500", "brand.300")}
            >
              Start
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Ma;
