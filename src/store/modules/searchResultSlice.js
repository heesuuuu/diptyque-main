import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchData: [],
};
export const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {},
});
export const searchResultActions = searchResultSlice.actions;
export default searchResultSlice.reducer;
