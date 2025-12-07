import React, { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Close, Delete } from "@mui/icons-material";
import ProdItem from "../ProdItem";

export default function CarritoPrimerEtapa({
  productos,
  modificarCantidad,
  setVisible,
  setEtapa,
  setTotal,
  total,
}) {
  const fontSizeResponsive = { xs: 13, sm: 13, md: 14, lg: 14, xl: 16 };
  const ButtonFontResponsive = { xs: 12, sm: 13, md: 14, lg: 14, xl: 15 };
  const EditButtonStyle = {
    fontSize: "25px",
    borderRadius: "5px",
    width: "20px",
    height: "20px",
    backgroundColor: "none",
    color: "#6C4027",
    minWidth: "auto",
    border: "none",
    outline: "none",
    "&:focus": { outline: "none" },
  };

  useEffect(() => {
    if (productos.length === 0) {
      setVisible(false);
    }

    let precioFinal = 0;
    if (productos) {
      productos.forEach((prod) => {
        precioFinal += prod.price * prod.cant;
      });
      setTotal(precioFinal);
    }
  }, [productos, setTotal, setVisible]);

  return (
    <>
      <IconButton
        onClick={() => setVisible(false)}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          "&:focus": { outline: "none" },
        }}
      >
        <Close />
      </IconButton>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Grid item xs={12}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="primary"
          >
            Productos
          </Typography>
          <Divider />
        </Grid>

        <Grid
          container
          spacing={2}
          item
          xs={12}
          sx={{
            maxHeight: "50vh",
            overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {productos.map((prod) => (
            <Grid
              container
              key={prod.id}
              spacing={1.5}
              xs={12}
              sx={{
                borderRadius: "8px",
                p: ".5rem",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center", // solo vertical align
              }}
            >
              <Grid item xs={7}>
                <ProdItem prod={prod} res={65} />
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    sx={EditButtonStyle}
                    size="small"
                    onClick={() => modificarCantidad(prod.id, prod.cant - 1)}
                  >
                    -
                  </Button>
                  <Typography
                    variant="h6"
                    component="p"
                    color="#121212"
                    marginLeft=".5rem"
                    marginRight=".5rem"
                    fontSize={{ xs: 13, sm: 16, md: 17, lg: 18 }}
                  >
                    {prod.cant}
                  </Typography>
                  <Button
                    color="warning"
                    size="small"
                    sx={EditButtonStyle}
                    onClick={() => modificarCantidad(prod.id, prod.cant + 1)}
                  >
                    +
                  </Button>
                </Grid>

                <Grid item xs={1.5}>
                  <Button
                    onClick={() => modificarCantidad(prod.id, 0)}
                    startIcon={<Delete />}
                    color="primary"
                    size="small"
                    sx={{
                      outline: "none",
                      "&:focus": { outline: "none" },
                      backgroundColor: "transparent",
                      justifyContent: { xs: "start", sm: "end" },
                      minWidth: "auto",
                      padding: 0,
                      ml: 4,
                    }}
                    aria-label={`Eliminar ${prod.name}`}
                  />
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Button
              onClick={() => setVisible(false)}
              sx={{
                mr: 1,
                bgcolor: "#4a4a4a",
                color: "white",
                "&:hover": { bgcolor: "#333333" },
                fontSize: ButtonFontResponsive,
              }}
            >
              Cerrar
            </Button>
            <Button
              variant="contained"
              bgcolor="#81b528"
              sx={{
                color: "white",
                fontSize: ButtonFontResponsive,
                backgroundColor: "#81b528",
                ":hover": {
                  backgroundColor: "#628d17ff",
                },
              }}
              onClick={() => {
                setEtapa(2);
              }}
            >
              Comprar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
