import { useColorModeValue } from "@chakra-ui/react";
import { Giscus } from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      key={"Comments"}
      repo="aianshume/codenanshu"
      repoId="MDEwOlJlcG9zaXRvcnkzODIzMjE5Mjc="
      category="Q&A"
      categoryId="DIC_kwDOFsnFB84B-WZk"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme={useColorModeValue("light", "dark_high_contrast")}
    />
  );
}
