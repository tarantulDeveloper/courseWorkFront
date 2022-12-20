import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const AddMaterialPage = () => {
  const navigate = useNavigate();

  const [material, setMaterial] = useState({
    id: "",
    price: "",
    category: "",
    materialName: "",
    quantity: "",
    size: "",
    description: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setMaterial({ ...material, [e.target.name]: value });
  };

  const onImageChange = (e) => {
    setMaterial({ ...material, file: e.target.files[0] });
  };

  return (
    <div>
      <Header />
      <form>
        <label htmlFor="materialName">Material Name</label>
        <input type="text" 
        name="materialName"
        id="materialName"/>
      </form>
    </div>
  );
};

export default AddMaterialPage;
