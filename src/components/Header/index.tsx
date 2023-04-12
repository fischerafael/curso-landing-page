import React from "react";
import * as Chakra from "@chakra-ui/react";
import { handleNavigateTo } from "@/src/utils/handleNavigateTo";

export const Header = () => {
  return (
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
          onClick={() => handleNavigateTo("#pricing")}
        >
          Inscreva-se
        </Chakra.Button>
      </Chakra.HStack>
    </Chakra.HStack>
  );
};
