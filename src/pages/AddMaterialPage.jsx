import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import Header from "../components/Header";
import MaterialServices from "../services/MaterialServices";

const AddMaterialPage = () => {
  const navigate = useNavigate();

  const [material, setMaterial] = useState({
    id: "",
    price: 0,
    category: "",
    materialName: "",
    quantity: 0,
    size: "",
    description: "",
  });

  const [selectedRadio, setSelectedRadio] = useState("");
  const handleSelectRado = (selectedR) => {
    // setSelectedRadio(selectedR);
    // console.log(selectedR)
    setMaterial({...material, category: selectedR})
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setMaterial({ ...material, [e.target.name]: value });
  };

  const onImageChange = (e) => {
    setMaterial({ ...material, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log(material)
    MaterialServices.addMaterial(material)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((e) => console.log(e.message));
    
  };

  return (
    <div>
      <Header /> 
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-10 col-lg-8 mt-5">
            <form
              onSubmit={(e) => handleSubmit(e)}
              encType="multipart/form-data"
              className="d-flex flex-column"
            >
              <label htmlFor="materialName">Material Name</label>
              <input
                type="text"
                name="materialName"
                id="materialName"
                value={material.materialName}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="category">Category</label>
              <Categories changeRadio={handleSelectRado}/>
              
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                value={material.price}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={material.quantity}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="size">Size</label>
              <input
                type="text"
                name="size"
                id="size"
                value={material.size}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                value={material.description}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="file"
                name="file"
                id="file"
                onChange={(e) => onImageChange(e)}
              />

              <input type="submit" value="Submit" className="my-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMaterialPage;
