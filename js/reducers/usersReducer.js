export default function reducer(state={
    fetching: false,
    fetched: false,
    users: [],
    error: null
}, action) {
    switch(action.type){
        case 'fetch_user_start': {
            state.fetching = true;
            break;
        }
        case 'received users': {
            return {...state, fetching: false, fetched: true, users: action.payload};
            break;
        }
        case 'fetch users error': {
            state.fetching = false;
            state.fetched = false;
            state.error = action.payload;
            break;
        }
        case 'whatever': {
            return {...state, fetching: false, fetched: true, users: action.payload};
            break;
        }
    }
    return state;
}
