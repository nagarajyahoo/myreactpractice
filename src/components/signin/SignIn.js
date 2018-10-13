import React from 'react';
import grid from '../../resources/vendor/css/grid.css'
import common from '../../index.css'
import classes from './SignIn.css'
import {Link} from "react-router-dom";

const signin = () => {
    return (
        <div className={classes.signin}>
            {/*<form>*/}
                <div className={grid.row}>
                    <div className={[grid.col, grid["span-2-of-8"]].join(' ')}>
                        <label htmlFor='useremail'>Email</label>
                    </div>
                    <div className={[grid.col, grid["span-6-of-8"]].join(' ')}>
                        <input id='useremail' type='email' placeholder='Your Email'/>
                    </div>
                </div>
                <div className={grid.row}>
                    <div className={[grid.col, grid["span-2-of-8"]].join(' ')}>
                        <label htmlFor='userpass'>Password</label>
                    </div>
                    <div className={[grid.col, grid["span-6-of-8"]].join(' ')}>
                        <input id='userpass' type='password' placeholder='Your Password'/>
                    </div>
                </div>
                <div className={grid.row}>
                    <div className={[grid.col, grid["span-3-of-8"]].join(' ')}>&nbsp;</div>
                    <div className={[grid.col, grid["span-5-of-8"]].join(' ')}>
                        <button className={common.selected} onClick={() => login()}>Login</button>
                        <Link to='/signup'>New User</Link>
                    </div>
                </div>
            {/*</form>*/}
        </div>
    );
};

export default signin;