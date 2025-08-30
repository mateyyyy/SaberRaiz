import { Box, Button, CardMedia, Typography, Paper } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductCard({
  product,
  agregarAlCarrito,
  modificarCantidad,
  carrito,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "stretch",
        p: 3,
        backgroundColor: "#FFF",
        borderRadius: 3,

        width: "100%",
        maxWidth: 600,
        height: { xs: "auto", md: 550 },
        transition: "all 0.3s ease-in-out",
        border: "1px solid rgba(108, 64, 39, 0.1)",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 20px rgba(108, 64, 39, 0.1)",
          "& .product-image": {
            transform: "scale(1.05)",
          },
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "300px" },
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          mr: { xs: 0, sm: 3 },
          mb: { xs: 2, sm: 0 },
          flexShrink: 0,
          "&::before": {
            content: '""',
            display: "block",
            paddingTop: "150%", // Mantiene la proporción 2:3 (400x600)
          },
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          className="product-image"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease-in-out",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          flex: 1, // asegura que todas las tarjetas tengan la misma altura
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            component="h2"
            color="#6C4027"
            fontFamily="Montserrat"
            fontWeight="600"
            gutterBottom
          >
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Montserrat"
            sx={{
              mt: 1,
              lineHeight: 1.6,
              fontSize: "0.95rem",
            }}
          >
            {product.description}
          </Typography>
          {product.usage && (
            <Typography
              variant="subtitle2"
              color="#6C4027" // color más destacado que el gris
              fontFamily="Montserrat"
              textAlign={"center"}
              sx={{
                mt: 1,
                mb: 1,
                fontStyle: "italic",
                fontSize: "0.9rem",
                backgroundColor: "rgba(108, 64, 39, 0.05)", // fondo suave
                padding: "4px 8px",
                borderRadius: "4px",
                display: "inline-block",
              }}
            >
              {product.usage}
            </Typography>
          )}
          <Typography
            variant="h6"
            fontWeight="700"
            color="#6C4027"
            fontFamily="Montserrat"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            ${product.price.toLocaleString("es-AR")}
          </Typography>
        </Box>

        {carrito[product.id] ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "flex-start",
              mt: 1,
            }}
          >
            <Button
              onClick={() =>
                modificarCantidad(product.id, carrito[product.id] - 1)
              }
              sx={{
                minWidth: 40,
                height: 40,
                bgcolor: "rgba(108, 64, 39, 0.1)",
                color: "#6C4027",
                borderRadius: "50%",
                p: 0,
                "&:hover": {
                  bgcolor: "#6C4027",
                  color: "#FFF",
                },
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Typography
              variant="body1"
              fontWeight="600"
              color="#6C4027"
              sx={{ minWidth: "30px", textAlign: "center" }}
            >
              {carrito[product.id]}
            </Typography>
            <Button
              onClick={() =>
                modificarCantidad(product.id, carrito[product.id] + 1)
              }
              sx={{
                minWidth: 40,
                height: 40,
                bgcolor: "rgba(108, 64, 39, 0.1)",
                color: "#6C4027",
                borderRadius: "50%",
                p: 0,
                "&:hover": {
                  bgcolor: "#6C4027",
                  color: "#FFF",
                },
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={() => agregarAlCarrito(product.id, product)}
            sx={{
              mt: 1,
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
            Agregar al carrito
          </Button>
        )}
      </Box>
    </Paper>
  );
}
