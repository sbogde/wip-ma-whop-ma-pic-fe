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
  const [selectedModel, setSelectedModel] = useState("efficientnetb0");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (image) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("model", selectedModel);

    fetch(`${process.env.REACT_APP_API_URL}/classify`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        onResultsUpdate(data);
      })
      .catch((error) => {
        // console.error("Error:", error, typeof error);
        let errorMessage = error.message ? error.message : `Couldn't upload`;
        errorMessage += ` [${process.env.REACT_APP_API_URL}]`;

        onResultsUpdate({ error: errorMessage });
      })
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
            <MenuItem value="densenet121">DenseNet121</MenuItem>
            <MenuItem value="mobilenet">MobileNet</MenuItem>
            <MenuItem value="efficientnetb0">EfficientNetB0</MenuItem>
            <MenuItem value="efficientnetb1">EfficientNetB1</MenuItem>
            <MenuItem value="efficientnetb2">EfficientNetB2</MenuItem>
            <MenuItem value="efficientnetb3">EfficientNetB3</MenuItem>
            <MenuItem value="efficientnetb4">EfficientNetB4</MenuItem>
            <MenuItem value="efficientnetb7">EfficientNetB7</MenuItem>
            <MenuItem value="inceptionv3">InceptionV3</MenuItem>
            <MenuItem value="xception">Xception</MenuItem>
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
