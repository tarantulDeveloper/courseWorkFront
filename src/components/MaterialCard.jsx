import React from "react";
import {Button} from "react-bootstrap";
import {FiShoppingCart} from "react-icons/fi";

const MaterialCard = ({material, handleChoice, isAdmin, deleteItem, setSelectedCount}) => {

  const handleClick = (name) => {
    handleChoice(name);
    setSelectedCount((prev) => prev + 1);
  };


  return (
    <div className=" col-sm-12 col-md-4 col-lg-3 mb-3 d-flex align-items-stretch justify-content-center">

      <div className="card" style={{width: "18rem"}}>
        <img
          src={`data:${material.fileType};base64, ${material.data}`}
          className="card-img-top img-fluid"
          alt="..."
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{material.name}</h5>
          <p className="card-text">
            {material.description} <br/>
            Category: {material.category.name} <br/>
            Quantity: {material.quantity} <br/>
            Size: {material.size} <br/>
            Price: {material.price}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <Button
            variant="outline-success"
            onClick={() => handleClick(material.name)}
          >
            Add To <FiShoppingCart/>
          </Button>
          {isAdmin !== null ?
            <Button variant="outline-danger" onClick={() => deleteItem(material.id)}>Delete</Button> : ""}

        </div>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">Category: {material.category.name}</li>
          <li className="list-group-item">Quantity: {material.quantity}</li>
          <li className="list-group-item">Size: {material.size}</li>
          <li className="list-group-item">Price: {material.price}</li>
        </ul> */}
        {/* <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default MaterialCard;
