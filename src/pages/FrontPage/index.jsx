import { Box } from "@mui/material";
import LogoHeader from "../../components/LogoHeader";
import Products from "../../components/Products";
import ContactUs from "../../components/ContactUs";

export default function FrontPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <Box
        sx={{
          scrollSnapAlign: "start",
        }}
      >
        <LogoHeader />
      </Box>
      <Box sx={{ scrollSnapAlign: "start" }}>
        <Products />
      </Box>
      <Box sx={{ scrollSnapAlign: "start" }}>
        <ContactUs />
      </Box>
      {/* Agregá más secciones si querés */}
    </Box>
  );
}
