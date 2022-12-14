import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import React from "react";

import img4 from "../../src/assets/imagens/img4.png";
import img1 from "../../src/assets/imagens/img5.png";
import Main from "../components/Main";
import { useColorModeValue } from "@chakra-ui/react";

import SwiperServices from "../components/SwiperServices/index";

const Servicos = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <Main>
        <Heading as={"h2"}>Galeria</Heading>
        <SwiperServices />
        <Box maxW={"1280px"} mb={"30px"} mt={10}>
          <Flex
            display={"flex"}
            flexWrap={{
              base: "wrap",
              md: "wrap",
              lg: "nowrap",
            }}
            w={"100%"}
            gap={20}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
              gap={5}
              w={"100%"}
              margin={{ base: "auto", md: "auto", lg: "initial" }}
            >
              <Box
                w={"50%"}
                maxW={"550px"}
                margin={"auto"}
                marginTop={"5px"}
                minW={"300px"}
              >
                <Image
                  src={img1}
                  W={"610px"}
                  alt={"imagem de um homem limpando ar-condicinado"}
                  style={{ borderRadius: "20px 0px  20px 0px" }}
                />
              </Box>
              <Box w={"50%"} maxW={"550px"}>
                <Text
                  fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                  fontWeight={"bold"}
                  textAlign={"left"}
                >
                  Importante frisar que todas as imagens são de direito autoral
                  da Refribek, esses reparos e instalações foram executados por
                  nossa equipe de profissionais.
                </Text>
              </Box>
            </Box>
          </Flex>
          <Box display={"flex"} w={"100%"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              margin={"auto"}
              marginTop={"20px"}
              flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
              gap={10}
            >
              <Box w={"50%"} margin={"auto"} maxW={"550px"}>
                <Text
                  fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                  fontWeight={"bold"}
                >
                  Serviços mais procurados? Instalação e conserto de Split’s ,
                  limpeza e conserto de ar condicionados e reparos elétricos em
                  geral.
                </Text>
              </Box>
              <Box
                w={"50%"}
                maxW={"550px"}
                margin={"auto"}
                marginTop={"5px"}
                minW={"300px"}
              >
                <Image
                  src={img4}
                  alt={
                    "imagem de um aparelho para medir pressão do ar-condicinado"
                  }
                  W={"610px"}
                  style={{ borderRadius: "20px 0px  20px 0px" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Main>
    </Box>
  );
};

export default Servicos;
