/* redux, redux-thunk and redux-devtools-extension packages are
   removed from project because of new version of @reduxjs/toolkit */

// Also createStore function replaced with configureStore function

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import cartReducer from './reducers/cartReducers';
import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
};

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  initialState,
});

export default store;
