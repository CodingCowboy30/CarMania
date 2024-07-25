import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

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
    <div className="car-detail">
      <Card>
        <CardMedia
          component="img"
          height="340"
          image={car.photo}
          alt={car.model}
        />
       
      </Card> <CardContent>
          <Typography variant="h5" component="div">
            {car.make} {car.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {car.year} - ${car.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mileage: {car.mileage} miles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {car.rating} / 5
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Availabilty: {car.status}
          </Typography>
        </CardContent>
    </div>
  );
};

export default CarDetails;
