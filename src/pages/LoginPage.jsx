import React, { useState } from "react";
import AuthServices from "../services/AuthServices";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const LoginPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const LogIn = (e) => {
    e.preventDefault();
    AuthServices.login(user).then((res) => {
      localStorage.setItem("user", res.data.username);
      if(res.data.roles.length > 1) {
        localStorage.setItem("admin","true")
      }
      navigate("/");
    });
  };

  return (
    <div>
      <Header />
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden vh-100"
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your business
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              Beaver will help to facilitate the accounting of goods in the
              warehouse
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  name="username"
                  onChange={(e) => handleChange(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />

                <Button
                  variant="outline-primary"
                  className="w-100"
                  onClick={(e) => LogIn(e)}
                >
                  Sign in
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default LoginPage;
