import React from "react";
import Carousel from "../components/Carousel";
import magazineData from "../assets/magazines/magazines.json";
import { Grid } from "@mui/material";

const Magazines = () => {
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center" >
      <Grid item xs={5}>
        <Carousel data={magazineData} />
      </Grid>
    </Grid>
  );
};

export default Magazines;
