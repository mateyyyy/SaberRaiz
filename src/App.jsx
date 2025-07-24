import { createTheme, ThemeProvider } from "@mui/material/styles";
import FrontPage from "./pages/frontPage";

const theme = createTheme({
  palette: {
    primary: { main: "#0d2833" }, // fondo oscuro
    secondary: { main: "#81b528" }, // acento verde
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FrontPage />
    </ThemeProvider>
  );
}

export default App;
