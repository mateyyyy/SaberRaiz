import { Box, IconButton } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function LogoHeader() {
  const handleScroll = () => {
    const target = document.getElementById("destino");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#78675D",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
        width: "100%",
        position: "relative",
      }}
    >
      <img
        src="src/assets/LogoCanva.png"
        alt="Logo"
        height={"100vh"}
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />

      <IconButton
        onClick={handleScroll}
        sx={{
          position: "absolute",
          bottom: 20,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.2)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
        }}
      >
        <KeyboardArrowDownIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
