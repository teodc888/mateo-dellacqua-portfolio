import React from "react";

//Mui
import { Grid, Box, Card, CardMedia, Stack, Typography } from "@mui/material";

import Typed from "react-typed";

export default function Conocimientos() {
  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: "#212121", height: "100%" }}>
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
              strings={["Conocimientos"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </Typography>
        </Stack>
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 16, lg: 16 }}
        >
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Card sx={{ maxWidth: 250, margin: "auto", borderRadius: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                sx={{ objectFit: "contain" }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
            </Card>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Card sx={{ maxWidth: 250, margin: "auto", borderRadius: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                sx={{ objectFit: "contain" }}
                image="https://img.icons8.com/color/480/redux.png"
              />
            </Card>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Card sx={{ maxWidth: 250, margin: "auto", borderRadius: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                sx={{ objectFit: "contain" }}
                image="https://v4.material-ui.com/static/logo.png"
              />
            </Card>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Card sx={{ maxWidth: 250, margin: "auto", borderRadius: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                sx={{ objectFit: "contain" }}
                image="https://img.icons8.com/color/480/nodejs.png"
              />
            </Card>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Card sx={{ maxWidth: 250, margin: "auto", borderRadius: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                sx={{ objectFit: "contain" }}
                image="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"
              />
            </Card>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Card sx={{ maxWidth: 250, margin: "auto", borderRadius: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                sx={{ objectFit: "contain" }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              />
            </Card>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Card sx={{ maxWidth: 250, margin: "auto", borderRadius: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                sx={{ objectFit: "contain" }}
                image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
            </Card>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Card sx={{ maxWidth: 250, margin: "auto", borderRadius: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                sx={{ objectFit: "contain" }}
                image="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
