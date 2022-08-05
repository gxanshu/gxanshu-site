import {
  HStack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Link as RLink,
} from "@chakra-ui/react";
import Img from "next/image";
import Link from "next/link";
import styles from "../../../styles/blogcard.module.css";

export function NotesCard({ image, title, description, category, link }) {
  return (
    <HStack
      p={2}
      bgColor={useColorModeValue("gray.100", "gray.900")}
      spacing={6}
      alignItems="flex-start"
      borderRadius={10}
      w="100%"
      sx={{
        _hover: {
          outline: "solid 2px",
          outlineOffset: "5px",
          outlineColor: useColorModeValue("gray.300", "white"),
          transition: "all 0.6s",
        },
      }}
    >
      <Box p={3} pt={2}>
        <Link href={`/${category}/${link}`} passHref>
          <RLink>
            <Heading className={styles.pointer} as="h5" fontSize={20}>
              {title}
            </Heading>
          </RLink>
        </Link>
        <Text color={useColorModeValue("gray.600", "gray.300")} mt={3}>
          {description}
        </Text>
      </Box>
    </HStack>
  );
}
