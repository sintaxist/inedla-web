import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #1f140f;
`;

const Cross = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 95px;
  margin-right: 2rem;
  font-size: 2rem;
  color: #F9FDFC;
`

const SidebarNav = styled.nav`
  background: #1f140f;
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
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default MenuBars;