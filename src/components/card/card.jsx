import * as React from "react";

import {
  CardActionArea,
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
    <Card sx={{ maxWidth: 450, margin: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
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
            <Button size="small">GitHub</Button>
          </Link>
          <Link href={link}>
            <Button size="small">Ver</Button>
          </Link>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
