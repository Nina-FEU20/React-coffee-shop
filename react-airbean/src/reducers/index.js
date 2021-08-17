// Importing Combined Reducers
import { combineReducers } from 'redux';
// Importing reducers
import coffeeMenuReducer from './coffeeMenuReducer';
import toggleNavReducer from './toggleNavReducer';
import userCartReducer from './userCartReducer';
import cartIconReducer from './cartIconReducer'; 

const allReducers = combineReducers({
    coffeeMenu: coffeeMenuReducer,
    toggleNav: toggleNavReducer,
    userCart: userCartReducer,
    cartIconAmount: cartIconReducer
});

export default allReducers;