import React from "react";

//Mui
import { Box } from "@mui/material";

//components
import QuienSoy from "../quienSoy/quienSoy";
import Conocimientos from "../conocimientos/conocimientos";
import Experiencia from "../experiencia/experiencia";
import Proyectos from "../proyectos/proyectos";
import Contactar from "../contactar/contactar";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          marginTop: { xs: "110px", sm: "210px", md: "210px", lg: "230px" },
        }}
      >
        <QuienSoy />
      </Box>
      <Box
        sx={{
          marginTop: { xs: "110px", sm: "210px", md: "210px", lg: "230px" },
        }}
      >
        <Conocimientos />
      </Box>
      <Box
        sx={{
          marginTop: { xs: "110px", sm: "210px", md: "210px", lg: "230px" },
        }}
      >
        <Experiencia />
      </Box>
      <Box
        sx={{
          marginTop: { xs: "110px", sm: "210px", md: "210px", lg: "230px" },
        }}
      >
        <Proyectos />
      </Box>
      <Box
        sx={{
          marginTop: { xs: "110px", sm: "210px", md: "210px", lg: "230px" },
        }}
      >
        <Contactar />
      </Box>
    </>
  );
}
