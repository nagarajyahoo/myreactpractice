import React, {Component} from 'react';
import classes from './NavigationItems.css'
import {Link} from "react-router-dom";

class NavigationItems extends Component {
    state = {
        links: [
            {
                id: 1,
                name: 'Food Delivery',
                class: 'active',
                url: '/fooddelivery'
            }, {
                id: 2,
                name: 'How It Works',
                class: null,
                url: '/howitworks'
            }, {
                id: 3,
                name: 'Our Cities',
                class: null,
                url: '/cities'
            }, {
                id: 4,
                name: 'Sign Up',
                class: null,
                url: '/signup'
            }
        ]
    };

    getSelectedLinkId = () => {
        const linksCopy = Object.assign(this.state.links);
        let id = 1;
        linksCopy.map(navItem => {
            if (window.location.href.endsWith(navItem.url)) {
                id = navItem.id;
            }
            return id;
        });
        return id;
    };

    render() {
        const id = this.getSelectedLinkId();
        console.log('render ', id);

        return (
            <div className={classes.links}>
                <ul>
                    {this.state.links.map(navItem => {
                        return <li key={navItem.id}
                                   className={navItem.id === id ? classes.active : null}>
                            <Link to={navItem.url}>{navItem.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default NavigationItems;