import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/a/r/areca_medium_eyelevel_final.png"
          alt="green plant"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "#798f18", fontWeight: "bold" }}
          >
            Areca Palm Plant - Medium
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $19.2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
