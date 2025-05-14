export const saveOrderData = (key, data) => {
  const isLoggedIn = !!localStorage.getItem('user');
  const storageKey = isLoggedIn ? 'orderInfo' : 'guestOrder';

  const existingData = JSON.parse(localStorage.getItem(storageKey)) || {};
  const updatedData = { ...existingData, [key]: data };

  localStorage.setItem(storageKey, JSON.stringify(updatedData));
};
