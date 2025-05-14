import { createSlice } from '@reduxjs/toolkit';
import perfumeData from '../../data/perfume_updated.json';

const initialState = {
  perfumes: perfumeData,
};

export const promotionSlice = createSlice({
  name: 'promotion',
  initialState,
  reducers: {
  },
});

export const promotionActions = promotionSlice.actions;
export const selectPerfumes = (state) => state.promotion.perfumes;

export default promotionSlice.reducer;
