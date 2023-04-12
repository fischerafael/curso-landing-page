import React from "react";
import * as Chakra from "@chakra-ui/react";
import { ISection } from "@/src/entities/ISection";
import { Accordion } from "../Accordion";

export interface FeaturesSectionProps extends ISection {}

export const FeaturesSection = (props: FeaturesSectionProps) => {
  return (
    <Chakra.VStack w="full" spacing="0" py="16">
      <Chakra.SimpleGrid
        w="full"
        h="full"
        maxW="1024px"
        px="4"
        columns={[1, 1, 2]}
        gap="8"
      >
        <Chakra.VStack w="full" spacing="8" align="flex-start">
          <Chakra.Text fontSize="4xl" fontWeight="bold" lineHeight="1.25">
            {props.title}
          </Chakra.Text>

          <Chakra.Text fontSize="lg" maxW="500px">
            {props.subTitle}
          </Chakra.Text>
        </Chakra.VStack>

        <Chakra.VStack w="full" spacing="0">
          {props.items.map((feat, i, array) => {
            const isLastItem = i === array.length - 1;
            return (
              <Accordion key={feat.id} isLastItem={isLastItem} {...feat} />
            );
          })}
        </Chakra.VStack>
      </Chakra.SimpleGrid>
    </Chakra.VStack>
  );
};
