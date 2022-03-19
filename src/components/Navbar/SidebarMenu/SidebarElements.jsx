import React from 'react';
import styled from 'styled-components';
import  { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Nav = styled.div`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuIcon = styled(FaBars)`
  color: #fff;
`;

export const Sidebar = () => {
  return (
    <>
      <Nav>
        <NavIcon to='#'>
            <MenuIcon  />
        </NavIcon>
      </Nav>
    </>
  )
}
