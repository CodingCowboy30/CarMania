/* eslint-disable react/prop-types */
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    onSearch({
      make: data.get("make"),
      model: data.get("model"),
      year: data.get("year"),
      price: data.get("price"),
    });
  };

  return (
    <Box component="form" onSubmit={handleSearch} display="flex" gap={2} my={2}>
      <TextField name="make" label="Make" variant="outlined" />
      <TextField name="model" label="Model" variant="outlined" />
      <TextField name="year" label="Year" variant="outlined" type="number" />
      <TextField name="price" label="Price" variant="outlined" type="number" />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
