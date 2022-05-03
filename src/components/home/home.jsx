import React, { useState } from "react";

//Mui
import { Box, Container, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

//components
import QuienSoy from "../quienSoy/quienSoy";
import Conocimientos from "../conocimientos/conocimientos";
import Experiencia from "../experiencia/experiencia";
import Proyectos from "../proyectos/proyectos";
import Contactar from "../contactar/contactar";
import Footer from "../footer/footer";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 90) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const handleSubir = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container maxWidth="L">
        <br id="quienSoy" />
        <Box
          sx={{
            marginTop: { xs: "150px", sm: "210px", md: "210px", lg: "200px" },
          }}
        >
          <QuienSoy />
        </Box>
        <br id="conocimientos" />
        <Box
          sx={{
            marginTop: { xs: "250px", sm: "210px", md: "210px", lg: "200px" },
          }}
        >
          <Conocimientos />
        </Box>
        <br id="experiencia" />
        <Box
          sx={{
            marginTop: { xs: "250px", sm: "210px", md: "210px", lg: "200px" },
          }}
        >
          <Experiencia />
        </Box>
        <br id="proyectos" />
        <Box
          sx={{
            marginTop: { xs: "250px", sm: "210px", md: "210px", lg: "200px" },
          }}
        >
          <Proyectos />
        </Box>
        <br id="contactar" />
        <Box
          sx={{
            marginTop: { xs: "250px", sm: "210px", md: "210px", lg: "200px" },
          }}
        >
          <Contactar />
        </Box>
      </Container>
      <Box
        sx={{
          marginTop: { xs: "250px", sm: "210px", md: "210px", lg: "200px" },
        }}
      >
        <Footer />
      </Box>
      {visible === true && (
        <Fab
          variant="extended"
          size="small"
          aria-label="scroll back to top"
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background:
              "linear-gradient(45deg, #0d47a1, #0d47a1, #0d47a1, #0d47a1, #0d47a1, #0d47a1)",
            color: "white",
            zIndex: "1000",
          }}
          onClick={handleSubir}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </>
  );
}
