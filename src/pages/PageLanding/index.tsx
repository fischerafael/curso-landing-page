import React from "react";
import * as Chakra from "@chakra-ui/react";

export const PageLanding = () => {
  return (
    <Chakra.VStack w="full" minH="100vh" bg="gray.800" color="white">
      <Chakra.HStack
        w="full"
        h="10vh"
        borderBottom="solid 0.5px"
        borderColor="gray.700"
        justify="center"
      >
        <Chakra.HStack
          w="full"
          maxW="1024px"
          px="4"
          h="full"
          justify="space-between"
        >
          <Chakra.Text fontSize="lg">
            Curso
            <Chakra.Text as="span" fontWeight="bold">
              Landing
            </Chakra.Text>
            Page
          </Chakra.Text>

          <Chakra.Button
            colorScheme="cyan"
            variant="outline"
            borderRadius="full"
            _hover={{ color: "white", bg: "cyan.500", borderColor: "cyan.500" }}
          >
            Inscreva-se
          </Chakra.Button>
        </Chakra.HStack>
      </Chakra.HStack>
    </Chakra.VStack>
  );
};
