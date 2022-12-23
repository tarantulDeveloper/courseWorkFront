import React from "react";
import Header from "../components/Header";
import Warehouse from "../img/warehouse.png";

const HomePage = () => {
  return (
    <div className="home-div ">
      <Header />
      <div className="container">
        <div className="text-white px-5 row">
          <div className="col-sm-12 col-md-6 ">
            <h3 className="text-warning">Beaver</h3> is an automated information
            system for inventory management.
            <p>Beaver is the first cloud-based trade and warehouse management service in Kyrgyzstan from any computer, at any time. You can register for FREE on our website</p>
          </div>

          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center ">
            <img src={Warehouse} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
