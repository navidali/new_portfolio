import Container from "../components/Container";
import { Heading, Box, Flex, Link, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Paragraph from "../components/Paragraph";
import ProjectCard from "../components/ProjectCard";
import { RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";

const url = "https://portfolio-navidali.vercel.app/";
const title = "Navid Ali";
const description =
  "Self-taught web developer, Javascript enthusiast, passionate about building things with code and with a great knowledge of techniques aimed at a great user experience.";

export default function Home() {
  const [showNotation, setShowNotation] = useState(true);

  useEffect(() => {
    const handleNotationDisplay = () => {
      if (window.innerWidth > 768) setShowNotation(true);
      else setShowNotation(false);
    };

    handleNotationDisplay();
  }, []);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: "/images/vintagepc.png",
              width: 800,
              height: 420,
              alt: title,
            },
          ],
        }}
      />
      <Container>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Flex justifyContent="space-around">
            <Flex flexDir="column" p=" 0 20px 0 0">
              <Heading as="h1" p="0 0 30px 0">
                Hi there, I&apos;m Navid 🍃
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.8}>
                I’m a{" "}
                <RoughNotation
                  animate={true}
                  animationDelay={1200}
                  animationDuration={1000}
                  type="underline"
                  show={true}
                  color="pink"
                  padding={0}
                >
                  Software Engineer
                </RoughNotation>{" "}
                with a Computer Science degree from the University of Florida, my specialty is {" "}

                <RoughNotation
                  animate={true}
                  animationDelay={3300}
                  type="box"
                  show={showNotation}
                  color="pink"
                  padding={0}
                >
                  full-stack web development
                </RoughNotation>
                . I’m proficient in languages such as C#, JavaScript, Java, Python, and C++.
                Extremely passionate about using these technologies to solve real-world problems.
                I invite you to take a look at my projects to get a sense of my work.
                If you’d like to connect, please use the links provided at the bottom.
                I’m always open to new collaborations and excited about what we could create together!
                Let’s make a difference!
              </Paragraph>
            </Flex>
          </Flex>
          <Box as="div" m="30px 0"></Box>
          <Box as="section" mt={10} mb={20}>
            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
              mb={10}
            >
              Featured Projects 👨‍💻
            </Heading>
            <SimpleGrid minChildWidth="300px" spacing="40px">
              <ProjectCard
                title="Portfolio"
                description="This is a fully responsive website, developed using Next.js, React, and ChakraUI, featuring dynamic load animations. It’s SEO-optimized and integrates projects directly from GitHub via its API."
                repoHref="https://github.com/navidali/portfolio"
                demoHref="https://portfolio-navidali.vercel.app/"
                languageColor="#2b7489"
                language="TypeScript"
                starCount={0}
                stargazersUrl={""}
              />
              <ProjectCard
                title="Commands Registry"
                description="This is a microservices system with two .NET MVC web APIs, using RabbitMQ and gRPC for inter-service communication. It includes an external API gateway with load balancing via Nginx. The application is containerized and deployed on a Kubernetes cluster with Docker."
                repoHref="https://github.com/navidali/Registry"
                languageColor="#178600"
                language="C#"
                starCount={0}
                stargazersUrl={""}
              />

              <ProjectCard
                title="Roots"
                description="A project that utilizes Mask R-CNN for instance segmentation of plant roots in images. It employs the power of deep learning to identify and segment individual plant roots and provides additional analysis on each segmented root. "
                repoHref="https://github.com/navidali/Roots"
                languageColor="#3572A5"
                language="Python"
                starCount={0}
                stargazersUrl={""}
              />

              <ProjectCard
                title="VoterPass"
                description="A desktop application designed to simplify and enhance the voting process by implementing a queue system. It reduces the tedious hours of standing in line by providing voters with a return ticket that indicates when they should return to the polling station. "
                repoHref="https://github.com/navidali/voterpass"
                languageColor="#f1e05a"
                language="JavaScript"
                starCount={0}
                stargazersUrl={""}
              />
            </SimpleGrid>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
