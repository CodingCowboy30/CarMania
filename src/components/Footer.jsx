import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => (
  <Box bgcolor="text.secondary" color="white" py={2} textAlign="center">
    <Typography variant="h4">
      &copy; 2024 Car(r) Mania. All Rights Reserved. 
    </Typography>
     <Box>
          <IconButton href="https://www.facebook.com" target="_blank" color="inherit" aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton href="https://www.twitter.com" target="_blank" color="inherit" aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" color="inherit" aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton href="https://www.linkedin.com" target="_blank" color="inherit" aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
        </Box>
  </Box>
);

export default Footer;
