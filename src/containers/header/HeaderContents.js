import React, {Component} from 'react';
import grid from '../../resources/vendor/css/grid.css';
import classes from './Header.css'
import NavigationItems from "../../components/navigation/navigationitems/NavigationItems";
import logo from '../../resources/img/logo-white.png'
import {Link} from "react-router-dom";

class HeaderContents extends Component {

    render() {
        return (
            <header className={classes.headerContent}>
                <nav>
                    <div className={grid.row}>
                        <div className={[grid.col, grid['span-2-of-12'], classes.logo].join(' ')}>
                            <Link to='/fooddelivery'><img src={logo} alt='Logo'/></Link>
                        </div>
                        <div className={[grid.col, grid['span-10-of-12']].join(' ')}>
                            <NavigationItems/>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderContents;