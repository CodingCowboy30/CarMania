import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import SellCar from "./pages/SellCar";
import Contact from "./pages/Contact";
import CarDetailPage from "./pages/CarDetailPage";


const App = () => (
  <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sell" element={<SellCar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car/:id" element={<CarDetailPage />} />
      </Routes>
      <Contact />
      {/* This will render the Contact button and modal on every page */}
    <Footer />
    
  </Router>
);

export default App;
