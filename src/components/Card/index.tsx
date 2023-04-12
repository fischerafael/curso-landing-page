import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { IItem } from "@/src/entities/IItem";

export type CardType = "benefit" | "review";

export interface CardBenefitProps extends IItem {
  type?: CardType;
}

export const CardContainer = (props: CardBenefitProps) => {
  const cardMap = {
    benefit: <BenefitCard {...props} />,
    review: <ReviewCard {...props} />,
  };

  return cardMap[props.type!];
};

const BenefitCard = ({ title, description, image }: CardBenefitProps) => {
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

const ReviewCard = ({ title, description, image }: CardBenefitProps) => {
  const [firstItem] = description!;

  const starsArray = Array(5).fill(null);

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
      <Chakra.HStack w="full" spacing="4" align="center" h="full">
        {image}
        <Chakra.VStack
          align="flex-start"
          spacing="2"
          justify="space-between"
          w="full"
        >
          <Chakra.Text fontSize="2xl" fontWeight="bold">
            {title}
          </Chakra.Text>

          <Chakra.HStack spacing="1">
            {starsArray.map((_, index) => (
              <Chakra.Icon key={index} as={Icon.HiStar} />
            ))}
          </Chakra.HStack>
        </Chakra.VStack>
      </Chakra.HStack>

      <Chakra.Text color="gray.400" fontSize="sm">
        {firstItem}
      </Chakra.Text>
    </Chakra.VStack>
  );
};
