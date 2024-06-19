import React from "react";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ClassificationResults = ({ results, error, resizedImage, modelUsed }) => {
  let resized_image_url = "";
  if (resizedImage) {
    resized_image_url = `${process.env.REACT_APP_API_URL}/uploads/models/${resizedImage}`;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Classification Results
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}

        {!error && modelUsed && modelUsed.length && (
          <>
            {modelUsed && (
              <Alert severity="success">Model Used: {modelUsed}</Alert>
            )}

            {results?.map((result, index) => (
              <Typography key={index}>{`${index + 1}. ${
                result.label
              }: ${result.confidence.toFixed(2)}%`}</Typography>
            ))}

            {resized_image_url && (
              <CardContent>
                <Avatar
                  alt={
                    results?.[0].label +
                    " - " +
                    results?.[0].confidence.toFixed(2) +
                    "%"
                  }
                  title={
                    results?.[0].label +
                    " - " +
                    results?.[0].confidence.toFixed(2) +
                    "%"
                  }
                  src={resized_image_url}
                  sx={{ width: 224, height: 224 }}
                />
              </CardContent>
            )}
          </>
        )}

        {!error && !modelUsed && (
          <Alert severity="info">Please upload a pic first.</Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default ClassificationResults;
