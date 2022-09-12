import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import img1 from "../../assets/slide/Servicos.jpeg";
import img2 from "../../assets/slide/Servicos2.jpeg";
import img3 from "../../assets/slide/Servicos3.jpeg";
import img4 from "../../assets/slide/Servicos4.jpeg";
import img5 from "../../assets/slide/Servicos5.jpeg";
import img6 from "../../assets/slide/Servicos6.jpeg";
import img9 from "../../assets/slide/Servicos7.jpeg";
import img10 from "../../assets/slide/Servicos8.jpeg";
import img11 from "../../assets/slide/Servicos9.jpeg";
import img12 from "../../assets/slide/Servicos10.jpeg";
import img13 from "../../assets/slide/Servicos11.jpeg";
import img14 from "../../assets/slide/Servicos12.jpeg";

import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Data = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

export default function SwiperServices() {
  return (
    <Box h={"400px"} maxW={"1280px"}>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {Data.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              objectFit="cover"
              Width={"100%"}
              Height={"100%"}
              src={item}
              alt={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
