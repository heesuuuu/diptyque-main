import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveOrderData } from '../../utils/saveOrderData';

const ShippingMethod = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMethod) {
      alert('Please select a shipping method');
      return;
    }
    saveOrderData('shippingMethod', selectedMethod);
    navigate('/payment/payment-method');
  };

  return (
    <div className="max-w-[643px] mx-auto mt-10">
      <h2 className="font-diptyque text-heading1 pb-[10px] mb-[30px]">Shipping Method</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border border-gray-900 p-5 rounded-md flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="shipping"
            value="ChronoPost"
            onChange={handleChange}
            className="w-5 h-5 accent-black"
          />
          <label className="text-sm text-gray-700">
            ChronoPost - Estimated delivery date: <strong>21.03</strong>
          </label>
        </div>
        <button type="submit" className="w-full bg-black text-white py-3 text-center text-sm">
          Select Payment Method
        </button>
      </form>
    </div>
  );
};

export default ShippingMethod;
