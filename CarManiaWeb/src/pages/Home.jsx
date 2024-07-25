import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import CarList from "../components/CarList";
import Filter from "../components/Filter";
import { Container, Box } from "@mui/material";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await axios.get("http://localhost:3000/cardata");
      setCars(response.data);
    };
    fetchCars();
  }, []);

  const handleSearch = async (criteria) => {
    const response = await axios.get("http://localhost:3000/cardata", {
      params: criteria,
    });
    setCars(response.data);
  };

  const handleFilter = async (criteria) => {
    const response = await axios.get("http://localhost:3000/cardata", {
      params: criteria,
    });
    setCars(response.data);
  };

  return (
    <Container maxWidth={false}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <SearchBar onSearch={handleSearch} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", height: "400vh" }}>
        <Box sx={{ flexBasis: "30%", marginRight: "20px" }}>
          <Filter onFilter={handleFilter} />
        </Box>
        <CarList cars={cars} />
      </Box>
    </Container>
  );
};

export default Home;
