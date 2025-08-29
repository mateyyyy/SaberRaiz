import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Benefits() {
  const benefitsData = [
    {
      icon: <SpaIcon sx={{ fontSize: 60, color: "#e67e22" }} />,
      title: "Bienestar Natural",
      description:
        "Nuestros blends están formulados para mejorar tu bienestar general con ingredientes naturales y potentes.",
    },
    {
      icon: <LocalFloristIcon sx={{ fontSize: 60, color: "#e67e22" }} />,
      title: "Sabores Exóticos",
      description:
        "Descubre una explosión de aromas y sabores únicos que transformarán tus comidas y bebidas.",
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 60, color: "#e67e22" }} />,
      title: "Calidad Artesanal",
      description:
        "Cada mezcla es cuidadosamente elaborada con especias y tés de la más alta calidad.",
    },
    {
      icon: (
        <LocalShippingIcon sx={{ fontSize: 40, mb: 1, color: "#e67e22" }} />
      ),
      title: "Envío Gratis",
      description: "En Villa Mercedes. Consultá envíos a todo el país",
    },
    {
      icon: <PaymentsIcon sx={{ fontSize: 40, mb: 1, color: "#e67e22" }} />,
      title: "Pago Seguro",
      description: "Aceptamos todas las tarjetas y métodos de pago.",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "80px 20px",
      }}
      className="section-spacing"
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontFamily="Montserrat"
        color="#F3F8FB"
        gutterBottom
        sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }}
      >
        NUESTROS BENEFICIOS
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {benefitsData.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              {benefit.icon}
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ marginTop: "15px" }}
              >
                {benefit.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Benefits;
