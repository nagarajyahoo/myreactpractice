import React, {Component} from 'react';
import classes from './App.css';
import HeaderContents from "./containers/header/HeaderContents";
import FoodDelivery from "./components/fooddelivery/FoodDelivery";
import HowItWorks from "./components/howitworks/HowItWorks";
import Cities from "./components/cities/Cities";
import Feedback from "./components/feedback/Feedback";

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <HeaderContents/>
                {/*<FoodDelivery/>*/}
                {/*<HowItWorks/>*/}
                {/*<Cities/>*/}
                <Feedback/>
            </div>
        );
    }
}

export default App;
