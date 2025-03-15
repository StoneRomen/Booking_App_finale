import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelsRequest } from "../redux/hotelsSlice";
import { Box, Grid } from "@mui/material";
import HotelCard from "../components/HotelCard";

const Hotels = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const destinationId = location.state?.destinationId;

const { hotels, loading, error } = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotelsRequest(destinationId));
    }
  }, [destinationId, dispatch]);

  if (loading) return <p>Loading hotels...</p>;
  if (error) return <p>Error fetching hotels: {error}</p>;

  return hotels.length > 0 ? (
    <Box sx={{ marginTop: 4 }}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {hotels.map((hotel) => (
          <Grid item xs={12} sm={4} md={4} key={hotel.id}>
            <HotelCard hotel={hotel} />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <p>No hotels found for this destination.</p>
  );
};

export default Hotels;
