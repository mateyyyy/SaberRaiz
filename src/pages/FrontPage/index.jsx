import { Box } from "@mui/material";
import Products from "../../components/Products";
import Welcome from "../../components/Welcome";
import ContactUs from "../../components/ContactUs";
import ScrollDownButton from "../../components/ScrollDownButton";
import Footer from "../../components/Footer";
import LogoHeader from "../../components/LogoHeader";

export default function FrontPage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <LogoHeader />
      <Products />
      <ContactUs />
      <ScrollDownButton />
      <Footer />
    </Box>
  );
}
