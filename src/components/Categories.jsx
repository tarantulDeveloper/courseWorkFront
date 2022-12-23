import React, {useEffect, useState} from "react";
import CategoryServices from "../services/CategoryServices";

const Categories = ({changeRadio}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  },[]);

  const fetchCategories = () => {
    CategoryServices.fetchCategories().then((res) => {
      setCategories(res.data);
    });
  };

  return (
    <div className="form-check ">
      {categories.map((category) => (
        <div key={category.id} >
          <input
            className="form-check-input"
            type="radio"
            value={category.name}
            name="category"
            id={category.id}
            onChange = {(e) => changeRadio(e.target.value)}
          />
          <label className="form-check-label" htmlFor={category.id}>
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Categories;
