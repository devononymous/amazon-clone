import React from 'react'
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { useEffect } from 'react';
import Order from './Order.js';
import Login from './Login.js';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51KHBvjSB6TpNdcHdxfNkzZe9tedRZpYraENM2Uf2veK0oXORL2FXdkLcsm9YTrfROFHpFP0hSEiDThsGN0exipC300veuI2tIO");

function App() {
  
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser=> {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // the user just logged in
        
        dispatch({
          type:'SET_USER',
          user: authUser
        })


      }else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
    }, [])
  return (
    // BEM
    <Router>
    <div className="app">
      <Switch>
        <Route path="/orders">
        <Header/>
          <Order/> 
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
          {/* <h1> I am the payment page</h1> */}
          {/* <Elements stripe={promise}> */}
          {/* </Elements> */}
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
