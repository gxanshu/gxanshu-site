import { VStack, Heading, Text } from "@chakra-ui/react";

export function ListHead({ title, description }) {
  return (
    <VStack spacing={5}>
      <Heading as="h1">{title}</Heading>
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
