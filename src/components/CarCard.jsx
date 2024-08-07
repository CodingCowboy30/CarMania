/* eslint-disable react/prop-types */
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const CarCard = ({ car }) => (
  <Card sx={{ boxShadow:'9px 15px 8px #0000009a' ,border:"2px solid #392b2b54", width: "90%", margin: 2, padding: 2}}>
    <CardMedia
      component="img"
      height="300"
      image={car.photo}
      alt={car.model}
      sx={{ objectFit: "scale-down" }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="div">
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
        Availability: {car.status}
      </Typography>
      <Typography variant="body2" color="text.secondary">
         One Owner: {car.oneOwner}
      </Typography>
    </CardContent>
    <Box sx={{ padding: 2 }}>
      <Button
        component={RouterLink}
        to={`/car/${car._id}`}
        variant="contained"
        sx={{
          color: "black",
          backgroundColor: "gold",
          borderRadius: "30px",
          padding: "12px 24px",
          fontSize: "16px",
          "&:hover": {
            backgroundColor: "darkgoldenrod",
          },
        }}
      >
        View Details
      </Button>
    </Box>
  </Card>
);

export default CarCard;
