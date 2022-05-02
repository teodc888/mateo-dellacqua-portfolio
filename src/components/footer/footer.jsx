import React from "react";

import { Container, Grid, Box, Link, Avatar, Typography } from "@mui/material";

//Fab
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        sx={{ marginTop: "5%", bgcolor: "#263238", borderRadius:"20px" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1} textAlign="center">
                <Typography>Redes Laborales </Typography>
              </Box>
              <Box>
                <Link href="https://github.com/teodc888" color="inherit">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "40%",
                      background: "black",
                    }}
                  />{" "}
                  Github
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.linkedin.com/in/mateo-dellacqua-castro/"
                  color="inherit"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "40%",
                      background: "#3b5998",
                    }}
                  />{" "}
                  Linkedin
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1} textAlign="center">
                {" "}
                Redes Sociales
              </Box>
              <Box>
                <Link href="https://wa.me/3512550311" color="inherit">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "40%",
                      backgroundColor: "#25d366",
                    }}
                  />{" "}
                  Whatsapp
                </Link>
              </Box>
              <Box>
                <Link href="https://www.instagram.com/" color="inherit">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "40%",
                      background:
                        "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
                    }}
                  />{" "}
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="https://twitter.com/DellacquaTeo" color="inherit">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "40%",
                      background: "#3b5998",
                    }}
                  />{" "}
                  Twitter
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar
              src={
                "https://yt3.ggpht.com/ytc/AKedOLTSELq6LPkngAX-1NXibLVpiRecHxsjTGFX5Tx-3g=s900-c-k-c0x00ffffff-no-rj"
              }
              sx={{ position: "static", mr: "1.5%" }}
              alt="Teo"
            />
            <Typography
              variant="h7"
              color="textPrimary"
              sx={{ mt: "0.5%", color: "white" }}
            >
              MATEO DELLACQUA CASTRO &reg; {new Date().getFullYear()}
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
