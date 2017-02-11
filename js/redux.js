import {combineReducers, createStore} from 'redux';

const userReducer = (state={}, action) => {
    switch(action.type){
        case 'change_name': {
            state.name = action.payload;
            break;
        }
        case 'change_age': {
            state.age = action.payload;
            break;
        }
    }
    return state;
};

const tweetsReducer = (state=[], action) => {
    return state;
};

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})

const store = createStore(reducers);

store.subscribe(()=>{
    console.log('store changed', store.getState());
});

store.dispatch({type: 'change_name', payload: 'will'});
store.dispatch({type: 'change_age', payload: 35});
store.dispatch({type: 'change_age', payload: 45});
