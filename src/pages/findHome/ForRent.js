import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
// import { Link } from "react-router-dom";
import Button from "../../components/button";
import "./findHome.css";
const ForRent = () => {
  return (
    <div>
      <div className="Find">
        <h1>
          Find Your <br /> Dream Home
        </h1>
        <div className="mainContainer bg-light mb-4 container-fluid">
          <div className="justify-content- row d-flex col-12 p-4 ">
            <Box sx={{ minWidth: 120 }} className="col-lg-3 col-md-3 col-4">
              <label>Location</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ minWidth: 120 }} className="col-lg-3 col-md-3 col-4">
              <label>Types Of Properties</label>
              <FormControl fullWidth>
                <Select label="" id="demo-simple-select">
                  <MenuItem value={1}>Apartment</MenuItem>
                  <MenuItem value={2}>Villa</MenuItem>
                  <MenuItem value={3}>Farm House</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }} className="col-lg-3 col-md-3 col-4">
              <label>Rooms</label>
              <FormControl fullWidth>
                <Select label="" id="demo-simple-select">
                  <MenuItem value={1}>2 BHK</MenuItem>
                  <MenuItem value={2}>3 BHK</MenuItem>
                  <MenuItem value={3}>4 BHK</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }} className="col-lg-3 col-md-3 col-4">
              <label>Price</label>
              <FormControl fullWidth>
                <Select label="" id="demo-simple-select">
                  <MenuItem value={1}>10k-20k</MenuItem>
                  <MenuItem value={2}>20k-30k</MenuItem>
                  <MenuItem value={3}>30k-40k</MenuItem>
                  <MenuItem value={3}>40k-50k</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }} className="col-lg-3 col-md-3 col-4">
              <div className="d-flex mt-4">
                <h6 className="text-muted m-3">Clear Filter</h6>
                <Button title="Search" />
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForRent;
