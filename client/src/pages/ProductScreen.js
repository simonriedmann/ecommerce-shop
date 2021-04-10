import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Rating from '../components/Rating';
import CartButton from '../components/CartButton';


export default function ProductScreen({products, addToCart}) {

  const { id } = useParams();

  return (
    <div>
    <div>
      <Link to="/">Back to result</Link>
    </div>
    <div>
      {products.filter(product => 
        product._id === id).map((product, index) => (
          
          
          <ProductBox key={index}>
            <div>
              <img
                  src={product.image}
                  alt={product.name}
              />
            </div>
            
            <div>
              <h1>{product.name}</h1>
              <Rating rating={product.rating} numReviews={product.numReviews}/>
              <p>Price: {product.price}€</p>
              <p>Description:</p>
              <p>{product.description}</p>
              <p>Images:</p>
              <SmallPicture
                  src={product.image}
                  alt={product.name}
              />

            </div>

            <SellerBox>
              <p>Seller</p>
              <TextBox>
                <p>Price:</p> 
                <p>{product.price}€</p>
              </TextBox>
              <TextBox>
                <p>Status:</p>
                {product.countInStock > 0 ? (<Available>Available </Available>) : (<NotAvailable>Not available</NotAvailable>)}
              </TextBox>
              
              <CartButton  addToCart={addToCart} product={product} />
            </SellerBox>
            
          </ProductBox>
          
        ))}
    </div>
    </div>
  );
}

const ProductBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

const SellerBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
  background-color: lightgrey;
  height: 25rem;
  width: 20rem; 
  margin: 2rem;
  `


const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0rem;

  p{
    margin: 0;
    padding: 0rem;
    padding-top: 0.5rem
  }

  p:last-child{
    padding-bottom: 0.5rem;
  }

`

const SmallPicture = styled.img`
max-width: 5rem;
width: 100%;
border: 1px solid black;
`

const Available = styled.p`
  color: green;
`

const NotAvailable = styled.p`
  color: red;
`






