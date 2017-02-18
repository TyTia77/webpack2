import {combineReducers} from 'redux';

import menus from './menuReducer';
import users from './usersReducer';

export default combineReducers({
    menus,
    users
})
