import { combineReducers } from 'redux';
import location from './location';
import leftMenu from './leftMenu';

export const makeRootReducer = asyncReducers => combineReducers({
    location,
    leftMenu,
    ...asyncReducers,
});

export const injectReducer = (store, { key, reducer }) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
    const temp = Object.assign({}, store);
    temp.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(temp.asyncReducers));
};

export default makeRootReducer;
