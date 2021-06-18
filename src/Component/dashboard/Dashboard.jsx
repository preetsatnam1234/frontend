import React from "react";
import { Route, Switch } from "react-router";
import Category from "./Category/Category";
import "./Dashboard.css";
import NavBar from "./NavBar";
import Receipt from "./Receipt";
import SideBar from "./SideBar";
import User from "./User/User";
import Product from "./Product/Product";
import Transaction from "./Transaction";
import Home from "./Home";
import UserForm from "./User/UserForm";
import FormCategory from "./Category/FormCategory";
import FormProduct from "./Product/FormProduct";
export const Dashboard = () => {
  return (
    <div className="d-area">
      <SideBar />
      <NavBar />
      <div className="d-main-area">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/user/form" component={UserForm} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/category/form" component={FormCategory} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/form" component={FormProduct} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/receipt" component={Receipt} />
        </Switch>
      </div>
    </div>
  );
};
