import React from "react";
import * as Chakra from "@chakra-ui/react";
import { handleNavigateTo } from "@/src/utils/handleNavigateTo";

export const HeroSection = () => {
  return (
    <Chakra.VStack w="full">
      <Chakra.Grid
        w="full"
        h="full"
        minH="70vh"
        maxW="1024px"
        px="4"
        templateColumns={["1fr", "1fr", "1fr 1fr", "3fr 2fr"]}
        gap="8"
      >
        <Chakra.VStack
          h="full"
          align={["center", "center", "flex-start"]}
          justify="center"
          spacing={["4", "4", "8"]}
        >
          <Chakra.Text
            bg="gray.900"
            p="2"
            px="4"
            fontSize="xs"
            color="cyan.500"
            borderRadius="full"
            textAlign="center"
          >
            #aprendaacriarlandingpages
          </Chakra.Text>
          <Chakra.Text
            fontSize={["4xl", "4xl", "5xl", "6xl"]}
            fontWeight="bold"
            lineHeight="1.25"
            textAlign={["center", "center", "start"]}
          >
            Aprenda a criar landing pages com React
          </Chakra.Text>
          <Chakra.Text
            fontSize="lg"
            maxW="500px"
            textAlign={["center", "center", "start"]}
          >
            Desenvolva suas habilidades de programação com React e NextJs e
            consiga sua primeira oportunidade no mercado
          </Chakra.Text>
          <Chakra.Button
            colorScheme="cyan"
            size="lg"
            borderRadius="full"
            color="white"
            onClick={() => handleNavigateTo("#pricing")}
          >
            Inscreva-se
          </Chakra.Button>
        </Chakra.VStack>

        <Chakra.VStack
          h="full"
          align={["center", "center", "flex-end"]}
          justify="center"
        >
          <Chakra.Image
            src="/images/hero-image.jpg"
            w="full"
            h="full"
            objectFit="cover"
            maxW="400px"
            maxH="400px"
            borderRadius="32"
            filter="grayscale(50%)"
          />
        </Chakra.VStack>
      </Chakra.Grid>
    </Chakra.VStack>
  );
};
