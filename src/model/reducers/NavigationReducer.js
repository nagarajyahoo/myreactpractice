import * as Navigation from "../actions/NavigationActions"

const initialState = {
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
        },
        {
            id: 4,
            name: 'Sign In',
            class: null,
            url: '/signin'
        },
        {
            id: 5,
            name: 'Sign Out',
            class: null,
            url: '/signin'
        }
    ],
    selectedId: 0
};

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case Navigation.TAB_CHANGED:
            return {
                ...state,
                selectedId: action.tabId
            };
        default:
            return state;
    }
};

export default navigationReducer;