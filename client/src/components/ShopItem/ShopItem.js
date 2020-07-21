import React from 'react'
import "./ShopItem.css"
import Button from './Button/Button';

const ShopItem = props => {
    return (
        <div className="ShopItem">
            <Button btnClass="Button Danger" clicked={props.clicked} showed={true}>Delete</Button>
            {props.children}
        </div>
    )
}

export default ShopItem;