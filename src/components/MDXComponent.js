import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Img from "next/image";
import styles from "../../styles/blogcard.module.css";

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: "100px",
      scrollSnapMargin: "100px", // Safari
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: "outline",
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

const JustLink = (props) => {
  const css = {
    background:
      "linear-gradient(to right, rgb(48, 252, 133), rgb(47, 233, 109)), linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));",
    backgroundSize: "100% 0.1em, 0 0.1em;",
    backgroundPosition: "100% 100%, 0 100%;",
    backgroundRepeat: "no-repeat;",
    transition: "background-size 400ms;",
    paddingBottom: "3px;",
    _focus: {
      backgroundSize: "0 0.1em, 100% 0.1em;",
    },
    _hover: {
      textDecoration: "none",
      backgroundSize: "0 0.1em, 100% 0.1em;",
    },
  };
  return (
    <Link
      sx={css}
      color={useColorModeValue("gray.800", "#c9e2f0")}
      {...props}
    />
  );
};

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <JustLink {...props} />
      </NextLink>
    );
  }

  return <JustLink isExternal {...props} />;
};

const Image = (props) => {
  return (
    <Img
      width={1280}
      height={660}
      src={props.src}
      alt={props.alt}
      className={styles.radius}
    />
  );
};

const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const CustomP = (props) => {
  return (
    <Text
      as="p"
      lineHeight={["31px", "34px"]}
      fontSize={["md", "lg"]}
      color={useColorModeValue("gray.800", "#c9e2f0")}
      {...props}
    />
  );
};

const CustomCode = (props) => {
  return (
    <Code
      colorScheme={useColorModeValue("pink", "black")}
      fontSize="0.84em"
      {...props}
    />
  );
};

const Yt = (props) => {
  return (
    <div
      className={styles.video_responsive}
      styles={{ paddingBottom: 10, paddingTop: 10 }}
    >
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube-nocookie.com/embed/${props.id}?modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&theme=light&color=white&autohide=0&disablekb=1`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={props.title}
      />
    </div>
  );
};

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => (
    <DocsHeading
      as="h2"
      size="md"
      pt={"22px"}
      mb={8}
      fontWeight="bold"
      {...props}
    />
  ),
  h3: (props) => (
    <DocsHeading
      as="h3"
      size="md"
      mt={"52"}
      mb={8}
      fontWeight="bold"
      {...props}
    />
  ),
  h4: (props) => (
    <DocsHeading
      as="h4"
      size="sm"
      mt={"52"}
      mb={8}
      fontWeight="bold"
      {...props}
    />
  ),
  h5: (props) => (
    <DocsHeading
      as="h5"
      size="sm"
      mt={"52"}
      mb={8}
      fontWeight="bold"
      {...props}
    />
  ),
  h6: (props) => (
    <DocsHeading
      as="h6"
      size="xs"
      mt={"52"}
      mb={8}
      fontWeight="bold"
      {...props}
    />
  ),
  inlineCode: (props) => <CustomCode {...props} />,
  code: (props) => <CustomCode {...props} />,
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props) => <CustomP {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} pt={1} {...props} />,
  blockquote: Quote,
  img: (props) => <Image src={props.src} alt={props.alt} />,
  Yt: (props) => <Yt id={props.id} title={props.title} />,
};

export { CustomLink, MDXComponents };
