import React, {Component} from 'react';
import classes from './App.css';
import HeaderContents from "./containers/header/HeaderContents";
import FoodDelivery from "./components/fooddelivery/FoodDelivery";
import HowItWorks from "./components/howitworks/HowItWorks";
import Cities from "./components/cities/Cities";
import Feedback from "./components/feedback/Feedback";
import Signup from "./components/signup/Signup";

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from "./components/signin/SignIn";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={classes.App}>
                    <HeaderContents/>
                    <div style={{height: '800px'}}>
                        <Switch>
                            <Route path='/fooddelivery' component={FoodDelivery}/>
                            <Route path='/howitworks' component={HowItWorks}/>
                            <Route path='/cities' component={Cities}/>
                            <Route path='/feedback' component={Feedback}/>
                            <Route path='/signup' component={Signup}/>
                            <Route path='/signin' component={SignIn}/>
                            <Route path='/' component={FoodDelivery}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
