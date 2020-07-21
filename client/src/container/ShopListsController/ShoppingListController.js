import React, { Component } from 'react'
import {connect} from 'react-redux'
import "./ShoppingListController.css"
import ShopItem from '../../components/ShopItem/ShopItem'
import ShoppingSvg from '../../components/UI/svg/shopping.svg'
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import Button from '../../components/ShopItem/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/action/itemAction';

class ShopListController extends Component {
    state = {
        isShow : false,
        isValid : false
    }

    componentDidMount(){
        this.props.onGetItem();
    }

    createInputRef = React.createRef();

    ShowAddItemHandler = () => {
        this.setState({isShow : true})
    }

    CancleAddItemHandler = () => {
        this.setState({isShow : false})
    }

    CheckValidation = event => {
        let valid = false;
        valid = event.target.value !== ""
        this.setState({isValid : valid})
    }

    AddItemHandler = () => {
        const itemName = this.createInputRef.current.value;
        let data = {name : itemName}
        this.props.onAddItem(data);
        this.setState({isShow:false})
    }

    DeleteItemHandler = _id => {
        this.props.onDelItem(_id);
        console.log(`Del btn ${_id}`)
    }

    render() {
        const lists = this.props.items.map(item=> 
            <ShopItem key={item._id} clicked={() => this.DeleteItemHandler(item._id)}>
                <span className="List">{item.name}</span>
            </ShopItem>
        )
        
        const modalConfig = (
            <div>
                <Backdrop showed={this.state.isShow} clicked={this.CancleAddItemHandler} />
                <Modal showed={this.state.isShow} clicked={this.CancleAddItemHandler}>
                    <h3 className="ModalHeaderH3">Add Item</h3>
                    <div>
                        <input type="text" ref={this.createInputRef} onChange={event => this.CheckValidation(event)} className="UserInput" placeholder="Add item" />
                    </div>
                    <Button btnClass={"Button BtnBold"} clicked={this.AddItemHandler} showed={this.state.isValid}>Add</Button>
                </Modal>
            </div>
        )

        let returnObj = <Spinner />
        if(!this.props.loading){
            returnObj = (
                <div>
                    {modalConfig}
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
        return returnObj
    }
}

const stateToProps = state => {
    return {
        items : state.items,
        loading : state.loading
    }
}

const dispatchToProps = dispatch => {
    return {
        onGetItem : () => dispatch(actions.onGetItem()),
        onAddItem : data => dispatch(actions.onAddItem(data)),
        onDelItem : _id => dispatch(actions.onDeleteItem(_id))
    }
}

export default connect(stateToProps, dispatchToProps)(ShopListController);