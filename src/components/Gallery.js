import React from "react";
import styled from "@emotion/styled";
import Box from 'ui-box';


const Img = styled.img`
display:flex;

`;

export const Gallery = ({ url, key }) => {
  return (
    <Box
    display='inline-flex'
    justifyContent='center'
    alignItems='center'
    padding='5px'
    margin='5px'
     
    >
      <Img src={url} key={key} alt="" />;
    </Box>
  );
};
