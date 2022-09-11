import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
    
  }
  :root{
    --primary: #111111;
    --secondary: #090832;
    --tertiary: #111111;
    --quaternary: #1A202C;
    --quinary: #141f27;
    --senary: #ffffff;
    
  }
  
  body{
    font-family: 'Inter', sans-serif;
    background-color: var(--quaternary);
    
    
    
    
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    
    
  }

  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }

  .swiper {
  width: 100%;
  height: 100%;
 
  
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  object-fit : cover;
  display: block;
  width: 100% ;
  height: 100%;
  padding: 0;
}

  `;
