import { Box } from "@mui/material";
import LogoHeader from "../../components/LogoHeader";
import Products from "../../components/Products";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
export default function FrontPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <Box>
        <LogoHeader />
      </Box>
      <Box>
        <Products />
      </Box>
      <Box>
        <ContactUs />
      </Box>
      <Footer></Footer>
      {/* Agregá más secciones si querés */}
    </Box>
  );
}
