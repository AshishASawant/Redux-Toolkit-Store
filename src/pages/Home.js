import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { fetchData } from "../store/productSlice";
const Home = () => {
  
  const dispatch= useDispatch()
  const {data:items}=useSelector((state)=>state.product)

  useEffect(() => {
    dispatch(fetchData())

     // eslint-disable-next-line 
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center",marginTop:'20px'}}>Home</h1>
      <div className="row">
        {items.map((item) => {
          return <Product key={item.id} item={item} action="Add" />;
        })}
      </div>
    </div>
  );
};

export default Home;
