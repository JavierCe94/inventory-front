import { combineReducers } from 'redux';
import {
    VisibleMenu,
    TOKEN
} from './../actions/actions';

const { MENU_UNLOGGED } = VisibleMenu;

const vMenu = (state = MENU_UNLOGGED, action) => {
    switch (action.type) {
        case VisibleMenu:
            return action.menu;
        default:
            return state;
    }
}

const token = (state = "", action) => {
    switch (action.type) {
        case TOKEN:
            return action.text
        default:
            return state;
    }
}

const reducers = combineReducers({
    vMenu,
    token
})

export default reducers;