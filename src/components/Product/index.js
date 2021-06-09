import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import UseStyles from "./styles";

const product = ({ product, handleAddToCart }) => {
  const classes = UseStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.images[0].src}
        title={product.title}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h6">${product.variants[0].price}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="textSecondary" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(product.variants[0].id,1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default product;
