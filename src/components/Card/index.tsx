import * as Chakra from "@chakra-ui/react";
import { IItem } from "@/src/entities/IItem";

export type CardType = "benefit" | "review";

export interface CardBenefitProps extends IItem {
  type?: CardType;
}

export const CardContainer = ({
  title,
  description,
  image,
  type = "benefit",
}: CardBenefitProps) => {
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
