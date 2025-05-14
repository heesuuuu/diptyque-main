import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const MyPageMyPayment = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const menuTitles = {
    '/mypage/info': 'My Information',
    '/mypage/order': 'My Orders',
    '/mypage/payment': 'My Payment Method',
    '/mypage/ask': 'Ask for Help',
  };
  const currentTitle = menuTitles[location.pathname] || 'My Page';

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const key = user ? `paymentInfo_${user.email}` : 'guestPaymentInfo';
    const storedMethod = JSON.parse(localStorage.getItem(key));

    if (storedMethod) {
      setPaymentMethods([storedMethod]);
    }
  }, []);

  return (
    <div className="max-w-[1760px] w-full mx-auto pt-[219px] pb-[78px] px-[20px] flex flex-col lg:flex-row">
      <nav className="hidden lg:flex flex-col space-y-[10px] absolute left-[80px] top-[219px] w-[300px]">
        <h2 className="font-diptyque text-heading1 mb-[30px] mt-[30px]">My Page</h2>
        {[
          { path: '/mypage/info', label: 'My Information' },
          { path: '/mypage/order', label: 'My Orders' },
          { path: '/mypage/payment', label: 'My Payment Method' },
          { path: '/mypage/ask', label: 'Ask for Help' },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className="flex justify-between items-center text-[20px] py-4 font-diptyque text-black border-b border-gray-300"
          >
            {label}
            <span className="text-black text-xl">›</span>
          </NavLink>
        ))}
      </nav>

      <div className="lg:hidden text-center text-[20px] font-diptyque border-b border-gray-300 pb-4">
        My Page | {currentTitle}
      </div>

      <div className="w-full max-w-[600px] h-auto lg:h-[975px] mx-auto mt-[50px] lg:mt-0">
        <h2 className="hidden lg:block font-diptyque text-heading1 border-b pb-[10px] mb-[30px]">My Payment Method</h2>

        {paymentMethods.length === 0 ? (
          <div className="w-[534px] h-[472px] mx-auto flex flex-col justify-center items-center">
            <p className="text-gray-600 text-center mb-[170px]">You have no registered payment methods.</p>
            <button onClick={() => navigate('/payment')} className="w-full bg-[#2D3540] text-white py-3 text-center">
              Add payment method
            </button>
          </div>
        ) : (
          <div className="w-full border border-gray-300 p-6 rounded-md shadow-sm">
            <p className="text-sm mb-2">Card Number: **** **** **** {paymentMethods[0].cardNumber.slice(-4)}</p>
            <p className="text-sm mb-2">Expiry Date: {paymentMethods[0].expiryDate}</p>
            <p className="text-sm mb-2">Name on Card: {paymentMethods[0].cardName}</p>
            <button onClick={() => navigate('/')} className="mt-6 bg-black text-white py-2 px-4 text-sm">
              Change Payment Method
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPageMyPayment;
