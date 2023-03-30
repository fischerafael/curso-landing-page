import * as Chakra from "@chakra-ui/react";
import { ISection } from "@/src/entities/ISection";
import { IItem } from "@/src/entities/IItem";

export interface BenefitsSectionProps extends ISection {}

export const BenefitsSection = (props: BenefitsSectionProps) => {
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
          {props.items.map((item) => (
            <CardBenefit
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

export interface CardBenefitProps extends IItem {}

const CardBenefit = (props: CardBenefitProps) => {
  const { title, description, image } = props;
  const [firstItem] = description!;

  return (
    <Chakra.VStack
      w="full"
      p="8"
      align="flex-start"
      bg="gray.900"
      borderRadius="16"
      spacing="4"
      border="solid 1px"
      borderColor="gray.900"
      transition="0.5s"
      _hover={{ border: "solid 1px", borderColor: "cyan.500" }}
    >
      {image}
      <Chakra.Text fontSize="2xl" fontWeight="bold">
        {title}
      </Chakra.Text>
      <Chakra.Text color="gray.400" fontSize="sm">
        {firstItem}
      </Chakra.Text>
    </Chakra.VStack>
  );
};
