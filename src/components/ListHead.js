import { VStack, Heading, Text } from "@chakra-ui/react";

export default function ListHead({ title, description }) {
  return (
    <VStack spacing={5}>
      <Heading>{title}</Heading>
      <Text
        maxW={[300, 350, 400, 450]}
        textAlign="center"
        wordBreak={"break-word"}
      >
        {description}
      </Text>
    </VStack>
  );
}
