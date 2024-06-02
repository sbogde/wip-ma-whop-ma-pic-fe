// src/components/ImageUpload.js
import React, { useState } from "react";
import { Button, Input } from "@mui/material";

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    onUpload(image);
  };

  return (
    <div>
      <Input type="file" onChange={handleImageChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
};

export default ImageUpload;
