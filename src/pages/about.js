import {
  Flex,
  Box,
  Text,
  SimpleGrid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Seo from "components/Seo";

export default function About() {
  return (
    <Layout>
      <Seo
        templateTitle="About"
        description="Hello! I'm Anshu. I am a 17-year-old boy who is very intrested in
        computer science and entrepreneurship. I started learning web
        development in December 2019, which is the start of the pandemic"
      />
      <Flex p={[6, 16]} justifyContent="space-between" flexWrap={"wrap"}>
        <Box maxW={"3xl"}>
          <Text py={4}>Ai Anshu</Text>
          <Text pr={4} lineHeight={"30px"}>
            Hello! I am Anshu. I am a 17-year-old boy who is very intrested in
            computer science and entrepreneurship. I started learning web
            development in December 2019, which is the start of the pandemic. I
            have nothing much to do so I decided to learn web development from a
            youtube course, then started watching a bunch of youtube videos to
            explore more about web development, mobile app development and
            desktop GUI/CLI application development. There are a lot of things
            and technologies to learn in frontend development and I am motivated
            to learn as much as possible. still to exited to learn more thing in
            the computer science and the IT industry. I enjoy learning something
            new and getting feedback to make myself better and improve. In this
            website I will be writing some blogs and showcase my projects. I
            believe that writing what I have learned is the best way to remember
            things, and I can share my knowledge along the way. So do contact me
            and I will be very happy to help!
          </Text>
          <SimpleGrid columns={[2, 3, 4]} spacing={10} py={10}>
            <UnorderedList>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>ReactJS</ListItem>
              <ListItem>React Native</ListItem>
              <ListItem>NextJS</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Gatsby</ListItem>
              <ListItem>C/C++</ListItem>
              <ListItem>Tailwind CSS</ListItem>
              <ListItem>GraphQL</ListItem>
              <ListItem>ExpressJS</ListItem>
              <ListItem>NodejS</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Firebase</ListItem>
              <ListItem>Expo</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>Flask</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>SHscript</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Rust</ListItem>
              <ListItem>Hugo</ListItem>
              <ListItem>ElectronJS</ListItem>
              <ListItem>SASS</ListItem>
              <ListItem>Chakra UI</ListItem>
              <ListItem>Serverless</ListItem>
            </UnorderedList>
          </SimpleGrid>
        </Box>
        <Box>
          <Image
            src="/aianshume.jpeg"
            height={720}
            width={360}
            alt="codenanshu author image"
          />
        </Box>
      </Flex>
    </Layout>
  );
}
