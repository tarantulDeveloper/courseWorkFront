import React, {useEffect, useState} from 'react';
import ChoiceService from "../services/ChoiceService";
import {Button} from "react-bootstrap";

const OrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    (() => {
      ChoiceService.getAllOrders().then(res => {setOrders(res.data); console.log(res.data)}).catch(e => console.log(e.message))
    })()
  },[])

  const deleteById = (id) => {
    ChoiceService.deleteOrderById(id).then().catch(e => console.log(e.message))
  }
  return (
    <div>
      order
      {orders.map((order) => (
        <div key={order.id}>{order.orderName}</div>
      ))}
      <Button variant='outline-danger' onClick={() => deleteById(214)}>Delete with id 214</Button>
    </div>
  );
};

export default OrdersPage;