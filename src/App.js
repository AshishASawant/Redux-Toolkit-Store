import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={ <Home/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
