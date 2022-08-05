import { useColorModeValue } from "@chakra-ui/react";
import { Giscus } from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      key={"Comments"}
      repo="aianshume/codenanshu"
      repoId="R_kgDOHBgQ6Q"
      category={`Q&A`}
      categoryId="DIC_kwDOHBgQ6c4COKjd"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="en"
      loading="lazy"
      theme={useColorModeValue("light", "dark_high_contrast")}
    />
  );
}
