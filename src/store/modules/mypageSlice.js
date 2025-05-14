import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
};
export const mypageSlice = createSlice({
    name: 'mypage',
    initialState,
    reducers: {},
});
export const mypageActions = mypageSlice.actions;
export default mypageSlice.reducer;