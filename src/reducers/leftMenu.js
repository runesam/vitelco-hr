import {
    SET_LEFT_MENU_DATA,
    TOGGLE_LEFT_MENU_SIZE,
} from './../actions'

export default function leftMenu(state = { data: [], small: false }, action) {
    switch (action.type) {
        case SET_LEFT_MENU_DATA:
            return Object.assign({}, state, { data: action.payload });
        case TOGGLE_LEFT_MENU_SIZE:
            return { ...state, small: !state.small }
        default:
            return state
    }
}
