import { createSlice } from '@reduxjs/toolkit';
import bodyMockupData from '../../data/body_updated.json';
import candleMockupData from '../../data/candle_updated.json';
import diffuserMockupData from '../../data/diffuser_updated.json';
import notesData from '../../data/notes_data.json';
import perfumeMockupData from '../../data/perfume_updated.json';

const initialProductData = {
  id: '',
  olfactory: {},
  name: '',
  type: '',
  description: '',
  story: '',
  options: [
    {
      size: '',
      price: '',
      weight: '',
      images: { thumbnail: { default: '', hover: '' }, detail: '' },
      optionId: '',
    },
  ],
  collection: '',
  sales: '',
  inStock: '',
};

const initialState = {
  productData: initialProductData,
  perfumeData: perfumeMockupData,
  candleData: candleMockupData,
  diffuserData: diffuserMockupData,
  bodyData: bodyMockupData,
  allProductData: [...perfumeMockupData, ...candleMockupData, ...diffuserMockupData, ...bodyMockupData],
  popularProducts: [],
  notesData: notesData,
  matchingNotesData: [],
  engravingTxt: '',
  loading: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      const id = action.payload;
      state.loading = true;
      const selectedProduct = state.allProductData.find((data) => data.id === id);

      if (selectedProduct) {
        state.productData = selectedProduct;

        // 제품에 notes가 있으면 matchingNotesData도 함께 설정
        if (selectedProduct.notes && Array.isArray(selectedProduct.notes)) {
          state.matchingNotesData = selectedProduct.notes
            .map((note) => {
              return state.notesData.find((data) => data.note === note.note);
            })
            .filter(Boolean); // undefined 값 제거
        } else if (selectedProduct.keyword && Array.isArray(selectedProduct.keyword)) {
          state.matchingNotesData = selectedProduct.keyword
            .map((note) => {
              return state.notesData.find((data) => data.note === note.note);
            })
            .filter(Boolean);
        } else {
          state.matchingNotesData = [];
        }
      }
      state.loading = false;
    },
    getPopularProducts: (state, action) => {
      const id = action.payload;
      state.loading = true;
      let data = [];
      if (id >= 700) {
        data = state.perfumeData;
      } else if (id >= 500) {
        data = state.diffuserData;
      } else if (id >= 300) {
        data = state.candleData;
      } else if (id >= 100) {
        data = state.bodyData;
      }
      state.popularProducts = data.sort((a, b) => b.sales - a.sales).slice(0, 8);
      state.loading = false;
    },
    resetProduct: (state, action) => {
      state.productData = initialProductData;
      state.matchingNotesData = [];
    },
    setEngravingTxt: (state, action) => {
      const txt = action.payload;
      state.engravingTxt = txt;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
