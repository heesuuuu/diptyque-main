import { createSlice } from '@reduxjs/toolkit';

const cartdata = [
  {
    id: 2,
    olfactory: 'Amber',
    name: 'Eau Duelle',
    type: 'Eau de parfum',
    notes: ['Vanilla', 'Pink peppercorn', 'Cypriol', 'Incense'],
    description:
      'An ode to travel. In Eau Duelle eau de parfum, Bourbon vanilla retains its full duality, revealing a spicy facet of greater intensity. The sweet, sugary notes of vanilla - the fruit of an orchid flower - are joined by luminous calamus accents and smoky cypriol accents. A new addiction.',
    story:
      'In the Eau de Parfum, the Bourbon vanilla retains all its sense of duality, unveiling a spiced, denser facet to create a new form of addiction. An ode to travel and vanilla. Along the spice route, the vanilla at the heart of Eau Duelle takes on new aromas: luminous, addictive accents of calamus and dark, smoky nuances of cypriol. Travelling through time and over borders, Bourbon vanilla from Madagascar reveals itself between darkness and light.',
    options: [
      {
        size: '75ml',
        price: 170,
        images: {
          thumbnail: {
            default:
              'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-duelle-eau-de-parfum-75ml-duellep75-1.jpg?quality=100&width=1024',
            hover:
              'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-duelle-eau-de-parfum-75ml-duellep75-2.jpg?quality=100&width=1024',
          },
          detail: [
            'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-duelle-eau-de-parfum-75ml-duellep75-1.jpg?quality=100&width=1024',
            'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-duelle-eau-de-parfum-75ml-duellep75-2.jpg?quality=100&width=1024',
            'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-duelle-eau-de-parfum-75ml-duellep75-3.jpg?quality=100&width=1024',
          ],
        },
        url: 'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-duelle-eau-de-parfum-75ml-duellep75-1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=150&quality=90',
        optionId: 21,
      },
    ],
    collection: [],
    inStock: true,
    quantity: 1,
    engraving: '',
    totalPrice: 170,
    selected: false,
  },
  {
    id: 5,
    olfactory: 'Amber',
    name: 'Eau Navati',
    type: 'Eau de parfum',
    notes: ['Bergamot', 'Petitgrain', 'Peru balsam'],
    description:
      'Deep within the dunes, an oasis outside of time. Eau Nabati eau de parfum is an imaginary stroll through a garden in paradise. The warm, spicy wind reveals lively notes of citrus fruits. In a composition rich in contrasts, fresh bergamot and petitgrain mingle with the amber warmth of immortelle flowers and balm of Peru. Opposing elements in harmony.',
    story:
      'Did you know? Nabati calls to mind botanical, one of the definitions of this word in classical Arabic. The name evokes luxuriant vegetation, inseparable from the art of the paradise garden. The art of perpetual enchantment.',
    options: [
      {
        size: '75ml',
        price: 250,
        images: {
          thumbnail: {
            default:
              'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-nabati-eau-de-parfum-75ml-nabatip75c-1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=1024&quality=90',
            hover:
              'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-nabati-eau-de-parfum-75ml-nabatip75c-2.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=1024&quality=90',
          },
          detail: [
            'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-nabati-eau-de-parfum-75ml-nabatip75c-1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=1024&quality=90',
            'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-nabati-eau-de-parfum-75ml-nabatip75c-2.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=1024&quality=90',
            'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-nabati-eau-de-parfum-75ml-nabatip75c-3.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=1024&quality=90',
          ],
        },
        url: 'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-eau-nabati-eau-de-parfum-75ml-nabatip75c-1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=150&quality=90',
        optionId: 51,
      },
    ],
    collection: [
      {
        collectionName: null,
      },
    ],
    inStock: true,
    quantity: 2,
    engraving: 'Sarang-nim Babo',
    totalPrice: 500,
    selected: false,
  },
  {
    id: 7,
    olfactory: 'Amber',
    name: "L'Autre ",
    type: 'Eau de toilette',
    notes: ['Nutmeg', 'Cumin', 'Caraway', 'Clary sage'],
    description:
      "Nutmeg, cumin, caraway … L'Autre eau de toilette radiates twenty-seven essences from places like Damascus, Palmyra and other regions. Its fragrance speaks of a journey to some faraway place - and also of the haunting sillage of a loved one, subtly scenting the skin with spicy notes.",
    story:
      'A captivating name with a double meaning. “L’Autre” speaks of a trip to a faraway elsewhere. Nutmeg, cumin, caraway... the fragrance radiates twenty-seven essences from places like Damascus and Palmyra. “L’Autre” is also the haunting scent of a loved one, the skin slightly fragranced with spicy notes. Desmond Knox-Leet, one of Diptyque’s founders, concocted “scented pastes” using flowers, dried leaves and resins that served as inspiration for the composition of the Eaux de Toilette.',
    options: [
      {
        size: '100ml',
        price: 145,
        images: {
          thumbnail: {
            default:
              'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-l-autre-eau-de-toilette-100ml-autre100-1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=1024&quality=90',
            hover:
              'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-l-autre-eau-de-toilette-100ml-autre100-2.jpg?format=webp&width=430&quality=90',
          },
          detail: [
            'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-l-autre-eau-de-toilette-100ml-autre100-1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=1024&quality=90',
            'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-l-autre-eau-de-toilette-100ml-autre100-2.jpg?format=webp&width=430&quality=90',
            'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-l-autre-eau-de-toilette-100ml-autre100-3_2.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=1024&quality=90',
          ],
        },
        url: 'https://www.diptyqueparis.com/media/catalog/product/d/i/diptyque-l-autre-eau-de-toilette-100ml-autre100-1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=150&quality=90',
        optionId: 71,
      },
    ],
    collection: [
      {
        collectionName: null,
      },
    ],
    inStock: false,
    quantity: 2,
    engraving: '',
    totalPrice: 290,
    selected: false,
  },
];

