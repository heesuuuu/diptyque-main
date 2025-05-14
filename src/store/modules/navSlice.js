import { createSlice } from '@reduxjs/toolkit';

const menuData = [
  {
    id: 1,
    menuName: 'MAISON',
    url: '/maison',
    imgUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/mainslide_1.png?raw=true',
    tabletUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/tablet%201.png?raw=true',
    mobileUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/Mobile%201.png?raw=true',
  },
  {
    id: 2,
    menuName: 'PROMOTION',
    url: '/promotion',
    imgUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/mainslide_2.png?raw=true',
    tabletUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/tablet%202.png?raw=true',
    mobileUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/Mobile%202.png?raw=true',
    twodepth: [{ depthName: 'FOUR SEASONS' }],
  },
  {
    id: 3,
    menuName: 'PRODUCTS',
    url: '/product/eauxdeparfum',
    imgUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/mainslide_3.png?raw=true',
    tabletUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/tablet%203.png?raw=true',
    mobileUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/Mobile%203.png?raw=true',
    twodepth: [
      {
        depthName: 'PERFUMES',
        depthList: [
          { depthItem: 'Eaux de parfum', url: '/eauxdeparfum' },
          { depthItem: 'Eaux de toilette', url: '/eauxdetoilette' },
          { depthItem: 'Solid perfumes', url: '/solidperfumes' },
        ],
      },
      {
        depthName: 'CANDLES | DIFFUSERS',
        depthList: [
          { depthItem: 'Candles', url: '/candles' },
          { depthItem: 'Diffusers', url: '/diffusers' },
        ],
      },
      {
        depthName: 'BODY',
        depthList: [
          { depthItem: 'Hand care', url: '/handcare' },
          { depthItem: 'Body care', url: '/bodycare' },
          { depthItem: 'Scented soaps', url: '/scentedsoaps' },
        ],
      },
    ],
  },
  {
    id: 4,
    menuName: 'COLLECTION',
    url: '/collection',
    imgUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/mainslide_4.png?raw=true',
    tabletUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/tablet%204.png?raw=true',
    mobileUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/Mobile%204.png?raw=true',
  },
  {
    id: 5,
    menuName: 'SERVICES',
    url: '/service',
    imgUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/mainslide_5.png?raw=true',
    tabletUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/tablet%205.png?raw=true',
    mobileUrl: 'https://github.com/2mightyMt/diptyqueStatic1/blob/main/page/main/Mobile%205.png?raw=true',
  },
  { id: 6, menuName: 'SEARCH', url: '/searchresult' },
  { id: 7, menuName: 'MYPAGE', url: '/mypage' },
];

const initialState = {
  menuData: menuData,
  activeMenu: null,
  menuOpen: false,
};
export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    clearMenu: (state) => {
      state.activeMenu = null;
    },
    toggleMenu: (state, action) => {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu: (state, action) => {
      state.menuOpen = false;
    },
  },
});
export const navActions = navSlice.actions;
export default navSlice.reducer;
