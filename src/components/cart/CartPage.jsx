import React from 'react';
import { useSelector } from 'react-redux';
import CartEmpty from './CartEmpty';
import CartList from './CartList';

const CartPage = () => {
  const { localCartData } = useSelector((state) => state.cart);

  return (
    <div className="pt-[128px] tablet:pt-[76px] px-[80px] tablet:px-6 mobile:px-4 pb-[120px] tablet:pb-[60px] ">
      <div className="mt-[120px] tablet:mt-[60px] text-heading1 tablet:text-heading1-m font-diptyque">Shopping Bag</div>
      {localCartData.length > 0 ? <CartList /> : <CartEmpty />}
    </div>
  );
};

export default CartPage;
