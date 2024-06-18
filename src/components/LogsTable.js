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
    date: "16 Mar, 2019",
    name: "Elvis Presley",
    shipTo: "Tupelo, MS",
    paymentMethod: "VISA •••• 3719",
    saleAmount: "$312.44",
  },
  {
    date: "16 Mar, 2019",
    name: "Paul McCartney",
    shipTo: "London, UK",
    paymentMethod: "AMEX •••• 2000",
    saleAmount: "$654.39",
  },
  {
    date: "16 Mar, 2019",
    name: "Tom Scholz",
    shipTo: "Boston, MA",
    paymentMethod: "VISA •••• 2574",
    saleAmount: "$212.79",
  },
  {
    date: "16 Mar, 2019",
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
          Logs
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ship to</TableCell>
                <TableCell>Payment method</TableCell>
                <TableCell align="right">Sale amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.shipTo}</TableCell>
                  <TableCell>{row.paymentMethod}</TableCell>
                  <TableCell align="right">{row.saleAmount}</TableCell>
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
