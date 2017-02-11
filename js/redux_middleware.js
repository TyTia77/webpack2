import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// restful service similar to ajax
import axios from 'axios';

// const reducers = (initialState=0, action) => {
//     if (action.type === 'INC'){
//         return initialState+1;
//     } else if (action.type === 'DEC'){
//         return initialState-1;
//     }
//
//     return initialState;
// }

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};

const reducer = (state=initialState, action) => {

    switch(action.type){
        case 'fetch_user_start': {
            state.fetching = true;
            break;
        }
        case 'received users': {
            state.fetching = false;
            state.fetched = true;
            state.users = action.payload;
            break;
        }
        case 'fetch users error': {
            state.fetching = false;
            state.fetched = false;
            state.error = action.payload;
            break;
        }
    }
    return state;
};


const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({type: 'fetch_user_start'})
    axios.get('../data/users.json')
        .then((response) => {
            dispatch({type: 'received users', payload: response.data})
        })
        .catch((err) => {
            dispatch({type: 'fetch users error', payload: err})
        })
    // do something
})
