import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./hoc/Layout/Layout";
import "./App.css"

import ShoppingListController from './container/ShopListsController/ShoppingListController';

class App extends Component{
   render() {
      return (
         <Layout>
            <Switch>
               <Route path="/" exact component={ShoppingListController} />
            </Switch>
         </Layout>
      )
   }
}

export default App;