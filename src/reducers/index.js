import { combineReducers } from 'redux'
import location from './location'
import leftMenu from './leftMenu'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location,
    leftMenu,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
