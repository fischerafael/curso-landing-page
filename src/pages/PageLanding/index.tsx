import React from "react";
import * as Chakra from "@chakra-ui/react";

import { HeroSection } from "@/src/components/HeroSection";
import { BenefitsSection } from "@/src/components/BenefitsSection";
import { FeaturesSection } from "@/src/components/FeaturesSection";
import { BENEFITS_SECTION, FEATURES_SECTION } from "../data";

export const PageLanding = () => {
  return (
    <Chakra.VStack
      w="full"
      minH="100vh"
      bg="gray.800"
      color="white"
      spacing="0"
    >
      {/* header */}

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

      <HeroSection />

      <BenefitsSection
        items={BENEFITS_SECTION.items}
        title={BENEFITS_SECTION.title}
      />

      <FeaturesSection
        items={FEATURES_SECTION.items}
        title={FEATURES_SECTION.title}
        subTitle={FEATURES_SECTION.subTitle}
      />
    </Chakra.VStack>
  );
};
