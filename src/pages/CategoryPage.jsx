import React, { useEffect, useState } from "react";
import CategoryServices from "../services/CategoryServices";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const CategoryPage = () => {
  const navigate = useNavigate();
  const [categoryN, setCategoryN] = useState({
    categoryName: "",
  });
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    CategoryServices.fetchCategories().then((res) => {
      setCategories(res.data);
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCategoryN({ ...categoryN, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(categoryN);
    CategoryServices.createCategory(categoryN)
      .then((res) => {
        console.log(res);
        fetchCategories();
        setCategoryN({categoryName: ""})
      })
      .catch((e) => console.log(e.message));
  };

  const handleDelete = (name, id) => {
    setSelectedCategory(name);
    setSelectedId(id);
    handleShow();
  };

  const deleteCategory = (id) => {
    CategoryServices.deleteCategory(id).then((res) => {
      console.log(res);
      fetchCategories();
      handleClose();
    });
  };
  return (
    <div>
      <Header />

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton style={{ background: "#bdbdbd" }}>
          <Modal.Title>Delete {selectedCategory}?</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#f2f2f2" }} className=""></Modal.Body>
        <div className="d-flex w-100 justify-content-around p-4">
          <Button variant="outline-success" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => deleteCategory(selectedId)}
          >
            Delete
          </Button>
        </div>
      </Modal>

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-10 col-lg-8 mt-5">
            <h4>All categories:</h4>
            <ol>
              {categories.map((category) => (
                <li key={category.id} className="d-flex justify-content-between mt-2 bg-info p-2">
                  {category.name}
                  <Button variant="danger"  className="p-0"
                    onClick={() => handleDelete(category.name, category.id)}
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ol>

            <form
              className="d-flex flex-column"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label htmlFor="categoryName">New Category Name</label>
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                id="categoryName"
                name="categoryName"
                value={categoryN.categoryName}
              />
              <input type="submit" value="Add Category" className="mt-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
