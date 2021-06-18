import React from "react";
import "./Product.css";
import { Box, Typography, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
export default function Product() {
  return (
    <Box>
      <Container>
        <Box className="header-wrapper">
          <Typography variant="h5">Product Lists</Typography>
          <Link to="/product/form" className="product-link-button">
            <Button
              variant="contained"
              color="secondary"
              className="product-button1"
              size="small"
            >
              <AddIcon />
              New Data
            </Button>
          </Link>
        </Box>
        <Box className="product-textfield">
          <div className="product-lab-input1">
            <label>Search</label>
            <input type="text" className="inputfield1" placeholder="Keyword" />
          </div>
          <div className="product-lab-input3">
            <label>Sort by</label>
            <select name="" id="" className="inputfield3">
              <option value="">Newest</option>
              <option value="">Oldest</option>
              <option value="">Name</option>
            </select>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
