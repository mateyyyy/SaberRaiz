import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";

export default function index({ destino }) {
  const handleScroll = () => {
    const target = document.getElementById(destino);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <IconButton
      onClick={handleScroll}
      sx={{
        position: "absolute",
        bottom: 20,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.2)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
        animation: "bounce 1.5s infinite",
        "@keyframes bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      }}
    >
      <KeyboardArrowDownIcon fontSize="large" />
    </IconButton>
  );
}
