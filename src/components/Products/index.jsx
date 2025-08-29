import { Box, Typography } from "@mui/material";
import products from "../../data/products";
import Carrito from "../Carrito";
import Product from "../Product";
import "@fontsource/montserrat";
import { useState } from "react";
import Benefits from "../Benefits";
export default function Products() {
  const [carrito, setCarrito] = useState({});
  const [prodEnCarrito, setProdEnCarrito] = useState({});
  const modificarCantidad = (id, cantidad) => {
    if (!prodEnCarrito[id]) return;

    const nuevoProdCarrito = { ...prodEnCarrito };
    if (cantidad === 0) {
      delete nuevoProdCarrito[id];
    } else {
      nuevoProdCarrito[id] = { ...nuevoProdCarrito[id], cant: cantidad };
    }

    const nuevoCarrito = { ...carrito };
    if (cantidad === 0) {
      delete nuevoCarrito[id];
    } else {
      nuevoCarrito[id] = cantidad;
    }

    setProdEnCarrito(nuevoProdCarrito);
    setCarrito(nuevoCarrito);
  };

  const agregarAlCarrito = (id, producto) => {
    setCarrito((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setProdEnCarrito((prev) => ({
      ...prev,
      [id]: { ...producto, cant: (prev[id]?.cant || 0) + 1 },
    }));
  };

  return (
    <Box
      id="destino"
      sx={{
        backgroundColor: "#6C4027",
        padding: 4,

        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <Typography
        variant="h4"
        textAlign="center"
        fontFamily="Montserrat"
        color="#F3F8FB"
        gutterBottom
        sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }}
      >
        NUESTROS PRODUCTOS
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          mt: 4,
        }}
      >
        {products.map((product) => {
          return (
            <Product
              modificarCantidad={modificarCantidad}
              key={product.id}
              product={product}
              carrito={carrito}
              agregarAlCarrito={() => agregarAlCarrito(product.id, product)}
            />
          );
        })}
      </Box>
      <Benefits />
      <Carrito
        productos={Object.values(prodEnCarrito)}
        modificarCantidad={modificarCantidad}
      />
    </Box>
  );
}
