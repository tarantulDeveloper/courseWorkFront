import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import MaterialCard from "../components/MaterialCard";
import ChoiceService from "../services/ChoiceService";
import ShopServices from "../services/ShopServices";
import MaterialServices from "../services/MaterialServices";

const Shop = () => {
  const [materials, setMaterials] = useState([]);
  const [isAdmin, setIsAdmin] = useState(null);
  const [selectedCount, setSelectedCount] = useState(0);


  useEffect(() => {
    fetchAllMaterials();
  }, []);


  const handleChoice = (name) => {
    ChoiceService.createChoise(name)
  }

  const fetchAllMaterials = () => {
    setIsAdmin(localStorage.getItem("user"));
    ShopServices.getMaterials()
      .then((res) => {
        setMaterials(res.data);
      })
      .catch((error) => console.log(error.message));
  };

  const deleteItem = (id) => {
    MaterialServices.deleteMaterial(id).then(res => {
      console.log(res.data);
      fetchAllMaterials()
    }).catch(e => console.log(e.message));
  }
  return (
    <div>
      <Header selectedCount={selectedCount} />
      <div className="container-fluid">
        <div className="row mt-3">
          {materials.map((m) => (
            <MaterialCard key={m.id} material={m} handleChoice={handleChoice} isAdmin={isAdmin}
                          deleteItem={deleteItem} setSelectedCount={setSelectedCount}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
