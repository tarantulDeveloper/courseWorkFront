import React, {useState} from 'react'
import Header from '../components/Header'
import AdminService from "../services/AdminService";
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const [worker, setWorker] = useState({
    "username": "",
    "email": "",
    "password": ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setWorker({...worker, [e.target.name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AdminService.createWorker(worker).then((res) => {
      console.log(res);
      navigate('/')
    })
    // console.log(material)
    //   MaterialServices.addMaterial(material)
    //     .then((res) => {
    //       console.log(res);
    //       navigate("/");
    //     })
    //     .catch((e) => console.log(e.message));
    //
  };


  return (
    <div>
      <Header/>
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-10 col-lg-8 mt-5">
            <form
              onSubmit={(e) => handleSubmit(e)}
              encType="multipart/form-data"
              className="d-flex flex-column"
            >
              <label htmlFor="username">Worker's Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={worker.username}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={worker.email}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={worker.password}
                onChange={(e) => handleChange(e)}
              />


              <input type="submit" value="Submit" className="my-3"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage