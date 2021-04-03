import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function Navigation(){
    return (
          <NavigationBox>
                <NavLink exact to="/">
                  <h1>Amazona</h1>
                </NavLink>

                <NavLink to="/cart">
                  <p>Cart</p>
                </NavLink>

                <NavLink to="/signin">
                  <p>Sign In</p>
                </NavLink>
          </NavigationBox>
    )
}

const NavigationBox = styled.nav`
    display: grid;
    grid-template-columns: 70% 15% 15%;


    flex-direction: row;
    background-color: #203040;
    color: #ffffff;
    top: 0;
    right: 0;
    left: 0;
    text-decoration: none;
    align-items: center;

    a {
      text-decoration: none;
      color: white;
      padding: 1rem;
    }

    a:hover {
        color: #ff8000;
    }
    
    p {
      padding: 0;
      margin: 0;
    }
`
