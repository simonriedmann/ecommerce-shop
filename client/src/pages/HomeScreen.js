import React from 'react';
import data from '../data';
import Product from '../components/Product';
import styled from 'styled-components';



export default function HomeScreen(){
    return (
        <Main>
            <div>
              {data.products.map((product) => (
                <Product key={product._id} product={product}/>
              ))}
            </div>
        </Main> 
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`






