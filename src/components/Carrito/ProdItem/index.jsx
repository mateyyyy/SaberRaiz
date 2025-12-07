import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProdItem({ prod, res = 70 }) {
  const fontSizeResponsive = { xs: 12, sm: 13, md: 14, lg: 14, xl: 16 };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        p: 1,
      }}
    >
      <Box
        sx={{
          width: `${res}px`,
          height: `${res}px`,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          boxShadow: "0 3px 8px rgba(0,0,0,0.24)",
        }}
      >
        <img
          src={prod.image}
          alt={`Producto ${prod.name}`}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
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
          sx={{ mb: 0.5 }}
        >
          {prod.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontSize={fontSizeResponsive}
          sx={{
            wordBreak: "break-word",
          }}
        >
          Cantidad: {prod.cant}
        </Typography>
      </Box>
    </Box>
  );
}
