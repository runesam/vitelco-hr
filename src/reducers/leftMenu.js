import { SET_LEFT_MENU_DATA } from './../actions'

export default function leftMenu (state = [], action) {
  switch (action.type) {
    case SET_LEFT_MENU_DATA:
      return action.payload
    default:
      return state
  }
}
