import {
  VStack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  Center,
} from "@chakra-ui/react";
import Img from "next/image";
import Link from "next/link";
import styles from "../../../styles/blogcard.module.css";

export default function TutorialCard({
  image,
  title,
  description,
  category,
  link,
  list,
}) {
  return (
    <VStack
      p={3}
      bgColor={useColorModeValue("gray.100", "gray.900")}
      spacing={8}
      alignItems="flex-start"
      borderRadius={10}
    >
      <HStack
        mb={8}
        justifyContent="space-between"
        alignItems={"center"}
        w={"100%"}
      >
        <Heading className={styles.pointer} as="h5" fontSize={20}>
          collection
        </Heading>
        <Center bgColor={"brand.blue"} px={2} borderRadius="full" color="black">
          {list}
        </Center>
      </HStack>
      <Link href={`/${category}/${link}`} passHref>
        <Img
          className={styles.pointerT}
          width={420}
          height={240}
          src={image}
          alt={title}
        />
      </Link>
      <Link href={`/${category}/${link}`} passHref>
        <Heading as="h5" fontSize={20} className={styles.pointerT}>
          {title}
        </Heading>
      </Link>
      <Text color={useColorModeValue("gray.600", "gray.300")} mt={3}>
        {description}
      </Text>
    </VStack>
  );
}
