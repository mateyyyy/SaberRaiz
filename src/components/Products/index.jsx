import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import carouselImages from "../../data/carouselImages";
import "@fontsource/montserrat";
export default function Products() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Box
      id="destino"
      sx={{
        backgroundColor: "#6C4027",
        padding: 4,
        height: { xs: "100dvh", sm: "100dvh" },
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          py: { xs: 3, md: 5 },
          maxWidth: { xs: "95vw", sm: "600px", md: "800px" },
          width: "100%",
          mx: "auto",
          borderRadius: 3,
          backgroundColor: "#6C4027",
        }}
      >
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
        <Slider {...settings}>
          {carouselImages.map((img) => (
            <Box key={img.id} sx={{ px: { xs: 0.5, md: 2 } }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  height: "auto",
                  borderRadius: 10,
                  objectFit: "cover",
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
                  {img.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="#E0E0E0"
                  fontFamily="Montserrat"
                  textAlign="center"
                  mt={1}
                >
                  {img.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
