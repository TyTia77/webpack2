import axios from "axios";

export function getItems() {
    return function(dispatch){
        axios.get('../../data/menu-items.json')
            .then((response) => {
                dispatch({type: "get menu items", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "error", payload: err})
            })
    }
}
