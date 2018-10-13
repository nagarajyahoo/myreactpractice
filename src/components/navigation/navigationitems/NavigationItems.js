import React, {Component} from 'react';
import classes from './NavigationItems.css'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import utils from 'lodash'
import * as NavigationActions from "../../../model/actions/NavigationActions"

class NavigationItems extends Component {
    selectedTab = (tabId) => {
        this.props.selectedTab(tabId);
    };

    getSelectedTabId = () => {
        let id = this.props.selectedId;
        this.props.links.map(navItem => {
            if (window.location.href.endsWith(navItem.url)) {
                id = navItem.id;
            }
            return id;
        });

        return id;
    };

    render() {
        const id = this.getSelectedTabId();
        console.log('render ', id);

        return (
            <div className={classes.links}>
                <ul>
                    {this.props.links.map(navItem => {
                        if (navItem.id === 4) {
                            if (utils.isEmpty(this.props.token)) {
                                return <li key={navItem.id}
                                           className={navItem.id === id ? classes.active : null}
                                           onClick={() => this.selectedTab(navItem.id)}>
                                    <Link to={navItem.url}>{navItem.name}</Link>
                                </li>
                            }
                        }
                        else if (navItem.id === 5) {
                            if (!utils.isEmpty(this.props.token)) {
                                return <li key={navItem.id}
                                           className={navItem.id === id ? classes.active : null}
                                           onClick={() => this.selectedTab(navItem.id)}>
                                    <Link to={navItem.url}>{navItem.name}</Link>
                                </li>
                            }
                        }
                        else {
                            return <li key={navItem.id}
                                       className={navItem.id === id ? classes.active : null}
                                       onClick={() => this.selectedTab(navItem.id)}>
                                <Link to={navItem.url}>{navItem.name}</Link>
                            </li>
                        }
                        return null;
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        selectedId: state.navigation.selectedId,
        links: state.navigation.links
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectedTab: (tabId) => dispatch(NavigationActions.tabChanged(tabId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);