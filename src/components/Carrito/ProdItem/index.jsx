import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProdItem({ prod, res = "70px" }) {
  const fontSizeResponsive = { xs: 12, sm: 13, md: 14, lg: 14, xl: 16 };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <img
        src={prod.image}
        width={res}
        height={res}
        alt=""
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          maxHeight: res,
          minWidth: res,
          maxWidth: res,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "1rem",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          color="primary"
          fontSize={{
            xs: 15,
            sm: 15,
            md: 15,
            lg: 18,
            xl: 18,
          }}
        >
          {prod.name}
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          color="gray"
          fontSize={fontSizeResponsive}
          sx={{
            wordBreak: "break-word",
          }}
        >
          {prod.cant} x ${prod.price.toLocaleString("es-AR")}
        </Typography>
      </Box>
    </Box>
  );
}
