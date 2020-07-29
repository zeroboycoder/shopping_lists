import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./hoc/Layout/Layout";
import "./App.css";

import ShoppingListController from "./container/ShopListsController/ShoppingListController";
import Auth from "./container/Auth/auth";
import { loadUser } from "./store/action/authAction";

class App extends Component {
   componentDidMount() {
      this.props.loadUser();
   }
   render() {
      return (
         <Layout>
            <Switch>
               <Route path="/" exact component={ShoppingListController} />
               <Route path="/auth" component={Auth} />
            </Switch>
         </Layout>
      );
   }
}

const dispatchToProps = (dispatch) => {
   return {
      loadUser: () => dispatch(loadUser()),
   };
};

export default connect(null, dispatchToProps)(App);
