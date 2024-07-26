import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cardata/${id}`);
        setCar(response.data);
      } catch (err) {
        console.error("Error fetching car data:", err); // Log the error for debugging
        setError(err); // Set the error state
      }
    };
    fetchCar();
  }, [id]);

  if (error) {
    return <div>Error loading car details: {error.message}</div>; // Display error message
  }

  if (!car) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: "center",
        gap: 4,
        padding: 2,
      }}
    >
      <Card sx={{ width: { xs: "100%", md: "30%" }, margin: 2, padding: 2 }}>
        <CardMedia
          component="img"
          height="300"
          sx={{ width: "100%", objectFit: "contain" }}
          image={car.photo}
          alt={car.model}
        />
      </Card>
      <CardContent sx={{ width: { xs: "100%", md: "60%" } }}>
        <Typography variant="h3" component="div">
          {car.make} {car.model}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {car.year} - ${car.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mileage: {car.mileage} miles
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {car.rating} / 5
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {car.status}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default CarDetails;
