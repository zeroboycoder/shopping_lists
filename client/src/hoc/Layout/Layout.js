import React, { Component } from 'react'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component{
    render() {
        return (
            <div>
                <Toolbar />
                {/* Slider Bar */}
                {this.props.children}
                {/* Footer */}
            </div>
        )
    }
}
export default Layout;