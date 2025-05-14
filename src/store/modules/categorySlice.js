import { createSlice } from '@reduxjs/toolkit';
import bodyMockupData from '../../data/body_updated.json';
import candleMockupData from '../../data/candle_updated.json';
import diffuserMockupData from '../../data/diffuser_updated.json';
import perfumeMockupData from '../../data/perfume_updated.json';

const categoryInfo = [
  {
    category: 'eauxdeparfum',
    title: 'Eaux de parfum',
    desc: "An air of curiosity … in a bottle. We find the wondrous in every location, every moment – and that's how Diptyque eaux de parfums are born. Each is like a landscape of fragrances, for you to discover or give as a gift.",
  },
  {
    category: 'eauxdetoilette',
    title: 'Eaux de toilette',
    desc: 'Diptyque eaux de toilette liberate the imagination and awaken the senses. Perfumes that beckon you to take a trip through the different olfactory families in perfumery.',
  },
  {
    category: 'solidperfumes',
    title: 'Solid perfumes',
    desc: 'Applied with the fingertips, this balm perfumes the skin. The case is readily portable and endlessly refillable.',
  },
  {
    category: 'candles',
    title: 'Candles',
    desc: 'Diptyque has been transmuting light into perfume since 1963. With its collection of classic scented candles, the Maison showcases olfactory treasures inspired by nature, and in so doing turns the spotlight on an exceptional herbarium of scents.',
  },
  {
    category: 'diffusers',
    title: 'Diffusers',
    desc: 'Endlessly refillable, the home fragrance diffuser with its rattan reeds disseminates the iconic scents of Diptyque into large spaces – while playing with light in its own unique fashion.',
  },
  {
    category: 'handcare',
    title: 'Hand care',
    desc: 'Hand wash, lotions and creams – a collection of hand care products with skin-friendly formulations. A break given over to well-being and harmony – in pursuit of natural beauty.',
  },
  {
    category: 'bodycare',
    title: 'Body care',
    desc: 'The Maison Diptyque has placed all of its perfuming expertise in the service of natural beauty. Fresh lotion, shower gel, satin oil, body balm … With its skin-friendly formulations, the collection of sensorial skincare products for the body invites you to enjoy a break – one given over to well-being and harmony.',
  },
  {
    category: 'scentedsoaps',
    title: 'Scented soaps',
    desc: "A delicate alchemy of perfume making. Crafted with premium ingredients that gently caress the skin, these scented soaps transform everyday moments into sensorial rituals. Each one carries a distinctive fragrance that, like a small work of art, brings Diptyque's signature elegance to your bathroom.",
  },
];

const initialState = {
  perfumeData: perfumeMockupData,
  candleData: candleMockupData,
  diffuserData: diffuserMockupData,
  bodyData: bodyMockupData,
  categoryData: [],
  categoryInfo: {},
  olfactoryData: [],
  selectedOlfactory: false,
  selectedOlfactoryFilters: [],
  loading: false,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      const category = action.payload;
      state.loading = true;
      state.categoryInfo = categoryInfo.find((info) => info.category === category);
    },
    getCategory: (state, action) => {
      const category = action.payload;
      switch (category) {
        case 'eauxdeparfum':
          state.categoryData = state.perfumeData.filter((data) => data.type === 'Eau de parfum');
          break;
        case 'eauxdetoilette':
          state.categoryData = state.perfumeData.filter((data) => data.type === 'Eau de toilette');
          break;
        case 'solidperfumes':
          state.categoryData = state.perfumeData.filter((data) => data.type === 'Refillable solid perfume');
          break;
        case 'candles':
          state.categoryData = state.candleData;
          break;
        case 'diffusers':
          state.categoryData = state.diffuserData;
          break;
        case 'handcare':
          state.categoryData = state.bodyData.filter((data) => data.type.includes('hand'));
          break;
        case 'bodycare':
          state.categoryData = state.bodyData.filter(
            (data) => !data.type.includes('hand') && !data.type.includes('Scented soap')
          );
          break;
        case 'scentedsoaps':
          state.categoryData = state.bodyData.filter((data) => data.type.includes('Scented soap'));
          break;
      }
      state.loading = false;
    },
    resetCategory: (state, action) => {
      state.categoryInfo = {};
      state.categoryData = [];
    },
    getOlfactoryData: (state, action) => {
      const { name, selected } = action.payload;
      const lowerCaseName = name.toLowerCase();

      if (selected) {
        // 이미 선택된 경우 해제
        state.selectedOlfactoryFilters = state.selectedOlfactoryFilters.filter((filter) => filter !== lowerCaseName);
        state.olfactoryData = state.olfactoryData.filter((data) => data.olfactory.toLowerCase() !== lowerCaseName);
      } else {
        state.selectedOlfactoryFilters.push(lowerCaseName);
        const newData = state.categoryData.filter(
          (data) => data.olfactory && data.olfactory.toLowerCase() === lowerCaseName
        );

        // 먼저 같은 이름의 기존 항목 제거 (안전을 위해)
        state.olfactoryData = state.olfactoryData.filter((data) => data.olfactory.toLowerCase() !== lowerCaseName);

        if (newData.length > 0) {
          state.olfactoryData = [...newData, ...state.olfactoryData];
        }
      }
      state.selectedOlfactory = state.selectedOlfactoryFilters.length > 0;
    },
    resetOlfactoryData: (state, action) => {
      state.selectedOlfactory = false;
      state.olfactoryData = [];
    },
    setSortedList: (state, action) => {
      const sort = action.payload;

      if (sort === 'name') {
        state.categoryData = state.categoryData.sort((a, b) => a[sort].localeCompare(b[sort]));
      } else if (sort === 'created_at') {
        state.categoryData = state.categoryData.sort((a, b) => new Date(b[sort]) - new Date(a[sort]));
      } else if (sort === 'sales') {
        state.categoryData = state.categoryData.sort((a, b) => b[sort] - a[sort]);
      } else {
        state.categoryData = state.categoryData.sort((a, b) => a['id'] - b['id']);
      }
    },
  },
});
export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
