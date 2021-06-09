import React from "react";
import Grid from "@material-ui/core/Grid";
import Paginate from "../Paginate";
import Product from "../Product";

import useStyles from "./styles";

const ProductList = ({products, currentPage, totalPage, handlePageChange, handleAddToCart}) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
      <Paginate
        currentPage={currentPage}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      />
    </main>
  );
};

export default ProductList;
