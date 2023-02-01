import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../store/cartSlice";
const Product = ({ item, action }) => {
  const dispatch = useDispatch();

  const handelOnClick = (id) => {
    if (action === "Add") {
      dispatch(add(item));
    } else {
      dispatch(remove(id));
    }
  };

  return (
    <div className="col-sm-4">
      <div className="card mt-5" style={{}}>
        <img
          src={item.image}
          className="card-img-top"
          style={{ height: "250px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-nowrap  text-truncate">{item.title}</h5>
          <p className="card-text">{item.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => handelOnClick(item.id)}
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
