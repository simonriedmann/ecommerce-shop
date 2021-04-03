import { findById, saveToDb, findAll } from '../lib/databaseHelpers.js';
import Product from '../models/Product.model.js';

async function postProduct(req, res) {
  const newProduct = new Product({
    name: req.body.name,
    category: req.body.category,
    image: req.body.image,
    price: req.body.price,
    countInStock: req.body.countInStock,
    brand: req.body.brand,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    description: req.body.description
  });
  try {
    const product = await saveToDb(newProduct);
    res.json(product);
  } catch (error) {
    res.json(error);
  }
}

async function getProducts(_, res) {
  try {
    const products = await findAll(Product);
    res.json(products);
  } catch (error) {
    res.json(error);
  }
}

async function getProduct(req, res) {
  try {
    const productId = req.params.productId;
    const product = await findById(Product, productId);
    res.json(product);
  } catch (error) {
    res.json(error);
  }
}

export { postProduct, getProducts, getProduct };
