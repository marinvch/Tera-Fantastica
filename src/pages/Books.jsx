import React from "react";
import Carousel from "../components/Carousel";
import BooksData from "../assets/books/books.json";
import { Grid } from "@mui/material";

const Books = () => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ marginLeft: "240px", minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Carousel data={BooksData} />
      </Grid>
    </Grid>
  );
};

export default Books;
