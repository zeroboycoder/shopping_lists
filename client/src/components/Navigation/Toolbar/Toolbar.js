import React from 'react'
import NavItems from '../NavItems/NavItems';
import "./Toolbar.css"

const Toolbar = props => {
    return (
        <header className="Toolbar">
            <nav className="Nav">
                {/* logo */}
                <NavItems />
            </nav>
        </header>
    )
}

export default Toolbar;