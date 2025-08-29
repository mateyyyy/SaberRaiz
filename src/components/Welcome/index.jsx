import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Welcome() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "80px 20px",
        backgroundColor: "#fdf7ed",
      }}
      className="section-spacing"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        ¡Bienvenidos a Saber Raíz!
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}
      >
        Somos amantes de los sabores y las especias, y estamos emocionados de
        compartir con ustedes nuestras creaciones. Nos especializamos en blends
        de especias y tés artesanales, con un enfoque especial en el poder del
        jengibre y la cúrcuma. Cada mezcla está pensada para deleitar tus
        sentidos, ayudar a mejorar el bienestar general y elevar tus comidas y
        bebidas a otro nivel. ¡Explora, experimenta y déjate llevar por un mundo
        de aromas y sabores únicos!
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "20px" }}>
        Síguenos en Instagram:{" "}
        <Link
          href="https://www.instagram.com/saberraiz"
          target="_blank"
          rel="noopener"
          sx={{
            color: "#e67e22",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          @saberraiz
        </Link>
      </Typography>
    </Box>
  );
}

export default Welcome;
