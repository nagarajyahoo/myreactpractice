import React, {Component} from 'react';
import classes from './NavigationItems.css'
import {NavLink} from "react-router-dom";
import utils from 'lodash'
import {connect} from "react-redux";

class NavigationItems extends Component {
    signOut = () => {
        console.log("signing out");
        localStorage.removeItem("token");
        this.props.location.push("/signin");
    };

    render() {
        return (
            <nav>
                <div className={classes.links}>
                    <ul>
                        {this.props.links.map(navItem => {
                            if (navItem.id === 4) {
                                if (utils.isEmpty(localStorage.getItem("token"))) {
                                    return <li key={navItem.id}>
                                        <NavLink to={navItem.url}
                                                 activeClassName={classes.active}>{navItem.name}</NavLink>
                                    </li>
                                }
                            }
                            else if (navItem.id === 5) {
                                if (!utils.isEmpty(localStorage.getItem("token"))) {
                                    return <li key={navItem.id}>
                                        <NavLink to={navItem.url}
                                                 onClick={this.signOut}
                                                 activeClassName={classes.active}>{navItem.name}</NavLink>
                                    </li>
                                }
                            }
                            else {
                                return <li key={navItem.id}>
                                    <NavLink to={navItem.url}
                                             activeClassName={classes.active}>{navItem.name}</NavLink>
                                </li>
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        links: state.navigation.links
    }
};

export default connect(mapStateToProps, null, null, {pure: false})(NavigationItems);