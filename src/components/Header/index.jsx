import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";

import ColorModeToggle from "../nightMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import logo from "../../assets/imagens/logoRefribek.png";
import Link from "next/link";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("#0E2A52", "#171923")}>
        <Flex
          as="nav"
          margin="0 auto"
          maxW="1280px"
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          bg={useColorModeValue("#0E2A52", "#171923")}
          color={useColorModeValue("gray.300", "white")}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            bg={useColorModeValue("#0E2A52", "#171923")}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <MdOutlineClose w={3} h={3} />
                ) : (
                  <GiHamburgerMenu w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            bg={useColorModeValue("#0E2A52", "#171923")}
            color={useColorModeValue("gray.300", "white")}
          >
            <Image
              src={logo}
              alt="logo"
              w={{ base: "auto", md: "200px" }}
              cursor={"pointer"}
            />

            <Flex
              display={"flex"}
              justifyContent={"flex-end"}
              padding={{ base: "0.5rem", md: "5" }}
              w={"100%"}
            >
              <UnorderedList
                display={{ base: "none", md: "flex" }}
                ml={10}
                alignItems={"center"}
                listStyleType={"none"}
                gap={12}
              >
                <Link href="/">
                  <ListItem
                    cursor={"pointer"}
                    fontWeight={"bold"}
                    _hover={{ color: "#12FCEE", cursor: "pointer" }}
                    marginLeft={"10px"}
                    transition={"all 0.2s ease-in-out"}
                    outline={"none"}
                  >
                    Inicio
                  </ListItem>
                </Link>
                <Link href="/servicos">
                  <ListItem
                    fontWeight={"bold"}
                    _hover={{ color: "#12FCEE", cursor: "pointer" }}
                    marginLeft={"10px"}
                    transition={"all 0.2s ease-in-out"}
                    outline={"none"}
                  >
                    Serviços
                  </ListItem>
                </Link>
                <Link href="/contatos">
                  <ListItem
                    fontWeight={"bold"}
                    _hover={{ color: "#12FCEE", cursor: "pointer" }}
                    marginLeft={"10px"}
                    transition={"all 0.2s ease-in-out"}
                    outline={"none"}
                  >
                    Contatos
                  </ListItem>
                </Link>
                <Link href="/sobre">
                  <ListItem
                    fontWeight={"bold"}
                    _hover={{ color: "#12FCEE", cursor: "pointer" }}
                    marginLeft={"10px"}
                    transition={"all 0.2s ease-in-out"}
                    outline={"none"}
                    mr={"10px"}
                  >
                    Sobre
                  </ListItem>
                </Link>
              </UnorderedList>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <ColorModeToggle />
          </Stack>
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{
            zIndex: 1,
          }}
        >
          <Flex bg={useColorModeValue("white", "gray.800")}>
            <UnorderedList
              padding={0}
              margin={0}
              top={61}
              bg={useColorModeValue("white", "gray.800")}
              p={5}
              display={{ md: "none" }}
              listStyleType={"none"}
            >
              <ListItem
                onClick={() => handleNavigation("/")}
                cursor={"pointer"}
                fontWeight={"bold"}
                _hover={{ color: "#12FCEE", cursor: "pointer" }}
                transition={"all 0.2s ease-in-out"}
                outline={"none"}
              >
                Inicio
              </ListItem>
              <ListItem
                onClick={() => handleNavigation("/servicos")}
                cursor={"pointer"}
                fontWeight={"bold"}
                _hover={{ color: "#12FCEE", cursor: "pointer" }}
                transition={"all 0.2s ease-in-out"}
                outline={"none"}
                mt={"10px"}
              >
                Serviços
              </ListItem>
              <ListItem
                onClick={() => handleNavigation("/contato")}
                cursor={"pointer"}
                fontWeight={"bold"}
                _hover={{ color: "#12FCEE", cursor: "pointer" }}
                transition={"all 0.2s ease-in-out"}
                outline={"none"}
                mt={"10px"}
              >
                Contatos
              </ListItem>
              <ListItem
                onClick={() => handleNavigation("/sobre")}
                cursor={"pointer"}
                fontWeight={"bold"}
                _hover={{ color: "#12FCEE", cursor: "pointer" }}
                transition={"all 0.2s ease-in-out"}
                outline={"none"}
                mt={"10px"}
              >
                Sobre
              </ListItem>
            </UnorderedList>
          </Flex>
        </Collapse>
      </Box>
    </>
  );
}
