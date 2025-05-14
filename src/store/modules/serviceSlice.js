import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
};
export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
});
export const serviceActions = serviceSlice.actions;
export default serviceSlice.reducer;