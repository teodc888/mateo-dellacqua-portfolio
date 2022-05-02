import React from "react";

//Mui
import { Box } from "@mui/material";

//components
import QuienSoy from "../quienSoy/quienSoy";
import Conocimientos from "../conocimientos/conocimientos";
import Experiencia from "../experiencia/experiencia";
import Proyectos from "../proyectos/proyectos";
import Contactar from "../contactar/contactar";
import Footer from "../footer/footer";

export default function Home() {
  return (
    <>
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
      <br />
      <Box
        sx={{
          marginTop: { xs: "250px", sm: "210px", md: "210px", lg: "200px" },
        }}
      >
        <Footer />
      </Box>
    </>
  );
}
