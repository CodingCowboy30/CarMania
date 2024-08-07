/* eslint-disable react/prop-types */
/* Created a Contact Button that can be rendered on each page for easy access to connect to company*/
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";

const ContactModal = ({ open, handleClose }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Provide Feedback</DialogTitle>
    <DialogContent>
      <Box component="form" display="flex" flexDirection="column" gap={1}>
        <TextField name="name" label="Name" variant="outlined" fullWidth />
        <TextField name="email" label="Email" variant="outlined" fullWidth />
        <TextField
          name="message"
          label="Your Message"
          variant="outlined"
          multiline
          rows={3}
          fullWidth
        />
      </Box>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="warning">
        Cancel
      </Button>
      <Button onClick={handleClose} type="submit">
        Send
      </Button>
    </DialogActions>
  </Dialog>
);

const ContactButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button sx={{marginTop: "20px"}}variant="contained" color="warning" onClick={handleClickOpen}>
        Contact Us
      </Button>
      <ContactModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default ContactButton; 