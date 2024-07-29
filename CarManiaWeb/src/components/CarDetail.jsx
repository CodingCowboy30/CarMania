import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareIcon from '@mui/icons-material/Compare';
import ShareIcon from '@mui/icons-material/Share';

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
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", md: "70%" },
          padding: 2,
          boxShadow: "9px 15px 20px #000000",
          border: "2px solid #392b2b54",
        }}
      >
        <CardMedia
          component="img"
          height="400"
          sx={{ width: "100%", objectFit: "contain" }}
          image={car.photo}
          alt={car.model}
        />
        <CardContent>
          <Typography variant="h4" component="div" color="text.primary">
            {car.make} {car.model}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {car.year} - ${car.price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Mileage: {car.mileage} miles
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Rating: {car.rating} / 5
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Availability: {car.status}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Box display="flex" justifyContent="space-between">
            <Button variant="outlined" startIcon={<FavoriteIcon />}>Favorite</Button>
            <Button variant="outlined" startIcon={<CompareIcon />}>Compare</Button>
            <Button variant="outlined" startIcon={<ShareIcon />}>Share</Button>
          </Box>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="body1" color="text.secondary">
            All Inclusive Price
          </Typography>
          <Typography variant="body2" color="text.secondary">
            - Road Tax
          </Typography>
          <Typography variant="body2" color="text.secondary">
            - 1-Year Warranty on tire, engine, and drivetrain
          </Typography>
          <Typography variant="body2" color="text.secondary">
            - Ownership Transfer Fee
          </Typography>
          <Typography variant="body2" color="text.secondary">
            - Free Inspection Twice per Year(3Years)
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "blue",
            borderRadius: "30px",
            padding: "12px 24px",
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "darkblue",
            },
          }}
        >
          Buy Car
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "gold",
            borderRadius: "30px",
            padding: "12px 24px",
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "darkgoldenrod",
            },
          }}
        >
          Free Test Drive
        </Button>
      </Box>
    </Box>
  );
};

export default CarDetails;