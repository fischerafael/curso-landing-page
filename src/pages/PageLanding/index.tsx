import React from "react";
import * as Chakra from "@chakra-ui/react";
import { HeroSection } from "@/src/components/HeroSection";
import { FeaturesSection } from "@/src/components/FeaturesSection";
import {
  BENEFITS_SECTION,
  FEATURES_SECTION,
  PRICING_SECTION,
  REVIEWS_SECTION,
} from "../data";
import { CardsSection } from "@/src/components/CardsSection";
import { Header } from "@/src/components/Header";

export const PageLanding = () => {
  return (
    <Chakra.VStack
      w="full"
      minH="100vh"
      bg="gray.800"
      color="white"
      spacing="0"
    >
      <Header />

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

      <CardsSection
        anchor="pricing"
        type="pricing"
        title={PRICING_SECTION.title}
        subTitle={PRICING_SECTION.subTitle}
        items={PRICING_SECTION.items}
      />
    </Chakra.VStack>
  );
};
