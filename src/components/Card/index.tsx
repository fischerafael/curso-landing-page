import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { IItem } from "@/src/entities/IItem";

export type CardType = "benefit" | "review" | "pricing";

export interface CardProps extends IItem {
  type?: CardType;
}

export const CardContainer = (props: CardProps) => {
  const cardMap = {
    benefit: <BenefitCard {...props} />,
    review: <ReviewCard {...props} />,
    pricing: <PricingCard {...props} />,
  };

  return cardMap[props.type!];
};

const BenefitCard = ({ title, description, image }: CardProps) => {
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

const ReviewCard = ({ title, description, image }: CardProps) => {
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

const PricingCard = ({
  title,
  description,
  price,
  ctaHref,
  ctaLabel,
  isPopular,
  subTitle,
}: CardProps) => {
  return (
    <Chakra.VStack
      w="full"
      p="8"
      align="flex-start"
      bg="gray.900"
      borderRadius="16"
      spacing="4"
      border="solid 1px"
      borderColor={isPopular ? "cyan.700" : "gray.900"}
    >
      <Chakra.HStack>
        <Chakra.Text color="gray.400" fontSize="xs">
          {title}
        </Chakra.Text>
        {!!isPopular && (
          <Chakra.Tag color="gray.50" bg="cyan.700" size="sm">
            Popular
          </Chakra.Tag>
        )}
      </Chakra.HStack>

      <Chakra.VStack spacing="0" align="flex-start">
        <Chakra.Text fontSize="3xl" fontWeight="bold">
          {price}
        </Chakra.Text>
        <Chakra.Text color="gray.400" fontSize="xs">
          {subTitle}
        </Chakra.Text>
      </Chakra.VStack>

      <Chakra.VStack
        w="full"
        justify="space-between"
        h="full"
        pt="2"
        spacing="8"
      >
        <Chakra.VStack w="full">
          {description?.map((desc, index, array) => (
            <>
              <Chakra.HStack w="full" h="0.5px" bg="gray.800" />
              <Chakra.HStack w="full" justify="flex-start">
                <Chakra.Icon as={Icon.HiOutlineCheck} />
                <Chakra.Text
                  color="gray.400"
                  fontSize="xs"
                  key={index}
                  w="full"
                >
                  {desc}
                </Chakra.Text>
              </Chakra.HStack>
              {index === array.length - 1 && (
                <Chakra.HStack w="full" h="0.5px" bg="gray.800" />
              )}
            </>
          ))}
        </Chakra.VStack>

        <Chakra.VStack w="full" align="flex-end">
          <Chakra.Link href={ctaHref} target="_blank">
            <Chakra.Button
              colorScheme="cyan"
              size="sm"
              borderRadius="full"
              color="white"
            >
              {ctaLabel}
            </Chakra.Button>
          </Chakra.Link>
        </Chakra.VStack>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
