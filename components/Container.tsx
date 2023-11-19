import { Flex, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Widget } from "./Widget";

export default function Container({ children }) {
  return (
    <>
      <Navbar />
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={4}
        position="relative"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          {children}
        </Flex>
        <Widget />
        <Footer />
      </Stack>
    </>
  );
}
