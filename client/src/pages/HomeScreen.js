import React from 'react';
import data from '../data';
import Product from '../components/Product';
import styled from 'styled-components';



export default function HomeScreen(){
    return (
        <div>
            <Main>
              {data.products.map((product) => (
                <Product key={product._id} product={product} />
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






