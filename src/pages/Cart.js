import React from 'react'
import { useSelector } from 'react-redux';
import Product from '../components/Product';

const Cart = () => {
  const {cart}=useSelector(state=>state)
  
  return (
    <div className="container">
    <h1 style={{ textAlign: "center",marginTop:'20px'}}>Cart</h1>
    <div className="row">
      {cart.map((item) => {
        return <Product key={item.id} item={item} action="Remove"/>;
      })}
    </div>
  </div>
  )
}

export default Cart