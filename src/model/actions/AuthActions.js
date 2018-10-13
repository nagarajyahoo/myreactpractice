import axios from 'axios';

const API_KEY = 'AIzaSyARy5WQbcpdU3NEYR2YVha5zP_gDYRyRak';

export const AUTH_STARTED = 'AUTH_STARTED';
export const authStarted = () => {
    return {type: AUTH_STARTED}
};

export const SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL';
export const signupSuccessful = (authData) => {
    return {
        type: SIGNUP_SUCCESSFUL,
        data: authData
    }
};

export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const signupFailed = (error) => {
    return {
        type: SIGNUP_FAILED,
        error: error
    }
};

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const loginSuccessful = (authData) => {
    return {
        type: LOGIN_SUCCESSFUL,
        data: authData
    }
};

export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginFailed = (error) => {
    return {
        type: LOGIN_FAILED,
        error: error
    }
};

export const login = (email, password, props) => {
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + API_KEY;
    return (dispatch) => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        axios.post(url, authData)
            .then(res => {
                console.log(res);
                dispatch(loginSuccessful(res.data));
                props.history.push('/howItWorks');
            })
            .catch(err => {
                dispatch(loginFailed(err.message));
                props.history.push('/signin');
            });
    }
};

export const signup = (email, password) => {
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + API_KEY;
    return (dispatch) => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        axios.post(url, authData)
            .then(res => {
                console.log(res);
                dispatch(signupSuccessful(res.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(signupFailed(err.message))
            });
    }
};