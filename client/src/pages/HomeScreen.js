import React from 'react';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';



export default function HomeScreen({ products }){
    return (
        <div>
            <Main>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </Main>
        </div> 
    )
}

const Main = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`






