// src/App.js
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import ImageUpload from "./components/ImageUpload";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleImageUpload = (image) => {
    setResults([]);
    setError("");
    const formData = new FormData();
    formData.append("image", image);

    fetch("http://localhost:5000/classify", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setResults(data.results);
        if (data?.error) {
          setError(data.error);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Image Classification
      </Typography>
      <ImageUpload onUpload={handleImageUpload} />
      <ResultsDisplay results={results} error={error} />
    </Container>
  );
}

export default App;
