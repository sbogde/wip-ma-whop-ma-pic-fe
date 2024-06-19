import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import ImageUpload from "./ImageUpload";

const UploadForm = ({ onResultsUpdate }) => {
  const [selectedModel, setSelectedModel] = useState("vgg16");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (image) => {
    setLoading(true);

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
        onResultsUpdate(data);
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Upload Image
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
        <br />
        <br />
        <ImageUpload onUpload={handleImageUpload} loading={loading} />
      </CardContent>
    </Card>
  );
};

export default UploadForm;
