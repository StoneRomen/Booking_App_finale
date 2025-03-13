import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, Typography, Divider } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "orange",
                borderRadius: "50%",
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "orange" }}>
              Booking
            </Typography>
          </Box>

          <Box>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "white",
                backgroundColor: "orange",
                mx: 1,
                "&:hover": { backgroundColor: "#e69500" },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: "white",
                backgroundColor: "orange",
                mx: 1,
                "&:hover": { backgroundColor: "#e69500" },
              }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Divider sx={{ backgroundColor: "light-grey", height: 1, borderBottomWidth: 4 }} />
    </>
  );
};

export default Header;
