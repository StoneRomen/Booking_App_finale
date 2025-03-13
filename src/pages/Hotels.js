import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HotelCard from "../components/HotelCard";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const location = useLocation();
  const destinationId = location.state?.destinationId;

  useEffect(() => {
    if (destinationId) {
      axios.get(`http://localhost:5000/hotels?city=${destinationId}`).then((res) => {
        setHotels(res.data);
      });
    }
  }, [destinationId]);

  return hotels.length > 0 ? (
    hotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
  ) : (
    <p>No hotels found for this destination.</p>
  );
};

export default Hotels;
