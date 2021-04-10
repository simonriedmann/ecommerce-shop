import Cart from '../models/Cart.model.js';

const findCustomerCart = (customerId) => {
  return Cart.findOne({ customerId }).populate('orderItems.productId');
};

export { findCustomerCart };