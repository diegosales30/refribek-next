import { Box, Flex, Text } from "@chakra-ui/react";

import React from "react";
import Main from "../components/Main";

import img3 from "../../src/assets/imagens/motor.jpeg";
import Image from "next/image";
import SwiperComponent from "../components/SwiperComponent";
import { useColorModeValue } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <Main>
        <SwiperComponent />
        <Flex flexDirection={"column"} gap={30} padding={10}>
          <Box>
            <Text
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
              fontWeight={"bold"}
            >
              Nosso lema: A Refribek se responsabiliza pela execução dos
              serviços prestados, sempre pensando na segurança e satisfação do
              cliente.
            </Text>
          </Box>

          <Box
            display={"flex"}
            gap={30}
            marginBottom={4}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box margin={"auto"}>
              <Image
                src={img3}
                Width={"610px"}
                borderRadius={"0px 20px  0px 20px"}
                alt="img3"
              />
            </Box>
            <Box display={"flex"} gap={"30"} textAlign={"center"}>
              <Box display={"flex"} flexDirection={"column"} gap={30}>
                <Text fontSize={{ base: "15px", md: "15px", lg: "20px" }}>
                  Serviços mais procurados? Instalação e conserto de Split’s ,
                  limpeza e conserto de ar condicionados e reparos elétricos em
                  geral.
                </Text>
                <Text fontSize={{ base: "15px", md: "15px", lg: "20px" }}>
                  Vantagens sobre a concorrência? A Refribek é uma empresa de
                  princípios éticos e morais que ajuda no projeto e execução do
                  serviço, respeitando os interesses dos clientes para que os
                  mesmos sintam-se satisfeitos com a garantia de um excelente
                  trabalho.
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Main>
    </Box>
  );
};

export default Home;
