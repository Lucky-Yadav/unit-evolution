import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginloading, sucessLogin } from "../store/auth/action";

const Home = () => {
  const [products, setproducts] = useState([]);
    const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/products",
    })
      .then((res) => setproducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
    const handlelogin = (id) => {
    axios({
      method: "post",
      url: "http://localhost:8080/cart",
      data: {
        product_id: id,
        Quantity: 1,
      },
    }).then((res) => {
      console.log(res);
      dispatch(sucessLogin(res.data));
      console.log(res);
    });
}
  return (
    <div className="item_body">
      {products?.map((item) => (
        <div className="data" key={item.id}>
          <div className="jss1">
            <div className="jss11">
              <p>Brand: {item.brand}</p>
              <p>Title: {item.title}</p>
              <p>Category: {item.category} </p>
              <p>Price: {item.price} </p>
            </div>
            <div className="jss11">
              <img src={item.image} alt="" />
              <div className="jss11 jss11b">
                <Button variant="outlined" onClick={() => handlelogin(item.id)} >Add to Cart</Button>
                <Button variant="outlined">More Details</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
