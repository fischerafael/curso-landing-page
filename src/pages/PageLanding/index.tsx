import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { HeroSection } from "@/src/components/HeroSection";
import {
  BenefitsSection,
  BenefitsSectionProps,
} from "@/src/components/BenefitsSection";

const BENEFITS_SECTION: BenefitsSectionProps = {
  items: [
    {
      id: "1",
      title: "Aprenda React",
      description: [
        "Aprenda uma das tecnologias mais populares do mercado e consiga as melhores oportunidades de trabalho.",
      ],
      image: (
        <Chakra.Icon fontSize="5xl" color="cyan.500" as={Icon.HiOutlineCode} />
      ),
    },
    {
      id: "2",
      title: "Crie Aplicações",
      description: [
        "Desenvolva aplicações web modernas, escaláveis e performáticas, usando as melhores práticas do mercado.",
      ],
      image: (
        <Chakra.Icon
          fontSize="5xl"
          color="cyan.500"
          as={Icon.HiOutlineDeviceTablet}
        />
      ),
    },
    {
      id: "3",
      title: "Conquiste sua Vaga",
      description: [
        "Consiga sua tão desejada vaga de emprego naquela empresa que você tanto sonhou.",
      ],
      image: (
        <Chakra.Icon fontSize="5xl" color="cyan.500" as={Icon.HiOutlineCash} />
      ),
    },
  ],
  title: "Benefícios",
};

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
    </Chakra.VStack>
  );
};
