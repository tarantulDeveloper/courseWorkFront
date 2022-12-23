import {FC, useContext, useEffect, useState} from "react";
import {TfiShoppingCart} from "react-icons/tfi";
import {NavLink, useNavigate} from "react-router-dom";
import "./Header.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthServices from "../services/AuthServices";
import ChoiceService from "../services/ChoiceService";
import Beaver from "../img/beaver.png"

const Header = ({selectedCount}) => {
  const [isPassed, setIsPassed] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [username, setUsername] = useState(null);
  const [admin, setAdmin] = useState(null);

  const [choices, setChoices] = useState([]);

  const [order, setOrder] = useState({
    "id": "",
    "orderName": "",
    "phone": "",
    "address": "",
    "message": "",
    "choiceList":[]
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setOrder({...order, [e.target.name]: value});
  };

  useEffect(() => {
    (() => {
      if (selectedCount !== undefined) {
        setIsPassed(true)
      }
      getDataFromLocalStorage();
      getAllChoices();
    })();
  }, [])


  const getAllChoices = () => {
    ChoiceService.getAllChoices()
      .then((res) => {
        setChoices(res.data);
        setOrder({...order, choiceList: res.data})
      })
      .catch((error) => console.log(error.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteChoices();
    ChoiceService.createOrder(order).then(res => console.log(res)).catch(e => console.log(e.message));
  }

  const deleteChoices = () => {
    ChoiceService.deleteChoices().then()
  }

  const getDataFromLocalStorage = () => {
    setUsername(localStorage.getItem("user"));
    setAdmin(localStorage.getItem("admin"));
  };

  const logout = () => {
    AuthServices.logout().then((res) => {
      localStorage.removeItem("user");
      localStorage.removeItem("admin");
      setUsername(null);
      navigate("/");
    });
  };

  return (
    <nav className="navbar navbar-expand-md text-white px-3">
      <div className="container-fluid">
        <img src={Beaver} className='img-fluid' style={{width: '100px', heigth: '30px'}}/>
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
              {admin == null ? "" : <NavLink to="/admin">Worker+</NavLink>}
            </li>
            <li className="nav-item">
              {admin == null ? "" : <NavLink to="/workers">Workers List</NavLink>}
            </li>
            <li className="nav-item">
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="nav-item">
              {username == null ? (
                ""
              ) : (
                <NavLink to="/add-material">Material+</NavLink>
              )}
            </li>

            <li className="nav-item">
              {username == null ? (
                ""
              ) : (
                <NavLink to="/add-category">Category+</NavLink>
              )}
            </li>
            <li className="nav-item">
              {username == null ? "" : <NavLink to='/orders'>Orders</NavLink>}
            </li>

            <li
              className="nav-item myCart"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={handleShow}
            >
              <TfiShoppingCart/>
              <div className="myround">
                {isPassed && <div>{selectedCount}</div>}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton style={{background: "#bdbdbd"}}>
          <Modal.Title>Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: "#f2f2f2"}}>
          <p className="text-center">
            We are available 24/7, so don't hesitate to contact us.
          </p>
          <div className="text-center">
            You choose:
            {choices == null ? (
              ""
            ) : (
              <div>
                {choices.map((c) => (
                  <div key={c.id}>{c.name}</div>
                ))}
              </div>
            )}
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" placeholder="Your name" name="orderName" value={order.orderName}
                            onChange={(e) => handleChange(e)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Phone</Form.Label>
              <Form.Control type="text" placeholder="Your Phone" name="phone" value={order.phone}
                            onChange={(e) => handleChange(e)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your address</Form.Label>
              <Form.Control type="text" placeholder="Your address" name="address" value={order.address}
                            onChange={(e) => handleChange(e)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" name="message" value={order.message}
                            onChange={(e) => handleChange(e)}/>
            </Form.Group>

            <div className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                type="submit"
                style={{background: "#fe7877", border: "none"}}
                onClick={(e) => handleSubmit(e)}
              >
                Order
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default Header;
