import { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Typography,
} from "@mui/material";

const SellCar = () => {
  const [car, setCar] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    photo: "",
    rating: "",
    mileage: "",
    oneOwner: false,
    status: "Available",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCar({
      ...car,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/cardata", car);
      alert("Car submitted successfully!");
      setCar({
        make: "",
        model: "",
        year: "",
        price: "",
        photo: "",
        rating: "",
        mileage: "",
        oneOwner: false,
        status: "Available",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth={false}>
      <Typography variant="h2" gutterBottom>
        Sell Your Car
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <TextField
          name="make"
          label="Make"
          variant="outlined"
          value={car.make}
          onChange={handleChange}
        />
        <TextField
          name="model"
          label="Model"
          variant="outlined"
          value={car.model}
          onChange={handleChange}
        />
        <TextField
          name="year"
          label="Year"
          variant="outlined"
          type="number"
          value={car.year}
          onChange={handleChange}
        />
        <TextField
          name="price"
          label="Price"
          variant="outlined"
          type="number"
          value={car.price}
          onChange={handleChange}
        />
        <TextField
          name="photo"
          label="Photo URL"
          variant="outlined"
          value={car.photo}
          onChange={handleChange}
        />
        <TextField
          name="rating"
          label="Rating"
          variant="outlined"
          type="number"
          step="0.1"
          value={car.rating}
          onChange={handleChange}
        />
        <TextField
          name="mileage"
          label="Mileage"
          variant="outlined"
          type="number"
          value={car.mileage}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="oneOwner"
              checked={car.oneOwner}
              onChange={handleChange}
            />
          }
          label="One Owner"
        />
        <FormControl variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            label="Status"
            value={car.status}
            onChange={handleChange}
          >
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Sold">Sold</MenuItem>
            <MenuItem value="Pending Sale">Pending Sale</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default SellCar;
