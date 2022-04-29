import React from "react";

//Mui
import {
  Box,
  Stack,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
} from "@mui/material";

import PanToolIcon from "@mui/icons-material/PanTool";

import Typed from "react-typed";

export default function QuienSoy() {
  return (
    <Box sx={{ flexGrow: 1}}>
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
                fontSize: { xs: "40px", sm: "40px", md: "50px", lg: "50px" },
              }}
            >
              Mateo DellAcqua Castro <PanToolIcon sx={{ fontSize: "40px" }} />
            </Typography>
            <Typography variant="h4" component="div" sx={{ color: "white" }}>
              <Typed
                strings={[
                  "Frontend Developer",
                  "Backend Developer",
                  "Fullstack Developer",
                ]}
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
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "white", marginBottom: "2%" }}
              >
                Soy desarrollador Full Stack Developer
              </Typography>
              <Typography variant="h7" component="div" sx={{ color: "white" }}>
                Actualmente mis habilidades son: Javascript, React, Mui, Redux,
                NodeJs, Express, Sequalize, PostgreSQL , GitHub
              </Typography>
            </Box>
            <Button
              sx={{
                width: "200px",
                height: "100px",
                fontSize: "25px",
                color: "white",
                bgcolor: "#0d47a1",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px #0d47a1",
                mt: "10%",
              }}
              variant="contained"
              color="primary"
            >
              Contactar
            </Button>
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
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Card sx={{ maxWidth: 545 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="500"
                image="https://cdn-icons-png.flaticon.com/512/2292/2292038.png"
              />
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}