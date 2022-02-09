import React from "react";
import styled from "@emotion/styled";
import Box from 'ui-box';


const Img = styled.img`
display:flex;

`;

export const Gallery = ({ url, key }) => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    padding='10px'
    marginBottom='5px'
     
    >
      <Img src={url} key={key} alt="" className="pics" />
      
    </Box>
  );
};
