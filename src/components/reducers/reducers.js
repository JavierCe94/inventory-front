import { combineReducers } from 'redux';
import {
    VisibleMenu,
    SET_VISIBLE_MENU,
    TOKEN
} from './../actions/actions';

const { MENU_UNLOGGED } = VisibleMenu;

const visibleMenu = (state = MENU_UNLOGGED, action) => {
    switch (action.type) {
        case SET_VISIBLE_MENU:
            return action.menu;
        default:
            return state;
    }
}

function token(state = "", action) {
    switch (action.type) {
        case TOKEN:
            return action.text
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibleMenu,
    token
})

export default todoApp;