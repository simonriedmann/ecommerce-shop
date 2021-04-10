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

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(apiServerURL + '/products')
      .then((result) => result.json())
      .then((products) => setProducts(products))
      .catch((error) => console.error(error.message));
  }, []);

  const addToCart = (product) => {
    console.log('Add to cart');
    fetch(apiServerURL + '/shopping-cart/60427bc46b001b45c5485064', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderItem: {
          productId: product._id,
          quantity: 1,
        },
      }),
    })
      .then((result) => result.json())
      .then((cart) => setCart(cart))
      .catch((error) => console.error(error.message));
  };

  return (
      <Router>
        <Navigation />
          <Switch>
          <Route exact path="/">
            <HomeScreen products={products}/>
          </Route>
          <Route path="/cart">
            <Cart 
              cartItems={cart}
            />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/product/:id">
            <ProductScreen products={products} addToCart={addToCart}/>
          </Route>

        </Switch>
        <Footer />
      </Router>

    );
}

export default App;


