import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./context/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";
const promise = loadStripe(
  "pk_test_51HPy7JD48aZB8hM3RKeR2KsXVzzzQHDfiZv2ac1SHFgfUQugomsOKL3V1GdC4lp06qVByqtVNky25CiElnlSggaC00f9rjmRFp"
);
//Above code gives a promise when passed an public API key to a function

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in or it was logged in and refreshes the page
        // console.log(
        //   "Lets test the user object displayname property is ",
        //   authUser
        // );
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out or never logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* Checkout(payment.js) page should be wrapped around like this. */}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
