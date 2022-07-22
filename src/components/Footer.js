import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2">
      <Link to="/">
        {"Copyright © "} My Movie | Diella Aulia Destyaswara |
        {new Date().getFullYear()}
      </Link>

      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "beige",
        }}
      >
        <Container>
          <Box sx={{ display: "flex", width: 700 }}>
            <Typography className="footbarContent" sx={{ fontSize: 14 }}>
              <Box>Audio and Subtitles</Box>
              <Box>Media Center</Box>
              <Box>Security</Box>
              <Box>Contact Us</Box>
            </Typography>
            <Typography
              className="footbarContent"
              sx={{ ml: 10, fontSize: 14 }}
            >
              <Box>Audio Description</Box>
              <Box>Investor Relations</Box>
              <Box>Legal Provisions</Box>
            </Typography>

            <Typography
              className="footbarContent"
              sx={{ ml: 10, fontSize: 14 }}
            >
              <Box>Audio Description</Box>
              <Box>Investor Relations</Box>
              <Box>Legal Provisions</Box>
            </Typography>
          </Box>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
