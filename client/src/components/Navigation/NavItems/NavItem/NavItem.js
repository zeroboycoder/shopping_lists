import React from 'react'
import {NavLink} from 'react-router-dom'
import "./NavItem.css"

const NavItem = props => {
    return (
        <NavLink to={props.link} exact activeClassName="active">{props.children}</NavLink>
    )
}

export default NavItem;