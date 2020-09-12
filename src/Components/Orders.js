import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import "../css/Orders.css";
import { useStateValue } from "../context/StateProvider";
import Order from "./Order";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((
          snapshot // realtime snapshot of the database
        ) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              //maps to every single one
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
