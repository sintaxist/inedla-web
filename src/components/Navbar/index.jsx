import React, { useState } from 'react';
import '../../styles/header-styles.scss'
import logo from '../../images/logo.svg';
import {Dropdown, 
  // DropdownTwo
} from './Dropdown';
import MenuBars from './SidebarMenu/Sidebar'
import {
  Nav,
  NavLink,
  NavMenu,
  Logo,
  BtnLink
} from './NavbarElements';
import {IoIosArrowDown} from 'react-icons/io'

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  // const [dropdown2, setDropdown2] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // const onMouseEnter2 = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown2(false);
  //   } else {
  //     setDropdown2(true);
  //   }
  // };

  // const onMouseLeave2 = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown2(false);
  //   } else {
  //     setDropdown2(false);
  //   }
  // };

  return (
    <div className='white-back-shadow NavbarContainer'>
      <Nav className='widthBreak'>
        <NavLink to='/' className="navbar-logo">
          <Logo src={logo} alt="logo" />
        </NavLink>
        <NavMenu>
            <div
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={dropdown ? 'father activo' : 'father'}>
              <div className='nav-links submenu'>
                Conoce INEDLA 
                <IoIosArrowDown />
              </div>
              {dropdown && <Dropdown/>}
            </div>
            <NavLink
              to='/admisiones'
              className='nav-links'>
                Admisiones
            </NavLink>
            {/* <div
              onMouseEnter={onMouseEnter2}
              onMouseLeave={onMouseLeave2}
              className={dropdown2 ? 'father activo' : 'father'}>
              <div className='nav-links submenu'>
                Comunidad
                <IoIosArrowDown/>
              </div>
              {dropdown2 && <DropdownTwo />}
            </div> */}
            <BtnLink
              to='/inscribete'
              className='nav-links inscribete'>
              Inscríbete
            </BtnLink>
        </NavMenu>
        <MenuBars/>
      </Nav>
    </div>
  );
}

export default Navbar;
