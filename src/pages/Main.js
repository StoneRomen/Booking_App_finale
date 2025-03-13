import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import axios from "axios";
import { Typography, Button, MenuItem, TextField, Box, IconButton, InputAdornment } from "@mui/material";

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
    <Box sx={{ width: "80%", margin: "auto", marginTop: "10px", padding: 2, boxShadow: "0px 4px 10px rgba(255, 165, 0, 0.8)", borderRadius: 2, backgroundColor: "white" }}>
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
                  sx={{ marginTop: 2, flex: 2 }}
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
                    type="date"
                    {...input}
                    required
                    sx={{ flex: 2 }}
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Check in</InputAdornment>
                      ),
                    }}
                  />
                )}
              </Field>

              {/* Check-out date */}
              <Field name="checkOut">
                {({ input }) => (
                  <TextField
                    type="date"
                    {...input}
                    required
                    sx={{ flex: 2 }}
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Check out</InputAdornment>
                      ),
                    }}
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
              sx={{ backgroundColor: "yellow", color: "black", marginTop: 3, flex: 0.5 }}
            >
              Submit
            </Button>
          </form>
        )}
      />
    </Box>
  );
};

export default Main;
