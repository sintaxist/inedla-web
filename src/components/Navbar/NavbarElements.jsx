import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: .5rem 3%;
    height: 80px;
    z-index: 10;
`;

export const NavMenu = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 960px){
        display: none;
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
`;

export const Logo = styled.img`
    display: block;
    margin: auto;
    padding: 0rem 6%;
    height: auto;
    width: 80%;
    max-width: 250px;
`;

export const BtnLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
`