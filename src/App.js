import "./App.css";
import { Gallery } from "./components/Gallery";
import { Result } from "./components/Result";
import { Header } from "./components/Header";
import { Loader } from './components/Loader';
import React, { useState, useEffect } from "react";

import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
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
