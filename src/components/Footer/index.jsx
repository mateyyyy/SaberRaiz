import React from "react";
import { Box, IconButton, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0d2833",
        color: "white",
        py: 2,
        px: { xs: 2, sm: 4 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <Typography variant="body2" sx={{ fontFamily: "Montserrat" }}>
        © {new Date().getFullYear()} Saber Raiz
      </Typography>

      <Box>
        <Link
          href="https://www.instagram.com/saberraiz_/"
          target="_blank"
          rel="noopener"
          color="inherit"
          sx={{ mx: 0.5 }}
        >
          <IconButton aria-label="Instagram" color="inherit" size="large">
            <InstagramIcon />
          </IconButton>
        </Link>
        <Link
          href="https://wa.me/542657211242"
          target="_blank"
          rel="noopener"
          color="inherit"
          sx={{ mx: 0.5 }}
        >
          <IconButton aria-label="WhatsApp" color="inherit" size="large">
            <WhatsAppIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
