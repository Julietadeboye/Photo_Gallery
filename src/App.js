import "./App.css";
import { Gallery } from "./components/Gallery";
import { Result } from "./components/Result";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=99tTUICyeDVwWdEm-aXu3ytYA2AjV7LoGdci8Gv1nEg&count=40"
      )
      .then((res) => {
        console.log(res.data);
        setImages([...images, ...res.data]);
      });
  }, []);

  return (
    <div className="App">
      <Result />
      {images.map((image) => (
        <Gallery url={image.urls.small} key={image.id} />
      ))}
    </div>
  );
}

export default App;
