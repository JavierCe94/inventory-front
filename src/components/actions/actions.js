export const VisibleMenu = {
    MENU_ADMIN: 'MENU_ADMIN',
    MENU_USER: 'MENU_USER',
    MENU_UNLOGGED: 'MENU_UNLOGGED'
}

export const TOKEN = 'TOKEN';

export const setVisibleMenu = (menu) => {
    return { type: VisibleMenu, menu }
}

export function setToken(text) {
    return { type: TOKEN, text }
}