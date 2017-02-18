export default function reducer(state={
    fetching: false,
    fetched: false,
    items: [],
    error: null
}, action) {
    switch(action.type){
        case 'get menu items': {
            return {...state, fetching: false, fetched: true, items: action.payload};
            break;
        }

        case 'error': {
            return {...state, fetching: false, fetched: false, error: action.payload};
            break;
        }
    }
    return state;
}
