import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const HotelCard = ({ hotel }) => (
  <Card sx={{ margin: 2, padding: 2 }}>
    <CardContent>
      <Typography variant="h5">{hotel.name}</Typography>
      <Typography>{hotel.address}</Typography>
      <Typography color="textSecondary">
        {hotel.city}, {hotel.state || ""}, {hotel.country_code}
      </Typography>
      <Typography>Rating: {hotel.hotel_rating}</Typography>
      {hotel.phone_number && <Typography>📞 {hotel.phone_number}</Typography>}
    </CardContent>
  </Card>
);

export default HotelCard;
