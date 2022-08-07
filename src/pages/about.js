import {
  Flex,
  Box,
  Text,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Link
} from "@chakra-ui/react";
import { Layout } from "components";
import Image from "next/image";
import Seo from "components/Seo";

export default function About() {
  return (
    <Layout>
      <Seo
        templateTitle="About"
        description="Hello! I'm Anshu. I am a 17-year-old boy who is very intrested in
        computer science and entrepreneurship. I started learning web
        development"
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
              <ListItem><Link href="https://www.open-std.org/jtc1/sc22/wg14/" isExternal>C/C++</Link></ListItem>
              <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" isExternal>JavaScript</Link></ListItem>
              <ListItem><Link href="https://html.spec.whatwg.org/" isExternal>HTML</Link></ListItem>
              <ListItem><Link href="https://www.w3.org/TR/CSS/#css" isExternal>CSS</Link></ListItem>
              <ListItem><Link href="https://reactjs.org/" isExternal>ReactJS</Link></ListItem>
              <ListItem><Link href="https://nextjs.org/" isExternal>NextJS</Link></ListItem>
              <ListItem><Link href="https://www.gatsbyjs.com/" isExternal>gatsbyjs</Link></ListItem>
              <ListItem><Link href="https://reactnative.dev/" isExternal>React Native</Link></ListItem>
              <ListItem><Link href="https://www.shellscript.sh/" isExternal>ShellScript</Link></ListItem>
              <ListItem><Link href="https://www.python.org/" isExternal>Python</Link></ListItem>
              <ListItem><Link href="https://www.qt.io/" isExternal>PyQT</Link></ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem><Link href="https://nodejs.org" isExternal>NodeJS</Link></ListItem>
              <ListItem><Link href="https://nestjs.com/" isExternal>NestJS</Link></ListItem>
              <ListItem><Link href="https://expressjs.com" isExternal>ExpressJS</Link></ListItem>
              <ListItem><Link href="https://mongodb.com" isExternal>MongoDB</Link></ListItem>
              <ListItem><Link href="https://firebase.google.com" isExternal>Firebase</Link></ListItem>
              <ListItem><Link href="https://typescriptlang.org" isExternal>TypeScript</Link></ListItem>
              <ListItem><Link href="https://git-scm.com" isExternal>Git</Link></ListItem>
              <ListItem><Link href="https://code.visualstudio.com/" isExternal>VS Code</Link></ListItem>
              <ListItem><Link href="https://www.markdownguide.org/" isExternal>Markdown</Link></ListItem>
              <ListItem><Link href="https://tailwindcss.com" isExternal>TailwindCSS</Link></ListItem>
              <ListItem><Link href="https://chackra-ui.com" isExternal>Chackra UI</Link></ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem><Link href="https://www.rust-lang.org/" isExternal>Rust</Link></ListItem>
              <ListItem><Link href="https://jamstack.org/" isExternal>JAMStack</Link></ListItem>
              <ListItem><Link href="https://graphql.org" isExternal>graphQL</Link></ListItem>
              <ListItem><Link href="https://expo.dev" isExternal>Expo</Link></ListItem>
              <ListItem><Link href="https://aws.amazon.com" isExternal>aws</Link></ListItem>
              <ListItem><Link href="https://gohugo.io" isExternal>Hugo</Link></ListItem>
              <ListItem><Link href="https://redux.js.org" isExternal>Redux</Link></ListItem>
              <ListItem><Link href="https://getbootstrap.com" isExternal>Bootstrap</Link></ListItem>
              <ListItem><Link href="https://electronjs.org/" isExternal>ElectronJS</Link></ListItem>
              <ListItem><Link href="https://figma.com" isExternal>Figma</Link></ListItem>
              <ListItem><Link href="https://kernel.org" isExternal>Linux</Link></ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem><Link href="https://sass-lang.com/" isExternal>SASS</Link></ListItem>
              <ListItem><Link href="https://netlify.com/" isExternal>Netlify</Link></ListItem>
              <ListItem><Link href="https://wordpress.org" isExternal>WordPress</Link></ListItem>
              <ListItem><Link href="https://php.net" isExternal>PHP</Link></ListItem>
              <ListItem><Link href="https://mysql.com" isExternal>MySQL</Link></ListItem>
              <ListItem><Link href="https://resources.github.com/devops/" isExternal>DevOops</Link></ListItem>
              <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API" isExternal>web animations</Link></ListItem>
              <ListItem><Link href="https://jestjs.io" isExternal>Jest</Link></ListItem>
              <ListItem><Link href="https://circleci.com/" isExternal>CI/CD</Link></ListItem>
              <ListItem><Link href="https://webpack.js.org" isExternal>Webpack</Link></ListItem>
              <ListItem><Link href="https://www.netlifycms.org/" isExternal>NetlifyCMS</Link></ListItem>
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
