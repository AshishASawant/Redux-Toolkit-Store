import React from 'react'
import {Link,useLocation} from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {
  
  const location = useLocation()
  const {cart}= useSelector((state)=>state)
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark" style={{position:"sticky",top:'0px',zIndex:'1'}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">Redux Store</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/' && "active"}`}  aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/cart' && "active"}`} to="/cart">Cart</Link>
          </li>
          <Link to ="/cart" type="button" className="btn btn-warning" style={{position:"absolute", right:'20px',width:'80px', fontWeight:'bold'}}>Cart:{cart.length}</Link>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar