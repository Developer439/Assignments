import * as types from '../types';

const initialState = {
    loader: true,
    error: false,
    searchParams: {},
    modal: false
};

const data = function(state = initialState, action) {
    switch(action.type) {
        case types.LOADER:
            return {
                ...state,
                loader: action.data
            };
        case types.ERROR:
            return {
                ...state,
                error: action.data
            };
        case types.SEARCHPARAMS:
            return {
                ...state,
                searchParams: action.data
            };
        case types.MODAL:
            return {
                ...state,
                modal: action.data
            };
        default:
            return state;
    }
}

export default data;