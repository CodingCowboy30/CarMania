/* eslint-disable react/prop-types */
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
    <DialogTitle>Contact Us</DialogTitle>
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

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Contact Us
      </Button>
      <ContactModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Contact;
