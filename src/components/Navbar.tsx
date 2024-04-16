import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text fontSize="2xl">Chakra UI</Text>
    </HStack>
  );
};

export default Navbar;
