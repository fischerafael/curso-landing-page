import * as Chakra from "@chakra-ui/react";
import { ISection } from "@/src/entities/ISection";
import { CardContainer, CardType } from "../Card";

export interface CardsSectionProps extends ISection {
  type?: CardType;
}

export const CardsSection = (props: CardsSectionProps) => {
  return (
    <Chakra.VStack w="full" spacing="0" py="16">
      <Chakra.VStack
        w="full"
        h="full"
        spacing="8"
        maxW="1024px"
        px="4"
        align="flex-start"
      >
        <Chakra.Text fontSize="4xl" fontWeight="bold" lineHeight="1.25">
          {props.title}
        </Chakra.Text>
        <Chakra.SimpleGrid w="full" h="full" columns={3} gap="8">
          {props.type === "benefit" &&
            props.items.map((item) => (
              <CardContainer
                type="benefit"
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}

          {props.type === "review" &&
            props.items.map((item) => (
              <CardContainer
                type="review"
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
        </Chakra.SimpleGrid>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
