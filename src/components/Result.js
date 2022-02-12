import React from "react";
import "../App.css";
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
  font-family: Arial, Helvetica, sans-serif;
  font-weight:bold;
  color:rgb(119, 114, 114);
`;

const Like = styled.p`
margin-right: 5px;
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
    <Box >
      <Box display="flex" >
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

      <Box className ="gallery"
      >
        {result.map((image) => (
          <>
            <Box padding="5px" width="auto">
              <Img src={image.urls.small} className="pics" />
              <Box display="flex" justifyContent="space-between" >
                <Name> Photo by {image.user.name}</Name>
              <Like className="like">👍 {image.likes}</Like>
              </Box>
              
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};
