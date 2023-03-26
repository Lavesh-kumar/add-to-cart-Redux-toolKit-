const {configureStore}=require('@reduxjs/toolkit');
const {cartReducer}=require('../store/cartSlice')



const store = configureStore({
    reducer:cartReducer,
    devTools: true // Enables the Redux DevTools browser extension
  });






export default store;