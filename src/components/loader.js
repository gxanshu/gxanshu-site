import { Spinner, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Router from "next/router";

function Template() {
  return (
    <Center
      bgColor={"black"}
      h={9}
      w={9}
      borderRadius={5}
      position="fixed"
      right={[8, 10, 12, 14]}
      bottom={6}
      boxShadow={"dark-lg"}
    >
      <Spinner color="white" size={"sm"} />
    </Center>
  );
}
export default function Loader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const start = () => {
      console.log("start");
      setVisible(true);
    };
    const end = () => {
      console.log("findished");
      setVisible(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return <>{visible ? <Template /> : null}</>;
}
