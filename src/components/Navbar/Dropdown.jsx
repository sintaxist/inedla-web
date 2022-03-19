import React, { useState } from 'react';
import {MenuItems, SecondMenuItems} from '../../data/MenuItems';
import {Link} from 'react-router-dom';
import '../../styles/Dropdown.scss';

export const Dropdown = function Dropdown(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return(
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export const DropdownTwo = function DropdownTwo(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return(
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu menu-two clicked' : 'dropdown-menu menu-two'}>
            {SecondMenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}