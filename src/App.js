// src/App.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import ImageUpload from "./components/ImageUpload";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [resizedImage, setResizedImage] = useState("");
  const [selectedModel, setSelectedModel] = useState("vgg16");
  const [modelUsed, setModelUsed] = useState("");

  const handleImageUpload = (image) => {
    setResults([]);
    setError("");
    setResizedImage("");
    setModelUsed("");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("model", selectedModel);

    fetch("http://localhost:5000/classify", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setResults(data?.results);
        setResizedImage(data?.resized_image);
        setModelUsed(data?.model);

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

      <FormControl fullWidth margin="normal">
        <InputLabel id="model-select-label">Model</InputLabel>
        <Select
          labelId="model-select-label"
          id="model-select"
          value={selectedModel}
          label="Model"
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <MenuItem value="vgg16">VGG16</MenuItem>
          <MenuItem value="vgg19">VGG19</MenuItem>
        </Select>
      </FormControl>

      <ImageUpload onUpload={handleImageUpload} />
      <ResultsDisplay
        results={results}
        error={error}
        resizedImage={resizedImage}
        modelUsed={modelUsed}
      />
    </Container>
  );
}

export default App;
