import React from "react";

//Mui
import { Box, Stack, Typography, Grid, CardMedia, Button } from "@mui/material";

import PanToolIcon from "@mui/icons-material/PanTool";

import Typed from "react-typed";

import pdf from "../../archivos/CVMateoDellAcquaCastro.pdf";

export default function QuienSoy() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 3, md: 6 }}
        columns={{ xs: 4, sm: 8, md: 16, lg: 16 }}
      >
        <Grid item xs={4} sm={8} md={16} lg={8}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Typography
              variant="h3"
              textAlign={"center"}
              sx={{
                fontSize: { xs: "40px", sm: "40px", md: "40px", lg: "40px" },
              }}
            >
              BIENVENIDOS{" "}
              <PanToolIcon
                sx={{
                  fontSize: { xs: "20px", sm: "20px", md: "40px", lg: "40px" },
                }}
              />
            </Typography>
            <Typography
              variant="h3"
              textAlign={"center"}
              sx={{
                fontSize: { xs: "20px", sm: "20px", md: "25px", lg: "25px" },
              }}
            >
              Me llamo, Mateo Dell Acqua Castro{" "}
            </Typography>
            <Typography
              variant="h5"
              textAlign={"center"}
              component="div"
              sx={{
                color: "white",
                marginBottom: "2%",
                fontSize: { xs: "20px", sm: "20px", md: "20px", lg: "20px" },
              }}
            >
              Soy desarrollador{" "}
              <Typed
                strings={["Frontend ", "Backend ", "Fullstack "]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </Typography>
            <Box
              sx={{
                width: { xs: "100%", sm: "70%", md: "60%", lg: "70%" },
                padding: "25px",
                textAlign: "left",
                bgcolor: "#263238",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h7" component="div" sx={{ color: "white" }}>
                Soy Desarrollador Web Full Stack, con la capacidad de realizar
                proyectos que sean escalables y modularizables, la facultad de
                empatizar con las personas y gran habilidad para el trabajo en
                equipo.
              </Typography>
              <Typography variant="h7" component="div" sx={{ color: "white" }}>
                Actualmente mis habilidades son: Javascript, React,
                Mui,Bootstrap, Redux, NodeJs, Express, Sequalize, PostgreSQL ,
                GitHub, Html, Css, Scrum
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 5, md: 8 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={4} sm={8} md={6}>
                  <Button
                    href="#contactar"
                    sx={{
                      width: "100%",
                      height: "60px",
                      fontSize: "20px",
                      color: "white",
                      background:
                        "linear-gradient(45deg, #0d47a1, #0d47a1, #0d47a1, #0d47a1, #0d47a1, #0d47a1)",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px #0d47a1",
                      transition: "all 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      mt: { xs: "5%", sm: "5%", md: "10%", lg: "10%" },
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Contactar
                  </Button>
                </Grid>
                <Grid item xs={4} sm={8} md={6}>
                  <Button
                    sx={{
                      width: "100%",
                      height: "60px",
                      fontSize: "20px",
                      color: "white",
                      background:
                        "linear-gradient(45deg, #0d47a1, #0d47a1, #0d47a1, #0d47a1, #0d47a1, #0d47a1)",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px #0d47a1",
                      transition: "all 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      mt: { xs: "5%", sm: "5%", md: "10%", lg: "10%" },
                    }}
                    href={pdf}
                    variant="contained"
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="MateoDellacquaCV.pdf"
                  >
                    Curriculum
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          xs={4}
          sm={8}
          md={16}
          lg={8}
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
          className="izquierda"
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Box sx={{ maxWidth: 600 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="500"
                image="https://cdn-icons-png.flaticon.com/512/172/172037.png"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
