import {
  VStack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Link as RLink,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/blogcard.module.css";

export function BlogCard({ image, title, description, category, link }) {
  return (
    <VStack
      p={2}
      bgColor={useColorModeValue("gray.100", "gray.900")}
      spacing={6}
      alignItems="flex-start"
      borderRadius={10}
      sx={{
        _hover: {
          outline: "solid 2px",
          outlineOffset: "5px",
          outlineColor: useColorModeValue("gray.300", "white"),
          transition: "all 0.6s",
        },
      }}
    >
      <Box w={"100%"}>
        <Link href={`/${category}/${link}`} passHref>
          <Image
            roundedTop="lg"
            width={640}
            height={360}
            fit="cover"
            src={image}
            alt="Article"
          />
        </Link>
      </Box>
      <Box p={3} pt={2}>
        <Link href={`/${category}/${link}`} passHref>
          <RLink>
            <Heading className={styles.pointer} as="h5" fontSize={20}>
              {title}
            </Heading>
          </RLink>
        </Link>
        <Text color={useColorModeValue("gray.600", "gray.300")} mt={3}>
          <RLink>{description}</RLink>
        </Text>
      </Box>
    </VStack>
  );
}

// import React from "react";
// import {
//   chakra,
//   Box,
//   Flex,
//   useColorModeValue,
//   Text,
// } from "@chakra-ui/react";
// import Image from 'next/image'
// import NextLink from 'next/link'

// const Ma = ({title, image, description, link, category}) => {
//   return (
//     <Flex
//       w="full"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Box
//         mx="auto"
//         rounded="lg"
//         shadow="md"
//         bg={useColorModeValue("gray.50", "gray.900")}
//         maxW="xl"
//       >

//         <Box p={6}>
//           <Box>
//             <chakra.span
//               fontSize="xs"
//               textTransform="uppercase"
//               color={useColorModeValue("brand.600", "brand.400")}
//             >
//               {category}
//             </chakra.span>
//            <NextLink href={link} passHref>
//            <Text
//               display="block"
//               color={useColorModeValue("gray.800", "white")}
//               fontWeight="bold"
//               fontSize="2xl"
//               cursor={'pointer'}
//               mt={2}
//             >
//               {title}
//             </Text>
//            </NextLink>
//             <chakra.p
//               mt={2}
//               fontSize="sm"
//               color={useColorModeValue("gray.600", "gray.400")}
//             >
//               {description}
//             </chakra.p>
//           </Box>
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// export default Ma;
