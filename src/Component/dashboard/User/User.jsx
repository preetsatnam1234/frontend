import {
  Button,
  Grid,
  Typography,
  Container,
  IconButton,
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableHead,
  TableContainer,
} from "@material-ui/core";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { MenuItem, Menu, Toolbar } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ListIcon from "@material-ui/icons/List";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
const User = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [users, setUsers] = useState([]);
  const [deleteUser, setDeleteUser] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    fetch("http://localhost:8080/api/user?limit=100").then((result) => {
      result.json().then((resp) => setUsers(resp.data.users));
    });
  };

  console.log(users);
  let handleDelete = (id) => {
    // const newUser = users.filter((item) => item.id !== id);
    // setUsers(newUser);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8080/api/user/${id}`, {
          method: "DELETE",
        }).then((resp) => {
          resp.json().then((result) => setUsers(result));
          getUser();
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleUpdate = (id) => {
    console.log(id);
  };
  return (
    <Grid className="user-board">
      <Container>
        <Grid className="user-display">
          <Typography variant="h5">Users List</Typography>
          <Link to="/User/Form" className="user-link">
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
          <div className="lab-input2">
            <label>Role</label>
            <select className="inputfield2">
              <option value="">All Role</option>
              <option value="">Admin</option>
              <option value="">Cashier</option>
            </select>
          </div>
          <div className="lab-input3">
            <label>Sort by</label>
            <select name="" id="" className="inputfield3">
              <option value="">Newest</option>
              <option value="">Oldest</option>
              <option value="">Name</option>
              <option value="">Last Active</option>
            </select>
          </div>
        </Grid>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UserName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Last Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length &&
                users.map((item) => (
                  <TableRow Key={item._id} className="table_row1">
                    <TableCell>{item.fullname}</TableCell>
                    <TableCell>{item.username}</TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell>{item.lastActive}</TableCell>
                    <TableCell className="user-Icons">
                      {" "}
                      <Toolbar className="icon_bar_one">
                        <IconButton className="icon-bar">
                          <ListIcon
                            onClick={handleClick}
                            className="user-icon1"
                          />
                        </IconButton>
                      </Toolbar>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>
                          <VisibilityIcon />
                          Detail
                        </MenuItem>
                        <MenuItem onClick={() => handleUpdate(item._id)}>
                          <EditIcon />
                          Edit
                        </MenuItem>
                        <MenuItem onClick={() => handleDelete(item._id)}>
                          <DeleteIcon />
                          Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Grid>
  );
};
export default User;
