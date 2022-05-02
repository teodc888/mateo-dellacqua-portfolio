import React from "react";

import {
  Grid,
  Box,
  Stack,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";

import Typed from "react-typed";

export default function Contactar() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#263238", height: "100%", borderRadius:"20px" }}>
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
          <Typed strings={["Contactar"]} typeSpeed={50} backSpeed={50} loop />
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 16 }}
          >
            <Grid item xs={4} sm={4} md={8}>
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                sx={{ width: "100%"  }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={8}>
              <TextField
                id="outlined-basic"
                label="Apellido"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={8}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ width: "100%"  }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={8}>
              <TextField
                id="outlined-basic"
                label="Asunto"
                variant="outlined"
                sx={{ width: "100%"  }}
              />
            </Grid>
            <Grid item xs={4} sm={8} md={16}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Mensaje"
                style={{
                  width: "100%",
                  height: "200px",
                  background: "#212121",
                  color: "white",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={16} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: { xs: "100%", sm: "30%", md: "20%", lg: "20%" },
                  height: "50px",
                  fontSize: "25px",
                  color: "white",
                  bgcolor: "#0d47a1",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #0d47a1",
                  mb: "2%",
                }}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
