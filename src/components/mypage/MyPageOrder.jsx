import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Icon } from '../../ui';

const MyPageOrder = () => {
  const [orders, setOrders] = useState([]);
  const location = useLocation();
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const currentTitle =
    {
      '/mypage/info': 'My Information',
      '/mypage/order': 'My Orders',
      '/mypage/payment': 'My Payment Method',
      '/mypage/ask': 'Ask for Help',
    }[location.pathname] || 'My Page';

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const key = user ? `orderHistory_${user.email}` : 'guestOrderHistory';
    const orderList = JSON.parse(localStorage.getItem(key)) || [];

    const sortedOrders = orderList.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

    setOrders(sortedOrders);
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

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[600px] mx-auto">
          <h2 className="hidden lg:block font-diptyque text-heading1 border-b pb-[10px] mb-[30px]">My Orders</h2>

          {orders.length === 0 ? (
            <div className="w-[534px] h-[472px] mx-auto flex flex-col justify-center items-center">
              <p className="text-gray-600 text-center mb-[170px]">You have no orders.</p>
              <button className="w-full bg-[#2D3540] text-white py-3 text-center">Shop Now</button>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {orders.map((order, index) => (
                <div key={index} className="border-b pb-6">
                  <div className="text-sm text-gray-500 mb-4">
                    <span>Order Date: {formatDate(order.orderDate)}</span> | <span>Total: €{order.totalPrice}</span>
                  </div>

                  {order.items.map((item) => (
                    <div key={item.id} className="cart-item flex flex-row gap-6 items-stretch w-full mb-8">
                      <Link to={`/product/detail/${item.id}`} className="block w-[200px] flex-shrink-0">
                        <img
                          src={item.options[0].images.thumbnail.default}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      <div className="flex flex-col justify-between w-full">
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col gap-2 h-full">
                            <span className="text-heading2 font-diptyque">
                              {item.name} - {item.type}
                            </span>
                            <span className="text-grey-4">{item.options[0].size}</span>
                            {item.engraving && <span className="text-grey-4">Engraving: {item.engraving}</span>}
                            <span className="text-grey-4">Quantity: {item.quantity}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                          <span className="text-lg font-semibold">€{item.totalPrice}</span>
                          {!item.inStock && <span className="text-red-500">Out of Stock</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPageOrder;
