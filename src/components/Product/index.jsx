import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function ProductCard({
  product,
  agregarAlCarrito,
  modificarCantidad,
  carrito,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "stretch",
        p: 2,
        backgroundColor: "#FBFCF7",
        borderRadius: 2,
        margin: 2,
        boxShadow: 3,
        width: "100%",
        maxWidth: 500,
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          width: { xs: "100%", sm: "40%" },
          height: "auto",
          objectFit: "cover",
          borderRadius: 2,
          mr: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "center",
          flexGrow: 1,
        }}
      >
        <Box>
          <Typography variant="h6" color="black" fontFamily="Montserrat">
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="black"
            fontFamily="Montserrat"
            sx={{ mt: 1 }}
          >
            {product.description}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="black"
            fontFamily="Montserrat"
            sx={{ mt: 1 }}
          >
            ${product.price}
          </Typography>
        </Box>

        {carrito[product.id] ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
              mt: 1.5,
            }}
          >
            <Button
              onClick={() =>
                modificarCantidad(product.id, carrito[product.id] - 1)
              }
              sx={{
                minWidth: 32,
                bgcolor: "#0d2833",
                color: "white",
                "&:hover": { bgcolor: "#1a3692ff" },
              }}
              size="small"
            >
              -
            </Button>
            <Typography variant="body2">{carrito[product.id]}</Typography>
            <Button
              onClick={() =>
                modificarCantidad(product.id, carrito[product.id] + 1)
              }
              sx={{
                minWidth: 32,
                bgcolor: "#0d2833",
                color: "white",
                "&:hover": { bgcolor: "#1a3692ff" },
              }}
              size="small"
            >
              +
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            sx={{
              mt: 1,
              bgcolor: "#81b528",
              color: "#0d2833",
              "&:hover": { bgcolor: "#2f4903", color: "white" },
            }}
            onClick={() => agregarAlCarrito(product.id, product)}
          >
            Agregar
          </Button>
        )}
      </Box>
    </Box>
  );
}
