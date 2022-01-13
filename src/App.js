import "./App.css";
import { Gallery } from "./components/Gallery";
import { Result } from "./components/Result";
import { Header } from "./components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const clientId = process.env.REACT_APP_ACCESSKEY;

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=${clientId}&count=40`
      )
      .then((res) => {
        console.log(res.data);
        setImages([...images, ...res.data]);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Result />
      <div className="gallery">
        {images.map((image) => (
          <Gallery url={image.urls.small} key={image.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
