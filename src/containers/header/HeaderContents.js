import React, {Component} from 'react';
import grid from '../../resources/vendor/css/grid.css';
import classes from './Header.css'
import NavigationItems from "../../components/navigation/navigationitems/NavigationItems";
import logo from '../../resources/img/logo.png'

class HeaderContents extends Component {

    render() {
        return (
            <header className={classes.headerContent}>
                <nav>
                    <div className={grid.row}>
                        <div className={[grid.col, grid['span-2-of-12'], classes.logo].join(' ')}>
                            <a href='/'><img src={logo} alt='Logo'/></a>
                        </div>
                        <div className={[grid.col, grid['span-10-of-12']].join(' ')}>
                            <NavigationItems/>
                        </div>
                        {/*<div className={[grid.col, grid['span-1-of-12'], classes.search].join(' ')}>*/}
                            {/*<input type='text' placeholder='Search...'/>*/}
                            {/*<button>..</button>*/}
                        {/*</div>*/}
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderContents;