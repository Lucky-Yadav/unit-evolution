import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const Cart = () => {
    const [items, setitems] = useState()
     useEffect(() => {
       axios({
         method: "get",
         url: "http://localhost:8080/cart",
       })
         .then((res) => setitems(res.data))
         .catch((err) => {
           console.log(err);
         });
     }, []);

    const Increase = (id, quantity) => {
        console.log(id);
        console.log(quantity);
        axios({
          method: "post",
          url: `http://localhost:8080/cart/${id}`,
          data: {
            product_id: id,
            Quantity: quantity+1,
          },
        }).then((res) => {
          console.log(res);
          console.log(res);
        });
    }

    const Decrease = (id, quantity) => {
        console.log(id);
        console.log(quantity);
        axios({
          method: "post",
          url: `http://localhost:8080/cart/${id}`,
          data: {
            product_id: id,
            Quantity: quantity-1,
          },
        }).then((res) => {
          console.log(res);
          console.log(res);
        });
    }
    
  return (
    <div>
      {items?.map((item) => (
        <div className="cart_data" key={item.id}>
          <div className="jss1">
            <p>Your ID : {item.id}</p>
            <p>Your Product ID : {item.product_id}</p>
            <p>Quantity : {item.quantity}</p>
          </div>
          <div className="jss1">
            <Button
              variant="outlined"
              onClick={() => Increase(item.id, item.quantity)}
              className="button"
            >
              Increase
            </Button>
            <Button
              variant="outlined"
              className="button"
              onClick={() => Decrease(item.id, item.quantity)}
            >
              Decrease
            </Button>
          </div>
          <div className="jss1">
            <Button variant="outlined" className="button">
              Remove Product
            </Button>
            <Button
              variant="outlined"
              className="button"
              onClick={() => alert("Order has been successfully placed")}
            >
              Buy Product{" "}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart