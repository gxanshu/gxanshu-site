import {
  Flex,
  HStack,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  Image,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { HiMoon, HiSun, HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import dynamic from "next/dynamic";
const Search = dynamic(() => import("components/search"));

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <MobileNav color={colorMode} changeColor={toggleColorMode} />
      <DestktopNav color={colorMode} changeColor={toggleColorMode} />
    </>
  );
}

const MobileNav = (props) => {
  return (
    <Flex
      as="nav"
      p={3}
      justifyContent="space-between"
      display={["flex", "none"]}
      position="fixed"
      width="100%"
      bg={useColorModeValue("#F7FAFC95", "#17192395")}
      sx={{ backdropFilter: "blur(5px)" }}
      zIndex={"overlay"}
    >
      <Flex>
        <Link href="/" passHref>
          <Image src="/favicon-old.ico" h={8} w={8} alt="codenanshu logo" />
        </Link>
      </Flex>
      <HStack ml={4}>
        <IconButton
          icon={props.color === "light" ? <HiMoon /> : <HiSun />}
          onClick={props.changeColor}
          size="sm"
        />
        <Search />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HiMenuAlt3 />}
            size="sm"
          />
          <MenuList>
            <MenuItem>
              <Link href="/blog" passHref>
                Blog
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/tutorials" passHref>
                Tutorials
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/notes" passHref>
                Notes
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/learn" passHref>
                Learn
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

const DestktopNav = (props) => {
  return (
    <Flex
      as="nav"
      p={5}
      px={10}
      justifyContent="space-between"
      display={["none", "flex"]}
      position="fixed"
      width="100%"
      bg={useColorModeValue("#F7FAFC95", "#17192395")}
      sx={{ backdropFilter: "blur(5px)" }}
      zIndex={"overlay"}
    >
      <Flex>
        <Link href="/" passHref>
          <Image
            _hover={{ cursor: "pointer" }}
            src="/favicon-old.ico"
            width={8}
            height={8}
            alt="codenanshu logo"
          />
        </Link>
        <HStack ml={6} spacing={4}>
          <Text _hover={{ color: "red.500", cursor: "pointer" }}>
            <Link href="/blog" passHref>
              <a>Blog</a>
            </Link>
          </Text>
          <Text _hover={{ color: "green.500", cursor: "pointer" }}>
            <Link href="/about" passHref>
              <a>About</a>
            </Link>
          </Text>
          <Menu isLazy>
            <MenuButton>Lessions</MenuButton>
            <MenuList>
              <MenuItem>
                <Link href="/tutorials" passHref>
                  Tutorials
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/learn" passHref>
                  Learn
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Text _hover={{ color: "purple.200", cursor: "pointer" }}>
            <Link href="/notes" passHref>
              Notes
            </Link>
          </Text>
        </HStack>
      </Flex>
      <HStack ml={4}>
        <IconButton
          icon={props.color === "light" ? <HiMoon /> : <HiSun />}
          onClick={props.changeColor}
          size="sm"
        />
        <Search />
      </HStack>
    </Flex>
  );
};
