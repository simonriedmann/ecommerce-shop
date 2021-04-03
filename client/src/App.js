import { useEffect, useState } from 'react';
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



function App() {
  const apiServerURL = '/api';

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(apiServerURL + '/products')
      .then((result) => result.json())
      .then((products) => setProducts(products))
      .catch((error) => console.error(error.message));
  }, []);

  return (
      <Router>
        <Navigation />
          <Switch>
          <Route exact path="/">
            <HomeScreen products={products}/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/product/:id">
            <ProductScreen products={products}/>
          </Route>

        </Switch>
        <Footer />
      </Router>

    );
}

export default App;


