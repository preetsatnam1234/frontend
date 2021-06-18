import React, { useState } from "react";
import "./User.css";
import { Container, Box } from "@material-ui/core";
function UserForm() {
  let [userData, setUserData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });
  let [allUserData, setAllUserData] = useState([]);
  let handleChangeUserData = (e) => {
    let newUserData = { ...userData, [e.target.name]: e.target.value };
    setUserData(newUserData);
  };

  let handleSubmitUserData = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((result) => {
      result.json().then((item) => console.log(item));
    });
  };
  return (
    <div>
      <Container>
        <h3>Update Account</h3>
        <div className="card userform-card">
          <form onChange={handleChangeUserData} onSubmit={handleSubmitUserData}>
            <div className="row form-wrapper1">
              <div className="col-12 col-sm-6 form-input1">
                {" "}
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={userData.fullname}
                  className="inputField1"
                />
              </div>
              <div className="col-12 col-sm-6 form-input2">
                {" "}
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  className="inputField2"
                />
              </div>
            </div>
            <div className="row form-wrapper2">
              <div className="col-12 col-sm-6 form-input1">
                {" "}
                <label htmlFor="">Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={userData.email}
                  className="inputField1"
                />
              </div>
              <div className="col-12 col-sm-6 form-input2">
                {" "}
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  className="inputField2"
                />
              </div>
            </div>
            <div className="row form-wrapper3">
              <div className="col-12 col-sm-6 form-input3">
                <div className="lab-input4">
                  <label>Role</label>
                  <select
                    className="inputField3"
                    value={userData.role}
                    name="role"
                  >
                    <option>All Role</option>
                    <option>Admin</option>
                    <option>Cashier</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-button-wrapper">
              <button type="submit" className="form-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default UserForm;
