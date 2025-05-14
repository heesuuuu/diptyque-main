import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const { localCartData, totalCartPrice, selectCartItem, totalSelectedPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const displayedSubtotal = selectCartItem ? totalSelectedPrice : totalCartPrice;
  const shippingFee = displayedSubtotal > 0 ? 100 : 0;
  const totalPrice = displayedSubtotal + shippingFee;

  return (
    <div className="w-full">
      {localCartData.map((item) => (
        <div key={item.id} className="flex items-center gap-4 py-1 h-[267px]">
          <img
            src={item.options[0].images.thumbnail.default}
            alt={item.name}
            className="w-[200px] h-[267px] object-cover"
          />
          <div className="flex-1 pl-5">
            <p className="font-diptyque text-heading2 pb-[10px] mb-[30px]">
              {item.name}
              <br /> {item.type}
            </p>
            <p className="text-sm text-gray-500">{item.options[0].size}</p>
          </div>
        </div>
      ))}

      <div className="mt-20 border-t pt-4">
        <div className="flex justify-between text-lg">
          <span>Subtotal</span>
          <span>€{displayedSubtotal}</span>
        </div>
        <div className="flex justify-between text-lg mt-2">
          <span>Shipping</span>
          <span>€{shippingFee}</span>
        </div>
        <div className="flex justify-between text-lg font-bold mt-4">
          <span>Total</span>
          <span>€{totalPrice}</span>
        </div>
      </div>

      <button className="w-full bg-black text-white py-3 text-center text-sm mt-5" onClick={() => navigate('/cart')}>
        Edit My Cart
      </button>
    </div>
  );
};

export default OrderSummary;
