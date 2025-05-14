import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveOrderData } from '../../utils/saveOrderData';

const ShippingAddress = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', address: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setForm((prev) => ({
        ...prev,
        firstName: storedUser.firstName || '',
        lastName: storedUser.lastName || '',
        phone: storedUser.phone || '',
        address: '',
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveOrderData('shippingAddress', form);
    navigate('/payment/shipping-method');
  };

  return (
    <div className="max-w-[643px] mx-auto mt-10">
      <h2 className="font-diptyque text-heading1 pb-[10px] mb-[30px]">Shipping Address</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-900 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-900 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-900 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address *</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-900 text-sm"
          />
        </div>

        <button type="submit" className="w-full bg-black text-white py-3 text-center text-sm">
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
