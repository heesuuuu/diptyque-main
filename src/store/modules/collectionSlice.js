import { createSlice } from '@reduxjs/toolkit';
import perfumeData from '../../data/perfume_updated.json';
import diffuserData from '../../data/diffuser_updated.json';
import candleData from '../../data/candle_updated.json';
import bodyData from '../../data/body_updated.json';

// 모든 데이터를 하나의 배열로 합치기
const allProducts = [
  ...perfumeData.map((item) => ({ ...item, category: 'perfume' })),
  ...diffuserData.map((item) => ({ ...item, category: 'diffuser' })),
  ...candleData.map((item) => ({ ...item, category: 'candle' })),
  ...bodyData.map((item) => ({ ...item, category: 'body' })),
];

// 키워드 배열을 notes 문자열로 변환하는 함수
const processProducts = (products) => {
  return products.map((product) => {
    if (product.keyword && Array.isArray(product.keyword)) {
      const notes = product.keyword
        .map((item) => (typeof item === 'object' && item.note ? item.note : ''))
        .filter(Boolean)
        .join(', ');

      return { ...product, notes };
    }
    return { ...product, notes: '' };
  });
};

// collectionName만 추출하는 함수
const getCollectionNames = () => {
  const collectionNames = [];

  allProducts.forEach((product) => {
    if (Array.isArray(product.collection)) {
      product.collection.forEach((col) => {
        if (col && typeof col === 'object' && col.collectionName) {
          collectionNames.push(col.collectionName);
        }
      });
    } else if (product.collection && typeof product.collection === 'object' && product.collection.collectionName) {
      collectionNames.push(product.collection.collectionName);
    }
  });

  return [...new Set(collectionNames)].sort();
};

// 컬렉션별 설명 데이터 추출
const extractCollectionDescriptions = () => {
  const descriptions = {};

  allProducts.forEach((product) => {
    let collectionNames = [];

    if (Array.isArray(product.collection)) {
      product.collection.forEach((col) => {
        if (col && typeof col === 'object' && col.collectionName) {
          collectionNames.push(col.collectionName);
        }
      });
    } else if (product.collection && typeof product.collection === 'object' && product.collection.collectionName) {
      collectionNames.push(product.collection.collectionName);
    }

    collectionNames.forEach((collectionName) => {
      if (!descriptions[collectionName]) {
        descriptions[collectionName] = product.story || product.description || '';
      }
    });
  });

  return descriptions;
};

const processedProducts = processProducts(allProducts);
const collectionNames = getCollectionNames();
const collectionsDescriptions = extractCollectionDescriptions();

const initialState = {
  allCollectionNames: collectionNames,
  allProducts: processedProducts,
  selectedCollection: collectionNames.length > 0 ? collectionNames[0] : null,
  CollectionProducts: [],
  selectedCollectionDescription: collectionNames.length > 0 ? collectionsDescriptions[collectionNames[0]] || '' : '',
  collectionsDescriptions: collectionsDescriptions,
  loading: false,
  error: null,
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    selectCollection: (state, action) => {
      state.selectedCollection = action.payload;

      // 선택된 컬렉션의 설명 업데이트
      state.selectedCollectionDescription = state.collectionsDescriptions[action.payload] || '';

      // 선택된 collectionName에 해당하는 제품 필터링
      state.CollectionProducts = state.allProducts.filter((product) => {
        if (Array.isArray(product.collection)) {
          return product.collection.some(
            (col) => col && typeof col === 'object' && col.collectionName === action.payload
          );
        } else if (product.collection && typeof product.collection === 'object') {
          return product.collection.collectionName === action.payload;
        }
        return false;
      });
    },

    clearSelection: (state) => {
      state.selectedCollection = null;
      state.CollectionProducts = [];
      state.selectedCollectionDescription = '';
    },

    // 스크롤 위치에 기반하여 컬렉션만 변경 (상품 목록은 변경하지 않음)
    updateCurrentCollection: (state, action) => {
      const collectionName = action.payload;

      if (collectionName && collectionName !== state.selectedCollection) {
        state.selectedCollection = collectionName;
        state.selectedCollectionDescription = state.collectionsDescriptions[collectionName] || '';
      }
    },

    updateSelectedCollectionOnly: (state, action) => {
      state.selectedCollection = action.payload;
      state.selectedCollectionDescription = state.collectionsDescriptions[action.payload] || '';
    },

    // 컬렉션 설명 데이터 업데이트 리듀서 추가
    updateCollectionDescriptions: (state, action) => {
      state.collectionsDescriptions = action.payload;
    },
  },
});

export const {
  selectCollection,
  clearSelection,
  updateCurrentCollection,
  updateSelectedCollectionOnly,
  updateCollectionDescriptions,
} = collectionSlice.actions;

export default collectionSlice.reducer;
