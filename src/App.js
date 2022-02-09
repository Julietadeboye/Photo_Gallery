import "./App.css";
import { Gallery } from "./components/Gallery";
import { Result } from "./components/Result";
import { Header } from "./components/Header";
import { Loader } from './components/Loader';
import React, { useState, useEffect } from "react";

import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

// const WrapperImages = styled.section`
//   max-width: 70rem;
//   margin: 4rem auto;
//   display: grid;
//   grid-gap: 1em;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   grid-auto-rows: 300px;
// `;

function App() {
  const [images, setImages] = useState([]);
  


  useEffect(() => {
    fetchImages();
  }, [])


  const fetchImages = (count = 15) => {
    const apiRoot = "https://api.unsplash.com";
    const clientId = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${clientId}&count=${count}`)
      .then(res => {
        setImages([...images, ...res.data]);
      })
  }

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.unsplash.com/photos/random?client_id=${clientId}&count=50`
  //     )
  //     .then((res) => {
  //       setImages([...images, ...res.data]);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header />
      <Result />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
      <div className="gallery">
        {images.map((image) => (
          <Gallery url={image.urls.small} key={image.id}  />
        ))}
      </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