const initialState = {
  cartData: [],
  localCartData: (() => {
    try {
      const storedCartData = localStorage.getItem('cartData');
      return storedCartData ? JSON.parse(storedCartData) : [];
    } catch (error) {
      console.error('localStorage JSON parsing error:', error);
      return [];
    }
  })(),
  totalCartQuantity: 0,
  totalCartPrice: 0,
  selectCartItem: false,
  totalSelectedPrice: 0,
  addedToBag: false,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    totalCartAmount: (state, action) => {
      state.totalCartPrice = state.localCartData.reduce((acc, curr) => acc + curr.totalPrice, 0);
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.localCartData.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.localCartData.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.options[0].price,
          engraving: newItem.engraving,
          selected: false,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.options[0].price;
        state.localCartData = state.localCartData.map((data) =>
          data.id === existingItem.id
            ? { ...data, quantity: existingItem.quantity, totalPrice: existingItem.totalPrice }
            : data
        );
      }
      localStorage.setItem('cartData', JSON.stringify(state.localCartData));

      state.totalCartPrice = state.localCartData.reduce((acc, curr) => acc + curr.totalPrice, 0);
      state.totalCartQuantity = state.localCartData.reduce((acc, curr) => acc + curr.quantity, 0);
      state.addedToBag = true;
    },
    resetAddedToBag: (state) => {
      state.addedToBag = false;
    },
    reduceQuantity: (state, action) => {
      const id = action.payload;
      const newItem = state.localCartData.find((item) => item.id === id);
      if (newItem.quantity === 1) return;
      else {
        newItem.quantity--;
        newItem.totalPrice -= newItem.options[0].price;

        state.localCartData = state.localCartData.map((data) =>
          data.id === newItem.id ? { ...data, quantity: newItem.quantity, totalPrice: newItem.totalPrice } : data
        );
      }
      localStorage.setItem('cartData', JSON.stringify(state.localCartData));

      state.totalCartPrice = state.localCartData.reduce((acc, curr) => acc + curr.totalPrice, 0);
      state.totalCartQuantity = state.localCartData.reduce((acc, curr) => acc + curr.quantity, 0);
    },
    removeFromCart: (state, action) => {
      const newItem = action.payload;
      state.localCartData = state.localCartData.filter((item) => item.id !== newItem.id);

      state.totalCartPrice = state.localCartData.reduce((acc, curr) => acc + curr.totalPrice, 0);
      state.totalCartQuantity = state.localCartData.reduce((acc, curr) => acc + curr.quantity, 0);

      localStorage.setItem('cartData', JSON.stringify(state.localCartData));
    },
    toggleSelectCartItem: (state, action) => {
      state.selectCartItem = !state.selectCartItem;
      state.localCartData = state.localCartData.map((item) => ({
        ...item,
        selected: false,
      }));
      state.totalSelectedPrice = state.localCartData
        .filter((item) => item.selected)
        .reduce((acc, curr) => acc + curr.totalPrice, 0);
      localStorage.setItem('cartData', JSON.stringify(state.localCartData));
    },
    toggleSelected: (state, action) => {
      const id = action.payload;
      state.localCartData = state.localCartData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      );
      localStorage.setItem('cartData', JSON.stringify(state.localCartData));

      state.totalSelectedPrice = state.localCartData
        .filter((item) => item.selected)
        .reduce((acc, curr) => acc + curr.totalPrice, 0);
    },
    removeSelected: (state, action) => {
      state.localCartData = state.localCartData.filter((item) => item.selected === false);
      state.selectCartItem = false;
      state.totalCartPrice = state.localCartData.reduce((acc, curr) => acc + curr.totalPrice, 0);
      localStorage.setItem('cartData', JSON.stringify(state.localCartData));
    },
    updateEngrave: (state, action) => {
      const { id, text } = action.payload;
      state.localCartData = state.localCartData.map((item) => (item.id === id ? { ...item, engraving: text } : item));
      localStorage.setItem('cartData', JSON.stringify(state.localCartData));
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
