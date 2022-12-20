import { FC, useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthServices from "../services/AuthServices";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [username, setUsername] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    getDataFromLocalStorage();
  });

  const getDataFromLocalStorage = () => {
    setUsername(localStorage.getItem("user"));
    setAdmin(localStorage.getItem("admin"));
    console.log(username);
  };

  const logout = () => {
    AuthServices.logout().then((res) => {
      localStorage.removeItem("user");
      localStorage.removeItem("admin");
      setUsername(null);
    });
  };

  return (
    <nav className="navbar navbar-expand-md text-white px-3">
      <div className="container-fluid">
        <a className="navbar-brand pink" href="#">
          Logo
        </a>
        {username == null ? "" : <NavLink to="/s">{username}</NavLink>}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {username == null ? (
                <Button
                  variant="outline-warning"
                  style={{
                    padding: "2px",
                    marginTop: "-5px",
                    maxHeight: "min-content",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              ) : (
                <Button
                  variant="outline-warning"
                  style={{
                    padding: "2px",
                    marginTop: "-5px",
                    maxHeight: "min-content",
                  }}
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              )}
            </li>
            <li className="nav-item">
              {admin == null ? "" : <NavLink to="/admin">Admin</NavLink>}
            </li>
            <li className="nav-item">
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              {username == null ? "" 
              : <NavLink to="/add-material" >
                  Add Material
                </NavLink>
              }
            </li>

            <li
              className="nav-item"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={handleShow}
            >
              <CiMail />
            </li>
          </ul>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton style={{ background: "#bdbdbd" }}>
          <Modal.Title>Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#f2f2f2" }}>
          <p className="text-center">
            We are available 24/7, so don't hesitate to contact us.
          </p>
          <div className="text-center">
            Sometstreet Ave, 987 <br />
            London, UK.
            <br />
            +44 8948-4343
            <br />
            contact@example.com
            <br />
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" />
            </Form.Group>

            <div className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                type="submit"
                style={{ background: "#fe7877", border: "none" }}
              >
                Send Message
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default Header;
