import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #F9FDFC;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-size: 18px;
  transition: all .3s;
  position: relative;

  &:before{
    content:  '';
    position: absolute;
    width: 4px;
    height: 0;
    background: #349eff;
    top: 0;
    right: 0;
    transition:  all .3s;
  }

  &:hover {
    background: #252831;
    cursor: pointer;
    &:before{
      height:  100%;
    }
  }
`;

// const SidebarLabel = styled.span`
//   margin-left: 16px;
// `;

// const DropdownLink = styled(Link)`
//   height: 60px;
//   padding-left: 3rem;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 18px;
//   transition: all .3s;
//   z-index: 3;

//   &:hover {
//     background: #349eff;
//     cursor: pointer;
//   }
// `;

const SubMenu = ({ showSidebar }) => {
  // const [subnav, setSubnav] = useState(false);

  // const showSubnav = () => setSubnav(!subnav);
  

  return (
    <>
      {
        NavbarLinks.map((link) =>{
            return (
                <SidebarLink key={link.id} to={link.path} onClick={showSidebar}>{link.text}</SidebarLink>
            )
        })
      }
    </>
  );
};

const NavbarLinks = [
  {
      id: 101,
      text: 'Equipo Docente',
      path: '/equipo-docente'
  },
  {
      id: 102,
      text: 'Plantel',
      path: '/plantel'
  },
  {
      id: 103,
      text: 'Plan de Estudios',
      path: '/plan-de-estudios'
  },
  {
      id: 104,
      text: 'Conoce INEDLA',
      path: '/estudia-podologia'
  },
  {
      id: 105,
      text: 'Admisiones',
      path: '/admisiones'
  },
  {
      id: 106,
      text: 'Noticias',
      path: '/noticias'
  },
  {
      id: 107,
      text: 'Contacto',
      path: '/inscribete'
  },
]

export default SubMenu;
