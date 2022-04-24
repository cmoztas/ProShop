/* redux, redux-thunk and redux-devtools-extension packages are
   removed from project because of new version of @reduxjs/toolkit */

// Also createStore function replaced with configureStore function

import { productListReducer } from './reducers/productReducers';
import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  productList: productListReducer,
};

const initialState = {};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  initialState,
});

export default store;
