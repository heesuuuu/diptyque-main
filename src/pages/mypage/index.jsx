import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Mypage = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      // `name` 필드가 있으면 그대로 사용 (구글 로그인 포함)
      if (storedUser.name) {
        setUserName(storedUser.name);
      }
      // `firstName`과 `lastName`이 따로 저장된 경우 결합
      else if (storedUser.firstName && storedUser.lastName) {
        setUserName(`${storedUser.firstName} ${storedUser.lastName}`);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // 유저 정보 삭제
    window.dispatchEvent(new Event('storage')); // ✅ 로그아웃 즉시 변경사항 반영
    navigate('/'); // 홈으로 이동
  };

  return (
    <div className="max-w-[422px] mx-auto pt-[219px] pb-[78px] px-[20px]">
      {/* 타이틀 */}
      <h4 className="font-diptyque text-heading1 text-center mb-[10px]">Good to see you again,</h4>
      <h4 className="font-diptyque text-heading1 text-center mb-[25px]">{userName}</h4>

      {/* 네비게이션 (메뉴 리스트) */}
      <nav className="flex flex-col space-y-[10px] border-b pb-5">
        {[
          { path: '/mypage/info', label: 'My Information' },
          { path: '/mypage/order', label: 'My Orders' },
          { path: '/mypage/payment', label: 'My Payment Method' },
          { path: '/mypage/ask', label: 'Ask for Help' },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex justify-between items-center text-lg py-4 px-2 ${isActive ? 'text-gray-600' : 'text-black'}`
            }
          >
            {label}
            <span className="text-black text-xl">›</span> {/* 오른쪽 화살표 아이콘 */}
          </NavLink>
        ))}
      </nav>

      {/* Help Center 섹션 */}
      <div className="bg-gray-200 p-8 text-center mt-[50px]">
        <h3 className="font-diptyque text-heading1 mb-2">Need Help?</h3>
        <p className="text-gray-600 mb-4">We are here to assist you</p>
        <button className="bg-black text-white py-2 px-6 mb-4">CONTACT US</button>
        <p className="text-gray-600">0800 840 0010</p>
        <p className="text-gray-600">Monday - Friday: 10 am to 7 pm</p>
        <p className="text-gray-600">Saturday: 10 am to 5 pm</p>
        <p className="text-black mt-4 underline">Help Center</p>
      </div>

      {/* Sign Out 버튼 */}
      <p
        className="font-diptyque text-center mt-[40px] mb-[10px] cursor-pointer text-black hover:underline"
        onClick={handleLogout}
      >
        Sign Out
      </p>
    </div>
  );
};

export default Mypage;
