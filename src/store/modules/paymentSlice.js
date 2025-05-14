import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
};
export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {},
});
export const paymentActions = paymentSlice.actions;
export default paymentSlice.reducer;