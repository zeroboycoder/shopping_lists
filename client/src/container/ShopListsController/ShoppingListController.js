import React, { Component } from 'react'
import "./ShoppingListController.css"
import ShopItem from '../../components/ShopItem/ShopItem'
import ShoppingSvg from '../../components/UI/svg/shopping.svg'
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import Button from '../../components/ShopItem/Button/Button'

class ShopListController extends Component {
    state = {
        itemsToBuy : ["Coffee", "Fruits"],
        isShow : false
    }

    createInputRef = React.createRef();

    ShowAddItemHandler = () => {
        this.setState({isShow : true})
    }

    CancleAddItemHandler = () => {
        this.setState({isShow : false})
    }

    AddItemHandler = () => {
        this.state.itemsToBuy.push(this.createInputRef.current.value);
        this.setState({isShow:false})
    }

    render() {
        const lists = this.state.itemsToBuy.map((item, i) => <ShopItem key={i}><span className="List">{item}</span></ShopItem>)

        const addItemForm = <Modal showed={this.state.isShow}>
                <h3 className="ModalHeaderH3">Add Item</h3>
                <div>
                    <input type="text" ref={this.createInputRef} className="UserInput" placeholder="Add item" />
                </div>
                <Button btnClass={"Button Success BtnBold"} clicked={this.AddItemHandler}>Add</Button>
            </Modal>
        return (
            <div>
                <Backdrop showed={this.state.isShow} clicked={this.CancleAddItemHandler} />
                {addItemForm}
                <div className="ShoppingListController">
                    <div className="container">
                        <h1>Let's Go Shopping</h1>
                        <div className="row">
                            <div className="col col-md-6 p-3">
                                <div className="AddBtn" onClick={this.ShowAddItemHandler}>Add +</div>
                                {lists}
                            </div>
                            <div className="col col-md-6 p-3">
                                <img src={ShoppingSvg} alt="SVG Image" className="ShoppingSvg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopListController;