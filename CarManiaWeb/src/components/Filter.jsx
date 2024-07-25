/* eslint-disable react/prop-types */

import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

const Filter = ({ onFilter }) => {
  const handleFilter = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    onFilter({
      make: data.get("make"),
      model: data.get("model"),
      year: data.get("year"),
      price: data.get("price"),
      rating: data.get("rating"),
      mileage: data.get("mileage"),
      oneOwner:
        data.get("oneOwner") === "true"
          ? true
          : data.get("oneOwner") === "false"
          ? false
          : "",
      status: data.get("status"),
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleFilter}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField name="make" label="Make" variant="outlined" />
      <TextField name="model" label="Model" variant="outlined" />
      <TextField name="year" label="Year" variant="outlined" type="number" />
      <TextField name="price" label="Price" variant="outlined" type="number" />
      <TextField
        name="rating"
        label="Rating"
        variant="outlined"
        type="number"
        step="0.1"
      />
      <TextField
        name="mileage"
        label="Mileage"
        variant="outlined"
        type="number"
      />
      <FormControl variant="outlined">
        <InputLabel>One Owner</InputLabel>
        <Select name="oneOwner" label="One Owner" defaultValue="">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="true">Yes</MenuItem>
          <MenuItem value="false">No</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel>Status</InputLabel>
        <Select name="status" label="Status" defaultValue="">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Available">Available</MenuItem>
          <MenuItem value="Sold">Sold</MenuItem>
          <MenuItem value="Pending Sale">Pending Sale</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Filter
      </Button>
    </Box>
  );
};

export default Filter;
