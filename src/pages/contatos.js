import { AspectRatio, Box, Text } from "@chakra-ui/react";
import React from "react";
import Main from "../components/Main";
import { useColorModeValue } from "@chakra-ui/react";

const Contato = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <Main>
        <Box
          display={"flex"}
          className="papai"
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignContent={"flex-start"}
          gap={30}
          mt={30}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Text fontSize={35} fontWeight={800} marginBottom={5}>
              Nossa Localização
            </Text>
            <AspectRatio maxW={310} minW={310} h={400} ratio={1 / 1}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7133193467885!2d-43.602639784406335!3d-22.887046242922384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be37836358bfb%3A0xcdcb2564c687ec71!2sRua%20Itambarac%C3%A1%2C%20125%20-%20Lote%2022%20%E2%80%93%20Quadra%2085%20-%20Campo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023060-070!5e0!3m2!1spt-BR!2sbr!4v1660670655579!5m2!1spt-BR!2sbr"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </AspectRatio>
          </Box>
          <Box display={"flex"} flexDirection={"column"} mb={40}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={30}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={800}
                mb={30}
              >
                Telefone: (21) 99409-5425
              </Text>
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={800}
                mb={30}
              >
                E-mail: refribek@live.com
              </Text>
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={800}
                mb={30}
              >
                Segunda a Sexta: 8:00 ás 18:00 Sábados: 8:00 ás 14:00
              </Text>
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={800}
              >
                Matriz: Rua Itambaraçá – 125 (Lote 22 – Quadra 85) Bairro: Campo
                Grande – CEP:23060-070 – RJ
              </Text>
            </Box>
          </Box>
        </Box>
      </Main>
    </Box>
  );
};

export default Contato;
