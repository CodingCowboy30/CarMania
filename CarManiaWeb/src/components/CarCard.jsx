/* eslint-disable react/prop-types */
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => (
  <Card  sx={{ width: "90%", margin: 2, padding: 2}}>
    <CardMedia 
    component="img" 
    height="300" 
    sx={{ width: '100%', objectFit: 'scale-down' }} 
    image={car.photo} 
    alt={car.model} 
  />
    <CardContent>
      <Typography variant="h5" component="div">
        {car.make} {car.model}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {car.year} - ${car.price}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Mileage: {car.mileage} miles
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Rating: {car.rating} / 5
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Availabilty: {car.status}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="large" component={Link} to={`/car/${car._id}`}>
        View Details
      </Button>
    </CardActions>
  </Card>
);

export default CarCard;
