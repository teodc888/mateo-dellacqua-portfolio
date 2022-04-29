import React, { useEffect, useState } from "react";

//axios
import axios from "axios";

//Mui
import { Grid, Box, Stack, Typography  } from "@mui/material";

import Typed from "react-typed";

//components
import CardP from "../card/card";

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("https://push-porfolio.herokuapp.com/portfolio").then((res) => {
      console.log(res.data);
      setProyectos(res.data);
      setTimeout(() => {
        setLoading(true);
      }, 2000);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#212121", height: "100%" }}>
      {!loading ? (
        <div style={{ textAlign: "center" }}>
          <img
            src="https://media0.giphy.com/media/KKCuBooszlPG0/giphy.gif?cid=ecf05e47uzevurhfwl78zebim6eza58nh9bskq20tl2tldm6&rid=giphy.gif&ct=s"
            alt="loading"
            width="300"
            height="300"
          />
        </div>
      ) : (
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ mb: "2%" }}
          >
            <Typography
              variant="h3"
              textAlign={"center"}
              sx={{
                fontSize: { xs: "40px", sm: "40px", md: "50px", lg: "50px" },
                mt: "2%",
              }}
            >
              <Typed
                strings={["Proyectos"]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </Typography>
          </Stack>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {proyectos.map((proyecto) => {
              return (
                <Grid item xs={4} sm={4} md={4} key={proyecto.id}>
                  <CardP
                    imagen={proyecto.imagen}
                    titulo={proyecto.titulo}
                    descripcion={proyecto.descripcion}
                    github={proyecto.github}
                    link={proyecto.link}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
