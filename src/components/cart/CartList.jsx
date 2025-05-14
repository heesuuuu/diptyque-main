import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/modules/cartSlice';
import { BarButton } from '../../ui';
import CartItem from './CartItem';

const CartList = () => {
  const { localCartData, totalCartPrice, selectCartItem, totalSelectedPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.totalCartAmount());
  }, []);

  const navigate = useNavigate();

  const handleCheckout = (e) => {
    if (!selectCartItem && localCartData.some((item) => !item.inStock)) {
      e.preventDefault();
      alert('선택한 상품 중 품절된 상품이 있습니다.');
    } else if (selectCartItem && localCartData.some((item) => item.selected && !item.inStock)) {
      e.preventDefault();
      alert('선택한 상품 중 품절된 상품이 있습니다.');
    } else {
      navigate('/payment/shipping-address');
    }
  };

  const priceStyle = 'flex flex-row justify-between w-full';

  return (
    <div className=" mt-[80px] tablet:mt-[60px]">
      <div className="cart-select-btn flex flex-row gap-6 tablet:gap-4 pb-10 tablet:pb-6">
        <span
          className="cursor-pointer tablet:text-body2-m"
          onClick={() => dispatch(cartActions.toggleSelectCartItem())}
        >
          Select
        </span>
        <span
          className={`cursor-pointer tablet:text-body2-m ${selectCartItem ? '' : 'text-grey-2'}`}
          onClick={() => dispatch(cartActions.removeSelected())}
        >
          Remove Selected
        </span>
      </div>
      <div className="cart-item-list-wrap flex flex-row tablet:flex-col justify-between gap-[10vw] tablet:gap-[80px]">
        <div className="cart-item-list flex flex-col gap-6 w-[65vw] max-w-[1004px] tablet:w-full divide-y divide-lightgrey-4">
          {localCartData.map((item) => (
            <CartItem key={item.id} item={item} className="pt-6 first-of-type:pt-0" />
          ))}
        </div>
        <div className="cart-payment-info desktop:sticky desktop:top-10 h-full  w-[25vw] desktop:max-w-[422px] tablet:w-full flex flex-col gap-[60px] tablet:gap-6">
          <div className="cart-sub-and-ship flex flex-col gap-4 tablet:gap-2">
            <div className={`cart-subtotal ${priceStyle}`}>
              <span>Subtotal</span>
              <span>{selectCartItem ? `€${totalSelectedPrice}` : `€${totalCartPrice}`}</span>
            </div>
            <div className={`cart-shipping ${priceStyle}`}>
              <span>Shipping</span>
              <span>€100</span>
            </div>
          </div>
          <div className="cart-total-checkout flex flex-col gap-8 tablet:gap-4">
            <div className={`cart-total ${priceStyle}`}>
              <span>TOTAL</span>
              <span>{selectCartItem ? `€${totalSelectedPrice + 100}` : `€${totalCartPrice + 100}`}</span>
            </div>
            <div className="cart-checkout-btn" onClick={handleCheckout}>
              <BarButton text="PROCEED TO CHECKOUT" type="filled" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
