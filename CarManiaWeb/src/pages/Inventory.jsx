import { useState, useEffect } from "react";
import axios from "axios";
import CarList from "../components/CarList";
import { Container, Typography } from "@mui/material";

const Inventory = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cardata");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <Container maxWidth={false}>
      <Typography variant="h2" gutterBottom>
        Inventory
      </Typography>
      <CarList cars={cars} />
    </Container>
  );
};

export default Inventory;
