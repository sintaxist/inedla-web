import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
// import SubMenu from './SubMenu';

const SidebarLink = styled(Link)`
  display: flex;
  color: #F9FDFC;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 10px;
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

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: none;
  justify-content: flex-start;
  align-items: center;
  color: #1f140f;

  @media screen and (max-width: 960px){
    display: flex;
  }
`;

const Cross = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  margin-right: 1rem;
  font-size: 2rem;
  color: #F9FDFC;
`

const SidebarNav = styled.nav`
  background: #0b0827;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 600ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const MenuBars = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <NavIcon to='#'>
        <FaIcons.FaBars onClick={showSidebar} />
      </NavIcon>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <Cross to='#'>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </Cross>
          {/* {SidebarData.map((item, index) => {
            return (
              <SubMenu item={item} key={index} showSidebar={showSidebar}/>
            );
          })} */}
          {
            NavbarLinks.map((link) =>{
                return (
                    <SidebarLink key={link.id} to={link.path} onClick={showSidebar}>{link.text}</SidebarLink>
                )
            })
          }
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

const NavbarLinks = [
  // {
  //     id: 101,
  //     text: 'Equipo Docente',
  //     path: '/equipo-docente'
  // },
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
  // {
  //     id: 106,
  //     text: 'Noticias',
  //     path: '/noticias'
  // },
  {
      id: 107,
      text: 'Contacto',
      path: '/inscribete'
  },
]

export default MenuBars;