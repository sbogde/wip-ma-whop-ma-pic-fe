// src/components/ResultsDisplay.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";

const ResultsDisplay = ({ results, error }) => {
  return (
    <Card>
      <CardContent>
        {error && <Alert severity="error">{error}</Alert>}

        {<Typography variant="h5">Classification Results:</Typography>}

        {results?.model && (
          <Alert severity="success">Model: {results.model}</Alert>
        )}

        {results?.map((result, index) => (
          <Typography key={index}>{`${
            result.label
          }: ${result.confidence.toFixed(2)}%`}</Typography>
        ))}
      </CardContent>

      {results?.length ? (
        <CardContent>
          <div>
            <pre>{JSON.stringify(results, null, 2)}</pre>
          </div>
        </CardContent>
      ) : (
        ""
      )}
    </Card>
  );
};

export default ResultsDisplay;
