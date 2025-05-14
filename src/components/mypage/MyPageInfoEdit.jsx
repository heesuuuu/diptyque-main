import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const countryCodes = [
  { code: '+1', label: '🇺🇸' },
  { code: '+44', label: '🇬🇧' },
  { code: '+82', label: '🇰🇷' },
  { code: '+49', label: '🇩🇪' },
  { code: '+33', label: '🇫🇷' },
];

const MyPageInfoEdit = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phoneCode: '+33',
    phone: '',
    email: '',
    password: '',
  });

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation();

  // 유저 정보 불러오기
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      const [firstName, ...lastNameArr] = (storedUser.name || '').split(' ');
      setForm({
        firstName: firstName || '',
        lastName: lastNameArr.join(' ') || '',
        dob: storedUser.dob || '',
        phoneCode: storedUser.phoneCode || '+33',
        phone: storedUser.phone?.replace(/^\+\d+\s*/, '') || '',
        email: storedUser.email || '',
        password: storedUser.password || '',
      });
    }
  }, []);

  // input 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 저장 버튼
  const handleSave = () => {
    const updatedUser = {
      ...form,
      phone: `${form.phoneCode} ${form.phone}`,
      name: `${form.firstName} ${form.lastName}`,
    };

    if (newPassword && newPassword === confirmPassword) {
      updatedUser.password = newPassword;
    }

    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert('Information updated successfully!');
  };

  const currentTitle =
    {
      '/mypage/info': 'My Information',
      '/mypage/order': 'My Orders',
      '/mypage/payment': 'My Payment Method',
      '/mypage/ask': 'Ask for Help',
    }[location.pathname] || 'My Page';

  return (
    <div className="max-w-[1760px] mx-auto pt-[219px] pb-[78px] px-[20px] flex flex-col lg:flex-row">
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

      {/* 우측 폼 */}
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[600px] mx-auto">
          <h2 className="font-diptyque text-heading1 border-b pb-[10px] mb-[30px]">Personal Information</h2>

          {/* 이름 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">FIRST NAME *</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-900 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">LAST NAME *</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-900 text-sm"
              />
            </div>
          </div>

          {/* 생년월일 */}
          <div className="mt-[20px]">
            <label className="text-sm font-medium text-gray-700 mb-1 block">DATE OF BIRTH *</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900 text-sm"
            />
          </div>

          {/* 전화번호 */}
          <div className="mt-[20px]">
            <label className="text-sm font-medium text-gray-700 mb-1 block">PHONE NUMBER *</label>
            <div className="flex">
              <select
                value={form.phoneCode}
                onChange={(e) => setForm((prev) => ({ ...prev, phoneCode: e.target.value }))}
                className="p-3 border border-gray-900 border-r-0 text-sm bg-white"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.label} ({country.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-900 text-sm"
              />
            </div>
          </div>

          {/* 이메일 */}
          <div className="mt-[20px]">
            <label className="text-sm font-medium text-gray-700 mb-1 block">EMAIL ADDRESS *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              disabled
              className="w-full p-3 border border-gray-900 text-sm bg-gray-100"
            />
          </div>

          <button onClick={handleSave} className="w-full bg-black text-white py-3 mt-[20px] text-sm">
            Save
          </button>

          {/* 비밀번호 변경 */}
          <div className="mt-[40px]">
            <h2 className="font-diptyque text-heading1 border-b pb-[10px] mb-[30px]">Login Information</h2>

            <div className="mt-[20px]">
              <label className="text-sm font-medium text-gray-700 mb-1 block">NEW PASSWORD *</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border border-gray-900 text-sm"
              />
            </div>
            <div className="mt-[20px]">
              <label className="text-sm font-medium text-gray-700 mb-1 block">CONFIRM NEW PASSWORD *</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-900 text-sm"
              />
            </div>

            <button onClick={handleSave} className="w-full bg-black text-white py-3 mt-[20px] text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageInfoEdit;
