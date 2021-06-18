import React, { useState, useEffect } from "react";
import "./Category.css";
import {
  Button,
  Grid,
  Typography,
  Container,
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableHead,
  TableContainer,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
export default function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/category").then((result) => {
      result.json().then((resp) => setCategory(resp.data.categories));
    });
  }, []);
  console.log(category);
  return (
    <Grid className="user-board">
      <Container>
        <Grid className="user-display">
          <Typography variant="h5">Category Lists</Typography>
          <Link to="/category/form" className="link-button">
            <Button
              variant="contained"
              color="secondary"
              className="user-Button1"
              size="small"
            >
              <AddIcon />
              New Data
            </Button>
          </Link>
        </Grid>
        <Grid className="user-textfield">
          <div className="lab-input1">
            <label>Search</label>
            <input type="text" className="inputfield1" placeholder="Keyword" />
          </div>
          <div className="lab-input3">
            <label>Sort by</label>
            <select name="" id="" className="inputfield3">
              <option value="">Newest</option>
              <option value="">Oldest</option>
              <option value="">Name</option>
            </select>
          </div>
        </Grid>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>Category Name</TableRow>
            </TableHead>
            <TableBody>
              {category.map((item) => (
                <TableRow className="table-row1">
                  <TableCell className="table-cell1">{item.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Grid>
  );
}
