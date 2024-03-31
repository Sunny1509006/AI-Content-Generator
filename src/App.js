import ScrollToTop from "./Components/Common/ScrollToTop";
import { Home } from "./Components/Screen/Home";
import AuthProvider from "./AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

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
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Home />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
