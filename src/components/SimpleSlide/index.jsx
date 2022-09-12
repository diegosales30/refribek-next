import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos9_PZRALwmWi.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939522210",
  },
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos_UkfGCzvOP.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939421340",
  },
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos2_4YgsOcTXSr.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939522176",
  },

  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos4_qL3qxAz6Q.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939522172",
  },
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos12_QpsceRg0jY.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939522014",
  },
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos8_UWWsvt6fU.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939522004",
  },
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos3_cJRGrugTN.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939521926",
  },
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos7_jVYuHH3wK.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939521921",
  },
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos6__KyewIZba.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939521763",
  },
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos5_qAO7Dbm37.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939521764",
  },
  {
    url: "https://ik.imagekit.io/ygnwdzglh/Servicos11_J0d3ojGJZ.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662939521215",
  },
];

const SimpleSlide = () => {
  return (
    <div>
      <SimpleImageSlider
        style={{
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
        }}
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default SimpleSlide;
