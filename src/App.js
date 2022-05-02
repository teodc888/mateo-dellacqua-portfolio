import "./App.css";
import * as React from "react";

//Mui
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//components
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";

function App() {


  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `'Poppins', sans-serif `,
          fontSize: 14,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
        palette: {
          mode: "dark",
        },
      }),
    []
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="L">
          <Navbar />
          <Home />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
