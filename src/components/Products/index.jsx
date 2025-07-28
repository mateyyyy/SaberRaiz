import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import carouselImages from "../../data/carouselImages";
import products from "../../data/products";
import Carrito from "../Carrito";
import ScrollDownButton from "../ScrollDownButton";
import Product from "../Product";
import "@fontsource/montserrat";
import { useState } from "react";
export default function Products() {
  const [carrito, setCarrito] = useState({});
  const [prodEnCarrito, setProdEnCarrito] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
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
      <Box
        sx={{
          py: { xs: 3, md: 5 },
          maxWidth: { xs: "95vw", sm: "600px", md: "800px" },
          width: "100%",

          borderRadius: 3,
          backgroundColor: "#6C4027",
        }}
      >
        <Slider {...settings}>
          {carouselImages.map((prod) => (
            <Box
              key={prod.id}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                px: 2,
              }}
            >
              <Box
                component="img"
                src={prod.src}
                alt={prod.alt}
                sx={{
                  width: "100%",
                  maxHeight: { xs: "400px", sm: "70vh" },
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              />

              <Box sx={{ mt: 2, px: 1 }}>
                <Typography
                  variant="h6"
                  color="white"
                  fontFamily="Montserrat"
                  textAlign="center"
                >
                  {prod.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="#E0E0E0"
                  fontFamily="Montserrat"
                  textAlign="center"
                  mt={1}
                >
                  {prod.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Carrito
        productos={Object.values(prodEnCarrito)}
        modificarCantidad={modificarCantidad}
      />
    </Box>
  );
}
