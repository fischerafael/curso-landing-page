import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { IItem } from "@/src/entities/IItem";
import { useState } from "react";

interface AccodionProps extends IItem {
  isLastItem?: boolean;
}

export const Accordion = (props: AccodionProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const borderBottomStyle = props.isLastItem && !isOpen ? "solid 1px" : "";

  return (
    <Chakra.VStack w="full" spacing="0">
      {/* parte visível */}
      <Chakra.HStack
        w="full"
        justify="space-between"
        py="4"
        borderTop="solid 1px"
        bg={isOpen ? "gray.900" : "gray.800"}
        borderBottom={borderBottomStyle}
        borderColor="gray.700"
        cursor="pointer"
        _hover={{ bg: "gray.900" }}
        transition="0.5s"
        onClick={toggleOpen}
      >
        <Chakra.Text fontSize="xl" fontWeight="bold">
          {props.title}
        </Chakra.Text>
        <Chakra.Icon
          color="cyan.500"
          as={isOpen ? Icon.HiOutlineChevronUp : Icon.HiOutlineChevronDown}
        />
      </Chakra.HStack>

      {/* parte invisível */}
      {isOpen && (
        <Chakra.HStack
          w="full"
          borderBottom="solid 1px"
          borderColor="gray.700"
          bg="gray.900"
        >
          <Chakra.Text color="gray.400" fontSize="sm" pb="8" pt="2">
            {props.description}
          </Chakra.Text>
        </Chakra.HStack>
      )}
    </Chakra.VStack>
  );
};
