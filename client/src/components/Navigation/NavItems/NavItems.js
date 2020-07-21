import React from 'react'
import NavItem from './NavItem/NavItem';
import "./NavItems.css"

const NavItems = props => {
    return (
        <ul className="NavItems">
            <li>
                <NavItem link="/" exact="true">Home</NavItem>
            </li>
            {/* <li>
                <NavItem link="/details">Detail</NavItem>
            </li> */}
        </ul>
    )
}

export default NavItems;