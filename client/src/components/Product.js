import Rating from './Rating';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function Product({ product }){

    return (
    
    <Card key={product._id}>
    <NavLink to={`/product/${product._id}`}>
            <img
                src={product.image}
                alt={product.name}
            />
        <CardDescription>
            <NavLink to={`/product/${product._id}`}>
                {product.name}
            </NavLink>

            <Rating 
                rating={product.rating} 
                numReviews={product.numReviews}
            />
            
            <p>${product.price}</p>
        </CardDescription>
        </NavLink>
        </Card>
    )
}

const Card = styled.div`
border: 0.1rem #c0c0c0 solid;
background-color: #f8f8f8;
border-radius: 0.5rem;
margin: 1rem;

p {
    font-size: 2rem;
}

`

const CardDescription = styled.div`
margin: 1rem;
padding: 1rem;

p {
    font-size: 2rem;
}

`


