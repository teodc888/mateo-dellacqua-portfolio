import React from "react";

//Mui
import { Grid, Box, CardMedia, Stack, Typography } from "@mui/material";

import Typed from "react-typed";

export default function Conocimientos() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#263238",
          height: "100%",
          borderRadius: "20px",
        }}
      >
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
              color: "#fff",
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
          sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}
        >
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Java Script
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  objectFit: "contain",
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                React Js
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://img.icons8.com/color/480/nodejs.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Node Js
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Express Js
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://www.freeiconspng.com/uploads/c-logo-icon-18.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                C#
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://img.icons8.com/color/480/microsoft-sql-server.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Sql Server
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://cdn.iconscout.com/icon/free/png-256/microsoft-dot-net-1-1175179.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                .Net
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://docs.angular.lat/assets/images/logos/angularjs/AngularJS-Shield.svg"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Angular
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://img.icons8.com/color/480/redux.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Redux
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://img.icons8.com/color/480/material-ui.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Material UI
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                  objectFit: "contain",
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Bootstrap
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Postgresql
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                GitHub
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                  objectFit: "contain",
                }}
                image="https://programaenlinea.net/wp-content/uploads/2016/06/scrum-arquitectura.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Scrum
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                  objectFit: "contain",
                }}
                image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Html
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 200,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                  objectFit: "contain",
                }}
                image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Css
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* responsivo */}
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 16, lg: 16 }}
          sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}
        >
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                  objectFit: "contain",
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                React Js
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://img.icons8.com/color/480/redux.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Redux
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://v4.material-ui.com/static/logo.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Material UI
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                  objectFit: "contain",
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Bootstrap
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://img.icons8.com/color/480/nodejs.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Node Js
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Express Js
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Postgresql
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Java Script
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                GitHub
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                  objectFit: "contain",
                }}
                image="https://programaenlinea.net/wp-content/uploads/2016/06/scrum-arquitectura.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Scrum
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://docs.angular.lat/assets/images/logos/angularjs/AngularJS-Shield.svg"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Angular
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://www.freeiconspng.com/uploads/c-logo-icon-18.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                C#
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://cdn.iconscout.com/icon/free/png-256/microsoft-dot-net-1-1175179.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                .Net
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://img.icons8.com/color/480/microsoft-sql-server.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Sql Server
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-left"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Html
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={4} lg={4}>
            <Box
              sx={{
                maxWidth: 100,
                margin: "auto",
                mb: "5%",
              }}
              data-aos="flip-right"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sx={{
                  transition: "all 0.3s ease-in-out",
                  ":hover": { transform: "scale(1.1)" },
                }}
                image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png"
              />
              <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                Css
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
