import { configureStore } from '@reduxjs/toolkit';
import cart from './modules/cartSlice';
import category from './modules/categorySlice';
import collection from './modules/collectionSlice';
import guestOrder from './modules/guestOrderSlice';
import maison from './modules/maisonSlice';
import member from './modules/memberSlice';
import mypage from './modules/mypageSlice';
import nav from './modules/navSlice';
import payment from './modules/paymentSlice';
import product from './modules/productSlice';
import promotion from './modules/promotionSlice';
import searchResult from './modules/searchResultSlice';
import service from './modules/serviceSlice';

const store = configureStore({
  reducer: {
    cart,
    category,
    collection,
    guestOrder,
    maison,
    member,
    mypage,
    payment,
    product,
    promotion,
    searchResult,
    service,
    nav,
  },
});

export default store;
