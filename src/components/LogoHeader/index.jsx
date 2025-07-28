import { Box } from "@mui/material";
import ScrollDownButton from "../ScrollDownButton";
export default function LogoHeader() {
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
        src="/LogoCanva.png"
        alt="Logo"
        height={"100vh"}
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />

      <ScrollDownButton destino={"destino"} />
    </Box>
  );
}
