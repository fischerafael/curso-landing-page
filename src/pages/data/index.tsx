import { BenefitsSectionProps } from "@/src/components/BenefitsSection";
import { FeaturesSectionProps } from "@/src/components/FeaturesSection";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";

export const FEATURES_SECTION: FeaturesSectionProps = {
  title: "Módulos do Curso",
  subTitle: "Conheça os diferentes módulos do curso",
  items: [
    {
      id: "1",
      title: "Setup",
      description: [
        "Aprenda a configurar uma aplicação NextJs, com ChakraUI e Typescript.",
      ],
    },
    {
      id: "2",
      title: "Header",
      description: ["Aprenda a configurar a criar o Header da Landing Page."],
    },
    {
      id: "1",
      title: "Hero Section",
      description: [
        "Aprenda a configurar a criar a Hero Section Landing Page.",
      ],
    },
  ],
};

export const BENEFITS_SECTION: BenefitsSectionProps = {
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
