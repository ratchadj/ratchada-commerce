import React from "react";
import Pagination from "@material-ui/lab/Pagination";

import useStyles from "./styles";

const Paginate = ({ currentPage, totalPage, handlePageChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={totalPage}
        page={currentPage}
        defaultPage={1}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Paginate;
