import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import CarCard from "../components/CarCard"; // Import CarCard
import { Container, Box, Grid, } from "@mui/material";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      const response = await axios.get("http://localhost:3000/cardata");
      setCars(response.data);
    };
    fetchCars();
  }, []);

  const handleSearch = async (criteria) => {
    setSearchCriteria(criteria);
    const response = await axios.get("http://localhost:3000/cardata", {
      params: criteria,
    });
    setCars(response.data);
  };

  const handleFilter = async (criteria) => {
    const combinedCriteria = { ...searchCriteria, ...criteria };
    const response = await axios.get("http://localhost:3000/cardata", {
      params: combinedCriteria,
    });
    setCars(response.data);
  };

  return (
    <Container maxWidth={false}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <SearchBar onSearch={handleSearch} />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Filter onFilter={handleFilter} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {cars.map((car) => (
              <Grid item xs={12} sm={6} md={4} key={car._id}>
                <CarCard car={car} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
