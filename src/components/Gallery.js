import React from "react";
import styled from "@emotion/styled";
import Box from 'ui-box';


const Img = styled.img`
display:flex;

`;

export const Gallery = ({ url, key }) => {
  const getImg = (urls) => {
    
  }
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    padding='10px'
    marginBottom='5px'
     onClick={() => getImg(image.urls) }
    >
      <Img src={url} key={key} alt="" className="pics" />
      
    </Box>
  );
};
