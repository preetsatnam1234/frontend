import React, { useState } from "react";
import "./Category.css";
import { Container, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
function FormCategory() {
  const [categoryValue, setCategoryValue] = useState({});
  const handleInputField = (e) => {
    const newCategoryValue = {
      ...categoryValue,
      [e.target.name]: e.target.value,
    };
    setCategoryValue(newCategoryValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/category", {});
  };
  return (
    <Container>
      <Typography variant="h5">Form Category</Typography>
      <Card className="form-category">
        <Typography className="form-category_header1">Category Name</Typography>
        <form onChange={handleInputField} onSubmit={handleSubmit}>
          <input
            type="text"
            className="category-textfield"
            placeholder="  Placeholder"
            name="name"
            value={categoryValue.name}
          />
          <Button
            type="submit"
            className="category-button"
            size="medium"
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
}

export default FormCategory;
