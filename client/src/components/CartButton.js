import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function CartButton({product, addToCart}){
    return (
      <Link to="/cart">
        <AddButton onClick={() => addToCart(product) }>Add to Cart</AddButton>
      </Link>
    )
}

const AddButton = styled.button`
    padding: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem #a4a4a4 solid;
    font-size: 1.6rem;
    font-family: Helvetica, Arial, sans-serif;
    background-color: orange;
    cursor: pointer;
    width: 100%;

    :hover {
    border: 0.1rem #404040 solid;
  }`