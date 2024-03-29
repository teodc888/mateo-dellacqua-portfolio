import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#263238",
    borderRadius: "20px",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid white",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid white",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#2196f3 #2196f3 transparent transparent",
      borderWidth: "0.525rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "white",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #2196f3 #2196f3",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "white",
    background: "#2196f3",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "white",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#2196f3",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#1565c0",
  },
  subtitle1: {
    color: "white",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h5" align="center" className={classes.heading}>
          <Typed
            strings={["        Experiencia Laboral"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021
          </Typography>
          <Box
            component="div"
            className={classes.timeLineItem}
            data-aos="fade-right"
          >
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Full-stack Developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              Henry
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
              <p>
                EXPERIENCIA ACADÉMICA BOOTCAMP HENRY Desarrollo de una SPA
                (Single Page Application) sobre Paises
              </p>{" "}
              <p>
                .Para el Front-End se utilizó React y Redux como State
                Management{" "}
              </p>{" "}
              <p>
                . Todos los componentes tuvieron estilos con CSS puro, sin el
                uso de librerías externas o frameworks{" "}
              </p>{" "}
              <p>
                . La SPA consume datos de una API (restcountries) a través de
                una Back-End desarrollado con Node JS utilizando Express,
                agregando nuevas funcionalidades a la API original y almacenando
                toda la informacion necesaria en nuestra Base De Datos
                (PostgreSQL){" "}
              </p>{" "}
              <p>
                . Algunos features del proyecto: Cache de búsquedas,
                ordenamientos y filtros, formulario controlado para la creación
                de actividades, que luego se almacenan en una base de datos{" "}
              </p>{" "}
              <p>. Para la misma, se utilizó Sequelize y PostgreSQL. </p>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021
          </Typography>
          <Box
            component="div"
            className={classes.timeLineItem}
            data-aos="fade-right"
          >
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Desarrollador de front-end Proyecto Grupal
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              Henry
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
              <p>
                - Desarrollo de un Proyecto Grupal de 3 semanas necesario para
                la aprobación del curso{" "}
              </p>{" "}
              <p> - Temática: ecommerce de venta de zapatillas ADIDAS.</p>{" "}
              <p>
                {" "}
                - Para el mismo se utilizo la metodologia SCRUM y tecnologías
                como: React, Redux, Material UI, Sequelize, Express, Checkout
                Pro Mercado pago, auth0 Sengrid.Sengrid.{" "}
              </p>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2022
          </Typography>
          <Box
            component="div"
            className={classes.timeLineItem}
            data-aos="fade-right"
          >
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Desarrollador Front-End
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.body1}
            >
              Nuevos Rumbos
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
              <p>
                Desarrollo ecommerce de venta de autos, motos y repuestos de gnc
              </p>{" "}
              <p>
                .Para el Front-End se utilizó React y Redux como State
                Management{" "}
              </p>{" "}
              <p>. Todos los componentes tuvieron estilos con Material Ui</p>{" "}
              <p>. El Ecommerce consume datos de Firebase </p>{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
  );
};

export default Resume;
