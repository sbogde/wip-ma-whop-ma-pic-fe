import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Sample data for the table
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

const Dashboard = () => {
  // sx={{ width: { xs: "100%", sm: "70%" } }}
  return (
    <Box sx={{ flexGrow: 1, p: 2, width: "100%" }}>
      <Grid container spacing={2}>
        {/* Upload Form */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upload
              </Typography>
              {/* <Line data={data} /> */}
            </CardContent>
          </Card>
        </Grid>

        {/* Classification Results */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Classification Results
              </Typography>
              <Typography variant="h4">$3,024.00</Typography>
              <Typography color="textSecondary">
                As of March 14th, 2023
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                View balance
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Logs Table */}
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 12, sm: 13 },
          pb: { xs: 0, sm: 6 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(2rem, 7vw, 2.2rem)",
            }}
          >
            Welcome to&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(2rem, 7vw, 2.2rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              wip-ma-whop-ma-pic
            </Typography>
          </Typography>
          {/* <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier features and services.
          </Typography> */}
          {/* <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter your email address",
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack> */}
          {/* <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
        {/* <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 4, sm: 6 },
            alignSelf: "center",
            height: { xs: 200, sm: 700 },
            width: "100%",
            backgroundImage:
              theme.palette.mode === "light"
                ? 'url("/static/hero-light.png")'
                : 'url("/static/hero-light.png")',
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        /> */}
        <Dashboard />
      </Container>
    </Box>
  );
}
