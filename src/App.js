import ScrollToTop from "./Components/Common/ScrollToTop";
import { Home } from "./Components/Screen/Home";
import AuthProvider from "./AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff4a17",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={5}>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Home />
          </Router>
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
