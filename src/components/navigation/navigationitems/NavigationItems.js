import React, {Component} from 'react';
import classes from './NavigationItems.css'

class NavigationItems extends Component {
    state = {
        links: [
            {
                id: 1,
                name: 'Food Delivery',
                class: 'active',
            }, {
                id: 2,
                name: 'How It Works',
                class: null,
            }, {
                id: 3,
                name: 'Our Cities',
                class: null,
            }, {
                id: 4,
                name: 'Sign Up',
                class: null,
            }
        ]
    };

    updateClass = (id) => {
        const linksCopy = Object.assign(this.state.links);
        linksCopy.map(navItem => {
            if (navItem.id === id) {
                navItem.class = 'active';
            }
            else {
                navItem.class = null;
            }
            return navItem;
        });

        this.setState({
           links: linksCopy
        });
    };

    render() {
        return (
            <div className={classes.links}>
                <ul>
                    {this.state.links.map(navItem => {
                        return <li key={navItem.id}
                                   className={navItem.class === 'active' ? classes.active : null}
                                   onClick={() => this.updateClass(navItem.id)}><a href="/">{navItem.name}</a></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default NavigationItems;