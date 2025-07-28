import { Button, Grid, Typography, Box } from "@mui/material";
import ProdItem from "../ProdItem";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
export default function CarritoTercerEtapa({
  setEtapa,
  productos,
  total,
  personalData,
  mandarMensaje,
}) {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid size={12}>
          <Typography
            variant="h6"
            component="h2"
            color="primary"
            fontSize={{
              xs: 15,
              xl: 18,
            }}
          >
            Mis datos :
          </Typography>
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "row",
              flexWrap: "wrap",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                variant="p"
                component="p"
                color="primary"
                fontSize={{
                  xs: 15,
                  xl: 18,
                }}
              >
                <PersonIcon sx={{ color: "black", marginRight: ".5rem" }} />
                {personalData.name}
              </Typography>

              {personalData.phone && (
                <>
                  <Typography
                    sx={{
                      display: "flex",
                      marginRight: ".5rem",
                    }}
                    variant="p"
                    component="p"
                    color="primary"
                    fontSize={{
                      xs: 15,
                      xl: 18,
                    }}
                  >
                    {" "}
                    <PhoneAndroidIcon
                      sx={{ color: "black", marginRight: ".5rem" }}
                    />
                    {personalData.phone}
                  </Typography>
                </>
              )}

              {personalData.address &&
                personalData.metodoEnvio == "Envio a domicilio" && (
                  <>
                    <Typography
                      sx={{ display: "flex", alignItems: "center" }}
                      variant="p"
                      component="p"
                      color="primary"
                      fontSize={{
                        xs: 15,
                        xl: 18,
                      }}
                    >
                      <HomeIcon sx={{ color: "black", marginRight: ".5rem" }} />
                      {personalData.address}
                      {personalData.floor && <> piso : {personalData.floor}</>}
                    </Typography>
                  </>
                )}
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                variant="p"
                component="p"
                color="primary"
                fontSize={{
                  xs: 15,
                  xl: 18,
                }}
              >
                {personalData.metodoEnvio == "Envio a domicilio" ? (
                  <DeliveryDiningIcon
                    sx={{ color: "black", marginRight: ".5rem" }}
                  />
                ) : (
                  <HomeIcon sx={{ color: "black", marginRight: ".5rem" }} />
                )}

                {personalData.metodoEnvio}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Typography
            variant="h6"
            component="h2"
            color="primary"
            fontSize={{
              xs: 15,
              xl: 18,
            }}
          >
            Detalle :
          </Typography>
          <Grid
            size={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              borderRadius: "8px",
              padding: "1rem",
              gap: "1rem",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              overflowX: { xs: "auto" },
              overflowY: "auto",
              maxHeight: "15rem",
            }}
          >
            {productos.map((prod) => (
              <Grid size={12} id={prod.id}>
                <ProdItem prod={prod} />
              </Grid>
            ))}
          </Grid>
          <Grid size={6}>
            <Typography variant="h6" component="h3" color="primary">
              Total : ${total.toLocaleString("es-AR")}
            </Typography>
          </Grid>
        </Grid>

        <Button
          onClick={() => {
            setEtapa(2);
          }}
          sx={{
            mr: 1,
            bgcolor: "#4a4a4a",
            color: "white",
            "&:hover": { bgcolor: "#333333" },
          }}
        >
          Volver
        </Button>
        <Button
          variant="contained"
          color="warning"
          sx={{ color: "white", backgroundColor: "#81b528" }}
          onClick={() => {
            setEtapa(4);
            mandarMensaje();
          }}
        >
          Confirmar
        </Button>
      </Grid>
    </>
  );
}
