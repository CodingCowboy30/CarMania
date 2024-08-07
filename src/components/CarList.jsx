/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import CarCard from "./CarCard";

const CarList = ({ cars }) => (
  <Grid container spacing={3}>
    {cars.map((car) => (
      <Grid item xs={2} sm={4} md={4} key={car._id}>
        <CarCard car={car} />
      </Grid>
    ))}
  </Grid>
);

export default CarList;
