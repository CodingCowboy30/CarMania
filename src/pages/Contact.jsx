import { Box, TextField, Button, Container } from "@mui/material";

const Contact = () => (
  <Container>
  <Box component="form" display="flex" flexDirection="column" gap={2}>
    <Box sx={{paddingTop:"280px"}}></Box>
    <TextField name="name" label="Name" variant="outlined" />
    <TextField name="email" label="Email" variant="outlined" />
    <TextField
      name="message"
      label="Your Message"
      variant="outlined"
      multiline
      rows={4}
    />
    
    <Button type="submit" variant="contained" color="primary" sx={{
              width: "150px",
              margin: "auto",
              display: "block",
              padding: "10px 20px ",
              fontSize: "16px",
            }}>
      Send
    </Button>
    <Box sx={{padding:"180px"}}></Box>
  </Box>
  </Container>
);

export default Contact;
