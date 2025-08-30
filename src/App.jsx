import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import Mayorista from "./pages/Mayorista";

const theme = createTheme({
  palette: {
    primary: { main: "#6C4027" }, // Actualizado al color principal
    secondary: { main: "#8B5E3C" }, // Color secundario
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/mayorista" element={<Mayorista />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
