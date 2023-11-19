import { Box, Stack, Text, ButtonGroup, IconButton, Link, Divider, } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    m=" 0 auto"
    width={"100%"}
    maxW="7xl"
    px={{ base: "4", md: "8" }}
  >
    <Stack
      direction="row"
      spacing="6"
      align="center"
      alignSelf={"center"}
      justify="center"
      pb={5}
      textAlign="center"
    >
      <ButtonGroup variant="default">
        <IconButton
          as="a"
          href="mailto:navidnali@gmail.com"
          aria-label="Email: navidnali@gmail.com"
          icon={<FaEnvelope fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/navidali04/"
          aria-label="Linkedin"
          icon={<FaLinkedin fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://github.com/navidali"
          aria-label="Github"
          icon={<FaGithub fontSize="20px" />}
        />
      </ButtonGroup>
    </Stack>
    <Divider pt={2} />
    <Stack direction="row" align="center" justify="space-between" pt={5}>
      <Text fontSize="11px" fontWeight={"medium"}>
        &copy; Navid Ali {new Date().getFullYear()}
      </Text>
      <IconButton
        as={Link}
        rounded="md"
        background={"none"}
        _hover={{ background: "none" }}
        aria-label="Github Repo"
        rel="noopener"
        href="https://github.com/navidali/portfolio"
        isExternal
        icon={<FaGithub fontSize="18px" />}
      />
    </Stack>
  </Box>
);

export default Footer;
