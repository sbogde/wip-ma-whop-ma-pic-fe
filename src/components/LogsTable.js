import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const rows = [
  {
    id: 123,
    filename: "cat.jpg",
    model: "mobilenet",
    prediction: "tiger_cat",
    confidence: 8.744444,
    date: "2024-06-20 21:31:49",
    name: "Elvis Presley",
    shipTo: "Tupelo, MS",
    paymentMethod: "VISA •••• 3719",
    saleAmount: "$312.44",
  },
  {
    id: 124,
    filename: "cat.jpg",
    model: "mobilenet",
    prediction: "tiger_cat",
    confidence: 38.744444,
    date: "2024-06-20 21:31:49",
    name: "Paul McCartney",
    shipTo: "London, UK",
    paymentMethod: "AMEX •••• 2000",
    saleAmount: "$654.39",
  },
  {
    id: 125,
    filename: "cat.jpg",
    model: "mobilenet",
    prediction: "tiger_cat",
    confidence: 28.744444,
    date: "2024-06-20 21:31:49",
    name: "Tom Scholz",
    shipTo: "Boston, MA",
    paymentMethod: "VISA •••• 2574",
    saleAmount: "$212.79",
  },
  {
    id: 126,
    filename: "cat.jpg",
    model: "mobilenet",
    prediction: "tiger_cat",
    confidence: 18.744444,
    date: "2024-06-20 21:31:49",
    name: "Michael Jackson",
    shipTo: "Gary, IN",
    paymentMethod: "MC •••• 1253",
    saleAmount: "$866.99",
  },
];

const LogsTable = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Logs (under construction)
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>File Name</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Prediction</TableCell>
                <TableCell>Confidence</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.filename}</TableCell>
                  <TableCell>{row.model}</TableCell>
                  <TableCell>{row.prediction}</TableCell>
                  <TableCell>{row.confidence}%</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default LogsTable;
