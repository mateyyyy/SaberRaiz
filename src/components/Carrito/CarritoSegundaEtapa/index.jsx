import React, { useState } from "react";
import { TextField, Typography, Grid, Button, Divider } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function CarritoSegundaEtapa({
  setEtapa,
  setPersonalData,
  personalData,
}) {
  const [value, setValue] = useState(personalData.metodoEnvio || "Delivery");
  const handleRadio = (event) => {
    setValue(event.target.value);
  };
  const radioSx = {
    color: "#121212",
    "&.Mui-checked": {
      color: "#6C4027",
    },
  };
  const formSx = { color: "#121212" };

  const handleChange = (e) => {
    console.log(value);
    const personalDataBody = {
      ...personalData,
      [e.target.name]: e.target.value,
    };
    setPersonalData(personalDataBody);
    localStorage.setItem("personalData", JSON.stringify(personalDataBody));
  };

  return (
    <form
      onSubmit={() => {
        setEtapa(3);
      }}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h6" component="h2" color="primary">
            Completa tus datos
          </Typography>
        </Grid>
        <Grid size={12}>
          <Grid size={12} sx={{ display: "flex", justifyContent: "start" }}>
            <TextField
              label="Nombre"
              name="name"
              required
              onChange={(e) => {
                handleChange(e);
              }}
              value={personalData.name}
            />
            <TextField
              label="Telefono"
              sx={{ marginLeft: "1rem" }}
              name="phone"
              onChange={(e) => {
                handleChange(e);
              }}
              value={personalData.phone}
            />
          </Grid>
          {personalData.metodoEnvio == "Envio a domicilio" ? (
            <>
              <Grid
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "1rem",
                }}
              >
                <TextField
                  label="Domicilio"
                  required
                  name="address"
                  value={personalData.address}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <TextField
                  label="Piso / Dpto."
                  value={personalData.floor}
                  sx={{ width: "25%", marginLeft: "1rem" }}
                  name="floor"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Grid>
            </>
          ) : null}
          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "start", marginTop: "1rem" }}
          >
            <FormControl required>
              <FormLabel>Forma de entrega</FormLabel>
              <RadioGroup
                name="metodoEnvio"
                value={personalData.metodoEnvio}
                onChange={(e) => {
                  handleRadio(e);
                  handleChange(e);
                }}
              >
                <FormControlLabel
                  name="metodoEnvio"
                  value="Envio a domicilio"
                  control={<Radio sx={radioSx} />}
                  label="Envio a domicilio"
                  sx={formSx}
                />
                <FormControlLabel
                  name="metodoEnvio"
                  value="Retira en sucursal"
                  control={<Radio sx={radioSx} />}
                  label="Retira en sucursal"
                  sx={formSx}
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid size={12} sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Divider />
          </Grid>
          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              onClick={() => {
                setEtapa(1);
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
              type="submit"
              variant="contained"
              color="warning"
              sx={{ color: "white", backgroundColor: "#81b528" }}
            >
              Continuar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
