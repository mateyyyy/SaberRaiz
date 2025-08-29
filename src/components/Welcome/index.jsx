import React from "react";
import {
  Box,
  Typography,
  Link,
  Container,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@fontsource/montserrat";

function Welcome() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToProducts = () => {
    document.getElementById("destino").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(135deg, #6C4027 0%, #8B5E3C 100%)",
        color: "#FFF",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url(/blendSpecias.png) center/cover",
          opacity: 0.1,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          fontFamily="Montserrat"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#6C4027",
            mb: 3,
          }}
        >
          Bienvenidos a Saber Raíz
        </Typography>

        <Typography
          variant={isMobile ? "h4" : "h2"}
          component="h1"
          gutterBottom
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            color: "#F3F8FB",
          }}
        >
          ¡Bienvenidos a Saber Raíz!
        </Typography>
        <Typography
          variant="h6"
          paragraph
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.8,
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: 400,
            opacity: 0.9,
            mb: 4,
          }}
        >
          Somos amantes de los sabores y las especias, y estamos emocionados de
          compartir con ustedes nuestras creaciones. Nos especializamos en
          blends de especias y tés artesanales, con un enfoque especial en el
          poder del jengibre y la cúrcuma. Cada mezcla está pensada para
          deleitar tus sentidos, ayudar a mejorar el bienestar general y elevar
          tus comidas y bebidas a otro nivel.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            backgroundColor: "#6C4027",
            color: "#F3F8FB",
            padding: "8px 16px",
            borderRadius: "4px",
            mb: 4,
            fontWeight: "500",
          }}
        >
          ¡Envío gratis en Villa Mercedes! 🚚
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            onClick={scrollToProducts}
            sx={{
              backgroundColor: "#6C4027",
              "&:hover": {
                backgroundColor: "#8B5E3C",
              },
            }}
          >
            Ver Productos
          </Button>
          <Link
            href="https://www.instagram.com/saberraiz_"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#F3F8FB",
              textDecoration: "none",
              padding: "8px 16px",
              borderRadius: "50px",
              border: "2px solid #F3F8FB",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "#F3F8FB",
                color: "#6C4027",
                transform: "translateY(-2px)",
              },
            }}
          >
            <InstagramIcon /> @saberraiz_
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Welcome;
