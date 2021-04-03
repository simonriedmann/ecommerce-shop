import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Rating from '../components/Rating';


export default function ProductScreen({products}) {

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
              <p>Price: {product.price}</p>
              <p>Status:</p>
              <div>
              {product.countInStock > 0 ? (<p>Available </p>) : (<p>Not available</p>)}
              </div>
              
              <button>Add to Cart</button>
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

const SellerBox = styled.form`
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
  background-color: lightgrey;
  height: 25rem;
  width: 20rem; 
  margin: 2rem;

  button {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem #a4a4a4 solid;
    font-size: 1.6rem;
    font-family: Helvetica, Arial, sans-serif;
    background-color: orange;
    cursor: pointer;
    width: 100%;
  }
  button:hover {
    border: 0.1rem #404040 solid;
  }
`

const SmallPicture = styled.img`
max-width: 5rem;
width: 100%;
border: 1px solid black;
`






