import { CardsSectionProps } from "@/src/components/CardsSection";
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

export const BENEFITS_SECTION: CardsSectionProps = {
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

export const REVIEWS_SECTION: CardsSectionProps = {
  items: [
    {
      id: "1",
      title: "Ben",
      description: [
        "Super is one of the fastest ways to create a website. Being built on top of Notion reduces friction and allows you to update the content on your website effortlessly.",
      ],
      image: <Chakra.Avatar bg="cyan.700" size="md" color="white" name="Ben" />,
    },
    {
      id: "2",
      title: "Ben",
      description: [
        "Super is one of the fastest ways to create a website. Being built on top of Notion reduces friction and allows you to update the content on your website effortlessly.",
      ],
      image: <Chakra.Avatar bg="cyan.700" size="md" color="white" name="Ben" />,
    },
    {
      id: "3",
      title: "Ben",
      description: [
        "Super is one of the fastest ways to create a website. Being built on top of Notion reduces friction and allows you to update the content on your website effortlessly.",
      ],
      image: <Chakra.Avatar bg="cyan.700" size="md" color="white" name="Ben" />,
    },
  ],
  title: "Reviews",
  subTitle: "O que as pessoas estão falando sobre o curso",
};

export const PRICING_SECTION: CardsSectionProps = {
  items: [
    {
      id: "1",
      title: "Plano Inicial",
      description: ["Curso Completo"],
      image: <Chakra.Avatar bg="cyan.700" size="md" color="white" name="Ben" />,
      price: "RS 10.00",
      ctaHref: "www.google.com",
      ctaLabel: "Comprar",
      subTitle: "Pague apenas uma vez",
    },
    {
      id: "2",
      title: "Plano Médio",
      description: ["Curso Completo", "Certificado"],
      image: <Chakra.Avatar bg="cyan.700" size="md" color="white" name="Ben" />,
      price: "RS 10.00",
      ctaHref: "www.google.com",
      ctaLabel: "Comprar",
      subTitle: "Pague apenas uma vez",
      isPopular: true,
    },
    {
      id: "3",
      title: "Plano Avançado",
      description: ["Curso Completo", "Certificado", "Acesso Vitalício"],
      image: <Chakra.Avatar bg="cyan.700" size="md" color="white" name="Ben" />,
      price: "RS 10.00",
      ctaHref: "www.google.com",
      ctaLabel: "Comprar",
      subTitle: "Pague apenas uma vez",
    },
  ],
  title: "Preços",
  subTitle: "Descubra o plano que melhor se adequa a sua necessidade.",
};
