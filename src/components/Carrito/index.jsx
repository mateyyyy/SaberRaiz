import React, { useEffect, useState } from "react";
import { Box, Button, Modal, Divider } from "@mui/material";
import { LocalGroceryStore } from "@mui/icons-material";
import CarritoPrimerEtapa from "./CarritoPrimerEtapa";
import CarritoSegundaEtapa from "./CarritoSegundaEtapa";
import CarritoTercerEtapa from "./CarritoTercerEtapa";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { MessageGenerator } from "../../utils/MessageGenerator";

export default function Carrito({ productos, modificarCantidad, negocio }) {
  const [visible, setVisible] = useState(productos > 0 ? true : false);
  const [total, setTotal] = useState(0);
  const [etapa, setEtapa] = useState(1);
  const [personalData, setPersonalData] = useState({
    name: "",
    phone: "",
    metodoEnvio: "Envio a domicilio",
    metodoPago: "Efectivo",
    address: "",
    floor: "",
  });
  const steps = ["Completa tus datos", "Confirma tu compra"];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "8px",
    width: { xs: "95%", sm: "75%", md: "50%", lg: "40%", xl: "30%" },
    boxShadow: 24,
    p: 3,
  };

  const mandarMensaje = () => {
    const message = MessageGenerator(productos, personalData, total);

    window.open(
      `https://api.whatsapp.com/send?phone=+542657211242&text=${message}`,
      "_blank"
    );
    setEtapa(1);
  };

  useEffect(() => {
    if (productos.length == 0) {
      setVisible(false);
    }
    let precioFinal = 0;
    if (productos) {
      productos.map((prod) => {
        precioFinal += prod.price * prod.cant;
      });
      setTotal(precioFinal);
    }
  }, [productos]);

  return (
    <>
      {productos.length > 0 ? (
        <Button
          onClick={() => {
            setVisible(!visible);
          }}
          sx={{
            outline: "none",
            borderRadius: 50,
            backgroundColor: "#81b528", // dorado opaco
            "&:hover": {
              backgroundColor: "#a3a3a2ff", // marrón rojizo
            },
            width: "4rem",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 20,
            right: 20,
            position: "fixed",
            gap: 0,
            minWidth: 0,
            padding: 0,
          }}
          startIcon={
            <LocalGroceryStore
              sx={{ color: "#FBFCF7", marginLeft: "0.9rem", padding: 0 }}
            />
          }
        >
          <Box
            sx={{
              position: "absolute",
              top: -5,
              right: 0,
              backgroundColor: "#121212",
              borderRadius: "50%",
              width: "1.5rem",
              color: "white",
            }}
          >
            {productos.length}
          </Box>
        </Button>
      ) : null}

      {visible ? (
        <Modal
          open={visible}
          onClose={() => setVisible(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {etapa == 1 ? (
              <CarritoPrimerEtapa
                productos={productos}
                modificarCantidad={modificarCantidad}
                visible={visible}
                setVisible={setVisible}
                setEtapa={setEtapa}
                total={total}
                setTotal={setTotal}
              />
            ) : null}

            {etapa > 1 ? (
              <>
                <Stepper activeStep={etapa - 2} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
                {etapa == 2 ? (
                  <CarritoSegundaEtapa
                    setPersonalData={setPersonalData}
                    personalData={personalData}
                    productos={productos}
                    setEtapa={setEtapa}
                  />
                ) : null}
                {etapa == 3 ? (
                  <CarritoTercerEtapa
                    setPersonalData={setPersonalData}
                    mandarMensaje={mandarMensaje}
                    setEtapa={setEtapa}
                    total={total}
                    productos={productos}
                    personalData={personalData}
                  />
                ) : null}
              </>
            ) : null}
          </Box>
        </Modal>
      ) : null}
    </>
  );
}
