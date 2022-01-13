import React from "react";
import axios from "axios";
import { useState } from "react";
import styled from "@emotion/styled";
import Box from "ui-box";
import { useMediaQuery } from "react-responsive";

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 300px;
  color: white;
  border-radius: 5px;
  border: none;
  background-color: rgb(119, 114, 114);

  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(58, 71, 90);
  }

  &:active {
    background-color: cornflowerblue;
    width: 290px;
  }
`;

const Img = styled.img`
  flex-wrap: nowrap;
  margin: 5px;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  width: 1500px;
  height: 36px;
`;

const Name = styled.p`
  width: 200px;
`;

export const Result = () => {
  const [image, setImage] = useState("");
  const clientId = process.env.REACT_APP_ACCESSKEY;
  const [result, setResult] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const handleChange = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = () => {
    console.log(image);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  };

  return (
    <Box
      display="flex"
      paddingTop="50px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" paddingY="10px" paddingX="20px" marginBottom="15px">
        <Input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Search for images"
        />

        <Button onClick={handleSubmit} type="submit">
          Search
        </Button>
      </Box>

      <Box
        display={isMobile ? "flex" : "grid"}
        gridColumnGap="5px"
        gridTemplateColumns="auto auto auto"
        width="auto"
      >
        {result.map((image) => (
          <>
            <Box padding="5px" width="auto">
              <Img src={image.urls.small} />
              <Name> Photo by {image.user.name}</Name>
              <p className="like">👍 {image.likes}</p>
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};
