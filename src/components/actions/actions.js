/*
 * action types
 */

export const SET_VISIBLE_MENU = 'SET_VISIBLE_MENU';

/*
 * other constants
 */

export const VisibleMenu = {
    MENU_ADMIN: 'MENU_ADMIN',
    MENU_USER: 'MENU_USER',
    MENU_UNLOGGED: 'MENU_UNLOGGED'
}

export const TOKEN = 'TOKEN';

export const setVisibleMenu = (menu) => {
    return { type: SET_VISIBLE_MENU, menu }
}

export function setToken(text) {
    return { type: TOKEN, text }
}