import CarDetail from "../components/CarDetail";
import { Container, Typography } from "@mui/material";

const CarDetailPage = () => (
  <Container maxWidth='100vw'>
    <Typography variant="h2" gutterBottom>
      Car Details
    </Typography>
    <CarDetail />
  </Container>
);

export default CarDetailPage;
