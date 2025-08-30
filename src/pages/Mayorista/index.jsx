import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Alert,
  Link,
  Divider,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import products from "../../data/productsMayorista";

export default function Mayorista() {
  const whatsappLink = "https://wa.link/4a5pjf";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F3F8FB",
        py: 6,
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Typography
          variant="h3"
          component="h1"
          textAlign="center"
          fontFamily="Montserrat"
          fontWeight="700"
          color="#6C4027"
          mb={5}
        >
          Ventas Mayoristas
        </Typography>

        {/* Info principal */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 5,
            border: "1px solid rgba(108, 64, 39, 0.15)",
            borderRadius: 3,
            background: "#FFF",
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            color="#6C4027"
            fontFamily="Montserrat"
            fontWeight={600}
          >
            ¿Querés revender nuestros productos?
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 800, mb: 2 }}
          >
            Ofrecemos precios escalonados según el volumen de compra. Nuestros
            productos son ideales para:
          </Typography>

          <Box component="ul" sx={{ mb: 3, color: "text.secondary" }}>
            <Typography component="li">
              • Dietéticas y tiendas naturales
            </Typography>
            <Typography component="li">• Herboristerías</Typography>
            <Typography component="li">• Tiendas de té y café</Typography>
            <Typography component="li">• Tiendas gourmet</Typography>
          </Box>

          <Alert
            severity="info"
            sx={{
              mb: 1,
              fontWeight: 500,
              "& .MuiAlert-icon": { color: "#6C4027" },
              "& .MuiAlert-message": { color: "#6C4027" },
            }}
          >
            Compra mínima por producto: 5 unidades
          </Alert>
        </Paper>

        {/* Productos */}
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          fontFamily="Montserrat"
          fontWeight={600}
          color="#6C4027"
          mb={4}
        >
          Catálogo Mayorista
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
            mb: 8,
          }}
        >
          {products.map((product) => (
            <Paper
              key={product.id}
              elevation={0}
              sx={{
                p: 3,
                border: "1px solid rgba(108, 64, 39, 0.1)",
                borderRadius: 3,
                background: "#FFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />

                <Typography
                  variant="h6"
                  component="h3"
                  fontFamily="Montserrat"
                  fontWeight="600"
                  color="#6C4027"
                  gutterBottom
                >
                  {product.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {product.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography
                  variant="subtitle2"
                  color="#6C4027"
                  fontWeight="600"
                  gutterBottom
                >
                  Escala de precios:
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {product.pricing.map((tier, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      color="text.secondary"
                    >
                      {tier.min}+ unidades → ${tier.price.toLocaleString()}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                href={`https://wa.me/542657541156?text=Hola,+me+interesa+el+producto+${encodeURIComponent(
                  product.name
                )}+para+compra+mayorista.+¿Podrían+enviarme+más+información+sobre+precios+y+cantidades+mínimas?`}
                target="_blank"
                sx={{
                  borderColor: "#6C4027",
                  color: "#6C4027",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  borderRadius: "50px",
                  textTransform: "none",
                  mt: "auto",
                  "&:hover": {
                    bgcolor: "rgba(108, 64, 39, 0.05)",
                    borderColor: "#6C4027",
                  },
                }}
              >
                Consultar por este producto
              </Button>
            </Paper>
          ))}
        </Box>

        {/* Contacto general */}
        <Box textAlign="center">
          <Typography
            variant="h6"
            component="h2"
            fontFamily="Montserrat"
            fontWeight={600}
            color="#6C4027"
            gutterBottom
          >
            ¿Te interesa ser revendedor?
          </Typography>

          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href={whatsappLink}
            target="_blank"
            sx={{
              mt: 2,
              bgcolor: "#6C4027",
              color: "#FFF",
              fontFamily: "Montserrat",
              fontWeight: 600,
              padding: "10px 24px",
              borderRadius: "50px",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#8B5E3C",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contactanos para más información
          </Button>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            También podés escribirnos a{" "}
            <Link href="mailto:info@saberraiz.com" color="#6C4027">
              info@saberraiz.com
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
