import Cart from '../models/Cart.model.js';
import Product from '../models/Product.model.js';
import { findCustomerCart } from '../lib/customerHelpers.js';
import { calculateSum } from '../lib/calculations.js';
import { findById, findAndUpdate, saveToDb } from '../lib/databaseHelpers.js';

async function getCart(req, res) {
  const customerId = req.params.customerId;

  try {
    const cart = await findCustomerCart(customerId);
    res.json(cart);
  } catch (error) {
    res.json(error);
  }
}

async function postCart(req, res) {
  const customerId = req.params.customerId;
  const { productId, quantity } = req.body.orderItem;

  const customerCart = await findCustomerCart(customerId);

  const product = await findById(Product, productId);

  const orderItem = {
    productId,
    quantity,
    itemSum: calculateSum(product.price, quantity),
  };

  if (customerCart) {
    customerCart.orderItems.push(orderItem);
    customerCart.orderSum += orderItem.itemSum;

    try {
      const updatedCart = await findAndUpdate(
        ShoppingCart,
        customerCart._id,
        customerCart,
        'orderItems.productId'
      );
      res.json(updatedCart);
    } catch (error) {
      res.json(error);
    }
  } else {
    const newCart = new Cart({
      customerId,
      orderItems: [orderItem],
      orderSum: orderItem.itemSum,
    });
    try {
      const cart = await saveToDb(
        newCart,
        'orderItems.productId'
      );
      res.json(shoppingCart);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export { getCart, postCart };