import React, { useEffect, useState } from "react";

//axios
import axios from "axios";

//Mui
import { Grid, Box, Stack, Typography } from "@mui/material";

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
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#263238",
        height: "100%",
        borderRadius: "20px",
        padding: "30px",
      }}
    >
      {!loading ? (
        <div style={{ textAlign: "center" }}>
          <img
            src="https://media2.giphy.com/media/AJnRXb5DscFA7IK7bX/giphy.gif?cid=ecf05e47chb86jo50wt08xyeu6ezga0mhfgfe4l0ebepj6lu&rid=giphy.gif&ct=s"
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
                fontSize: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },
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
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  key={proyecto.id}
                  data-aos="flip-down"
                  sx={{margin:"auto"}}
                >
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
