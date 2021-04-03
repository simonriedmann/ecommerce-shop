import styled from 'styled-components';


export default function Footer(){
    return (
        <FooterBox>All rights reserved</FooterBox>
    )
}

const FooterBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #203040;
    color: #ffffff;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 2rem;
`


