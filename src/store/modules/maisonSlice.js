import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
};
export const maisonSlice = createSlice({
    name: 'maison',
    initialState,
    reducers: {},
});
export const maisonActions = maisonSlice.actions;
export default maisonSlice.reducer;