import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";

const About = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, mt: 5, textAlign: "center" }}>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <HotelIcon sx={{ fontSize: 50, color: "orange" }} />
          <Typography variant="h4" fontWeight="bold">
            About Booking App
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mt: 2 }}>
          Welcome to <strong>Booking App</strong>, your ultimate solution for finding and reserving the perfect hotel for your next trip. Whether you're planning a vacation, a business trip, or a weekend getaway, our app makes it simple and convenient to browse, compare, and book accommodations in top destinations worldwide.
        </Typography>

        <Box sx={{ textAlign: "left", mt: 3 }}>
          <Typography variant="h6" fontWeight="bold">Why Choose Booking App?</Typography>
          <ul>
            <li>✅ <strong>Easy-to-Use Interface</strong> – Seamless booking experience.</li>
            <li>✅ <strong>Wide Range of Hotels</strong> – Find hotels across various locations.</li>
            <li>✅ <strong>Smart Search</strong> – Filter by location, rating, and amenities.</li>
            <li>✅ <strong>Secure & Fast Booking</strong> – Hassle-free and secure reservations.</li>
            <li>✅ <strong>Real-Time Availability</strong> – Get the latest room availability & pricing.</li>
          </ul>
        </Box>

        <Typography variant="body1" sx={{ mt: 2 }}>
          At <strong>Booking App</strong>, we believe in making travel effortless. Start your journey today by exploring our hotel options and booking your ideal stay with just a few clicks! 🌍🏨✨
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;

