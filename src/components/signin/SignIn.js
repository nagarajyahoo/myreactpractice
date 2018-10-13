import React, {Component} from 'react';
import grid from '../../resources/vendor/css/grid.css'
import common from '../../index.css'
import classes from './SignIn.css'
import {Link} from "react-router-dom"
import utils from 'lodash'

const login = () => {

}

class Signin extends Component {
    state = {
        userEmail: '',
        userPassword: '',
        enableLogin: false
    };

    render() {
        return (
            <div className={classes.signin}>
                {/*<form>*/}
                <div className={grid.row}>
                    <div className={[grid.col, grid["span-2-of-8"]].join(' ')}>
                        <label htmlFor='useremail'>Email</label>
                    </div>
                    <div className={[grid.col, grid["span-6-of-8"]].join(' ')}>
                        <input id='useremail'
                               type='email'
                               value={this.state.userEmail}
                               placeholder='Your Email'
                               onChange={(event) => this.handleValueChange(event, 'userEmail')}
                        />
                    </div>
                </div>
                <div className={grid.row}>
                    <div className={[grid.col, grid["span-2-of-8"]].join(' ')}>
                        <label htmlFor='userpass'>Password</label>
                    </div>
                    <div className={[grid.col, grid["span-6-of-8"]].join(' ')}>
                        <input id='userpass'
                               type='password'
                               value={this.state.userPassword}
                               placeholder='Your Password'
                               onChange={(event) => this.handleValueChange(event, 'userPassword')}/>
                    </div>
                </div>
                <div className={grid.row}>
                    <div className={[grid.col, grid["span-3-of-8"]].join(' ')}>&nbsp;</div>
                    <div className={[grid.col, grid["span-5-of-8"]].join(' ')}>
                        <button
                            className={this.state.enableLogin ? common.selected : common.disabled}
                            onClick={() => login()}>Login</button>
                        <Link to='/signup'>New User</Link>
                    </div>
                </div>
                {/*</form>*/}
            </div>
        );
    };

    handleValueChange = (event, field) => {
        event.preventDefault();

        const fieldValue = event.target.value;
        this.setState({[field]: fieldValue}, () => {
            if (utils.isEmpty(this.state.userEmail) ||
                utils.isEmpty(this.state.userPassword)) {
                this.setState({enableLogin: false});
            }
            else {
                this.setState({enableLogin: true});
            }
        });
    }
}


export default Signin;