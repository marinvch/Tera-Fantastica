import React from "react";
import Carousel from "../components/Carousel";
import magazineData from "../assets/magazines/magazines.json";
import { Grid } from "@mui/material";

const Magazines = () => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ marginLeft: "240px", minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Carousel data={magazineData} />
      </Grid>
    </Grid>
  );
};

export default Magazines;
