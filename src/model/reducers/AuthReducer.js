import * as Actions from '../actions/AuthActions';

const initialState = {
    processing: false,
    token: null,
    userId: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.AUTH_STARTED:
            return {
                ...state,
                processing: true
            };
        case Actions.LOGIN_SUCCESSFUL:
            localStorage.setItem("token", action.data.idToken);
            return {
                ...state,
                processing: false,
                token: action.data.idToken,
                userId: action.data.email,
                error: null
            };
        case Actions.SIGNUP_SUCCESSFUL:
            return {
                ...state,
                processing: false,
                token: action.data.idToken,
                userId: action.data.email,
                error: null
            };
        case Actions.LOGIN_FAILED:
            return {
                ...state,
                processing: false,
                token: null,
                error: "Login failed"
            };
        case Actions.SIGNUP_FAILED:
            return {
                ...state,
                processing: false,
                token: null,
                error: action.error
            };
        default:
            return {
                ...state,
                processing: false
            }
    }
};

export default authReducer;