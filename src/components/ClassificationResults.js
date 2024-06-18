import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ClassificationResults = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Classification Results
        </Typography>
        <Typography variant="h4">$3,024.00</Typography>
        <Typography color="textSecondary">As of March 14th, 2023</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          View balance
        </Button>
      </CardContent>
    </Card>
  );
};

export default ClassificationResults;
