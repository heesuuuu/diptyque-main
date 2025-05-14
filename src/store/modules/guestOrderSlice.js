import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
};
export const guestOrderSlice = createSlice({
    name: 'guestOrder',
    initialState,
    reducers: {},
});
export const guestOrderActions = guestOrderSlice.actions;
export default guestOrderSlice.reducer;