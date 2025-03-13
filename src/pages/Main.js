import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import axios from "axios";
import { AppBar, Toolbar, Typography, Button, MenuItem, TextField, Box, IconButton } from "@mui/material";

const Main = () => {
  const [destinations, setDestinations] = useState([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/destination").then((res) => {
      setDestinations(res.data);
    });
  }, []);

  const onSubmit = async (values) => {
    const payload = { ...values, adults, children };
    await axios.post("http://localhost:5000/hotels", payload);
    navigate("/hotels", { state: { destinationId: values.destination } });
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 3 }}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* Destination */}
            <Field name="destination">
              {({ input }) => (
                <TextField
                  select
                  label="Destination"
                  {...input}
                  fullWidth
                  required
                  sx={{ marginTop: 2 }}
                >
                  {destinations.map((dest) => (
                    <MenuItem key={dest.id} value={dest.value}>{dest.label}</MenuItem>
                  ))}
                </TextField>
              )}
            </Field>

            {/* Check-in date */}
            <Field name="checkIn">
              {({ input }) => (
                <TextField
                  label="Check-in Date"
                  type="date"
                  {...input}
                  fullWidth
                  required
                  sx={{ marginTop: 2 }}
                  InputLabelProps={{ shrink: true }}
                />
              )}
            </Field>

            {/* Check-out date */}
            <Field name="checkOut">
              {({ input }) => (
                <TextField
                  label="Check-out Date"
                  type="date"
                  {...input}
                  fullWidth
                  required
                  sx={{ marginTop: 2 }}
                  InputLabelProps={{ shrink: true }}
                />
              )}
            </Field>

            {/* Adults & Children */}
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
              <Box>
                <Typography>Adults: {adults}</Typography>
                <IconButton onClick={() => setAdults(adults + 1)}>➕</IconButton>
                <IconButton onClick={() => adults > 1 && setAdults(adults - 1)}>➖</IconButton>
              </Box>

              <Box>
                <Typography>Children: {children}</Typography>
                <IconButton onClick={() => setChildren(children + 1)}>➕</IconButton>
                <IconButton onClick={() => children > 0 && setChildren(children - 1)}>➖</IconButton>
              </Box>
            </Box>

            {/* Submit button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "yellow", color: "black", marginTop: 3 }}
            >
              Submit
            </Button>
          </form>
        )}
      />
      <Typography variant="h4" textAlign="center" sx={{ marginTop: 2 }}>
        Book Your Hotel
      </Typography>
    </Box>
  );
};

export default Main;
