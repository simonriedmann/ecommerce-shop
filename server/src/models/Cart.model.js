import mongoose, { Schema } from 'mongoose';

const cartSchema = new mongoose.Schema({
    customerId: { type: Schema.Types.ObjectId, ref: 'Customer' }
    orderItems: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, min 1},
            itemSum: { type: Number, min: 0},

        },
    ],
    orderSum: { type: Number, required: true, min 0 },
  });
  
  const Cart = mongoose.model('Cart', cartSchema);
  
  export default Cart;