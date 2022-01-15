import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ProductCard({ products }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={products?.img}
          alt="green plant"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "#798f18", fontWeight: "bold" }}
          >
            {products?.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${products?.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {products?.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
