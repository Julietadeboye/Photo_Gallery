import React from "react";
// import "../App.css";
import styled from "@emotion/styled";

import Image from "./images/header-img.jpg";

const Head = styled.div`
  background-image: url(${Image});
  width: 100%;
  height: 350px;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
   
`;
export const Header = () => {
  return (
    <Head className="header">
      <H1>PHOTO GALLERY</H1>
    </Head>
  );
};
