import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import Orders from "./Orders";

import { loadStripe } from "@stripe/stripe-js/pure";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51IR3mmHOodGlzdhHjx0lDYwXShfkMkEbsaZLJ0Ur28wRNvdlo1ZDA40JM9un0xHru6bLox62iqqRZbUDFZLRlzDg00CFtRAdOC"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is", authUser);
      authUser
        ? dispatch({ type: "SET_USER", user: authUser })
        : dispatch({ type: "SET_USER", user: null });
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
