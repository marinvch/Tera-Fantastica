import React from "react";
import Carousel from "../components/Carousel";
import BooksData from "../assets/books/books.json";
import { Grid } from "@mui/material";

const Books = () => {
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Grid item xs={5}>
        <Carousel data={BooksData} />
      </Grid>
    </Grid>
  );
};

export default Books;
