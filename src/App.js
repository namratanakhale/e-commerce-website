import React, { useEffect } from "react";
import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login"
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Footer from "./Pages/Footer/Footer";
import { auth } from "./firebase";
import { useStateValue} from "../src/Utils/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MC4XySDkAcNApaVmyecmEmQLYeUaRhuaMSHwXj8oE7WGscdms2Z6vX0nRQolkfXuiGQIAT1CzxqxPSXqLAFssqt009eTqViW5"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
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
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
             <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
