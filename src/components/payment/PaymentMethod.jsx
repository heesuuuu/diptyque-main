import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { saveOrderData } from '../../utils/saveOrderData';

const PaymentMethod = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardName, setCardName] = useState('');

  const navigate = useNavigate();
  const { localCartData, totalCartPrice } = useSelector((state) => state.cart);
  const isLoggedIn = !!localStorage.getItem('user');
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentInfo = {
      cardNumber,
      expiryDate,
      securityCode,
      cardName,
    };

    const orderData = {
      id: Date.now(),
      orderDate: new Date().toISOString(),
      items: localCartData,
      totalPrice: totalCartPrice + 100,
      paymentInfo,
    };

    saveOrderData('orderDetails', orderData);

    const historyKey = isLoggedIn ? `orderHistory_${user.email}` : 'guestOrderHistory';
    const prevOrders = JSON.parse(localStorage.getItem(historyKey)) || [];
    const updatedOrders = [...prevOrders, orderData];
    localStorage.setItem(historyKey, JSON.stringify(updatedOrders));

    alert('Your order has been placed successfully!');
    navigate('/');

    const paymentKey = isLoggedIn ? `paymentInfo_${user.email}` : 'guestPaymentInfo';
    localStorage.setItem(paymentKey, JSON.stringify(paymentInfo));
  };

  return (
    <div className="max-w-[643px] mx-auto mt-10">
      <h2 className="font-diptyque text-heading1 pb-[10px] mb-[30px]">Your Payment Method</h2>
      <form onSubmit={handleSubmit}>
        <div className="border border-gray-900 p-5 rounded-md flex items-center gap-3 cursor-pointer">
          <input type="checkbox" id="card" className="w-5 h-5 accent-black" />
          <label htmlFor="card" className="text-sm text-gray-700">
            Use a Credit or Debit Card
          </label>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Card Number *</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="w-full p-3 border border-gray-900 text-sm"
            placeholder="Enter your card number"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date *</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              className="w-full p-3 border border-gray-900 text-sm"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Security Code (CVC) *</label>
            <input
              type="text"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              required
              className="w-full p-3 border border-gray-900 text-sm"
              placeholder="CVC"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card *</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
            className="w-full p-3 border border-gray-900 text-sm"
            placeholder="Enter name"
          />
        </div>

        <button type="submit" className="w-full bg-black text-white py-3 text-center text-sm mt-6">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PaymentMethod;
