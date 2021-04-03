import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Rating from '../components/Rating';



export default function ProductScreen({data}) {

  const { id } = useParams();

  return (
    <div>
    <div>
      <Link to="/">Back to result</Link>
    </div>
    <div>
      {data.products.filter(product => 
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

  button {
    width: 100%;
    background-color: #f8f8f8;
  }
  


`



