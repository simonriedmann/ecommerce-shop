import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProductScreen from './pages/ProductScreen';
import HomeScreen from './pages/HomeScreen';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import data from './data';


function App() {

  return (
      <Router>
        <Navigation />
          <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/product/:id">
            <ProductScreen data={data}/>
          </Route>

        </Switch>
        <Footer />
      </Router>

    );
}

export default App;


