import React from "react";
import { Box, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function ContactUs() {
  const whatsappLink = "https://wa.link/4a5pjf"; // reemplazalo por tu link real

  return (
    <Box
      id="contacto"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6C4027 0%, #8B5E3C 100%)",
        px: 2,
        py: 5,
      }}
    >
      <Typography
        variant="h5"
        mb={3}
        textAlign={"center"}
        color="#F3F8FB"
        fontFamily={"Montserrat"}
      >
        ¿Querés comunicarte con nosotros?
      </Typography>

      <Button
        variant="contained"
        color="success"
        startIcon={<WhatsAppIcon />}
        href={whatsappLink}
        target="_blank"
        sx={{
          textTransform: "none",
          fontSize: "1rem",
          px: 3,
          py: 1,
        }}
      >
        Contactanos por WhatsApp
      </Button>
      <Typography
        variant="body2"
        mb={3}
        textAlign={"center"}
        color="#F3F8FB"
        fontFamily={"Montserrat"}
      >
        +542657541156
      </Typography>
    </Box>
  );
}
