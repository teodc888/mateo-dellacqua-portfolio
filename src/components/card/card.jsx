import * as React from "react";

import {
  Link,
  Button,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardP({ imagen, titulo, descripcion, github, link }) {
  return (
    <Card
      sx={{
        maxWidth: 450,
        margin: "auto",
        transition: "all 0.3s ease-in-out",
        ":hover": { transform: "scale(1.1)" },
        borderRadius: "20px",
        bgcolor: "#37474f",
        boxShadow: "0px 0px 1 0px #37474f",
      }}
    >
      <CardMedia
        component="img"
        height="255"
        image={imagen}
        alt="green iguana"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={github}>
          <Button
            size="small"
            sx={{
              color: "white",
              background:
                "linear-gradient(45deg, #263238, #263238, #263238, #263238, #263238, #263238)",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #263238",
              transition: "all 0.3s ease-in-out",
              ":hover": { transform: "scale(1.1)" },
            }}
          >
            GitHub
          </Button>
        </Link>
        <Link href={link}>
          <Button
            size="small"
            sx={{
              color: "white",
              background:
                "linear-gradient(45deg, #263238, #263238, #263238, #263238, #263238, #263238)",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #263238",
              transition: "all 0.3s ease-in-out",
              ":hover": { transform: "scale(1.1)" },

            }}
          >
            Ver
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
