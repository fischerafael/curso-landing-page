import React from "react";
import * as Chakra from "@chakra-ui/react";
import { HeroSection } from "@/src/components/HeroSection";
import { FeaturesSection } from "@/src/components/FeaturesSection";
import { BENEFITS_SECTION, FEATURES_SECTION, REVIEWS_SECTION } from "../data";
import { CardsSection } from "@/src/components/CardsSection";

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

      <CardsSection
        type="benefit"
        items={BENEFITS_SECTION.items}
        title={BENEFITS_SECTION.title}
      />

      <FeaturesSection
        items={FEATURES_SECTION.items}
        title={FEATURES_SECTION.title}
        subTitle={FEATURES_SECTION.subTitle}
      />

      <CardsSection
        type="review"
        items={REVIEWS_SECTION.items}
        title={REVIEWS_SECTION.title}
        subTitle={REVIEWS_SECTION.subTitle}
      />
    </Chakra.VStack>
  );
};
