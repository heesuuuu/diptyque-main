import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import checkedIcon from '../../assets/icons/checkbox-checked.svg';
import uncheckedIcon from '../../assets/icons/checkbox-unchecked.svg';
import { login } from '../../store/modules/memberSlice';

const countryCodes = [
  { code: '+1', label: '🇺🇸' },
  { code: '+44', label: '🇬🇧' },
  { code: '+82', label: '🇰🇷' },
  { code: '+49', label: '🇩🇪' },
  { code: '+33', label: '🇫🇷' },
];

const checkboxIcons = {
  checked: checkedIcon,
  unchecked: uncheckedIcon,
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //폼 상태
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phoneCode: '+33',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    marketing: [],
  });

  // 유효성 검사 에러 상태
  const [errors, setErrors] = useState({});

  // 유효성 검사 함수
  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim() === '' ? 'This field is required' : '';
      case 'dob':
        return value === '' ? 'Please enter your date of birth' : '';
      case 'phone':
        return value.trim().length < 10 ? 'Invalid phone number' : '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format';
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters' : '';
      case 'confirmPassword':
        return value !== form.password ? 'Passwords do not match' : '';
      default:
        return '';
    }
  };

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) =>
      type === 'checkbox'
        ? {
            ...prev,
            marketing: checked ? [...prev.marketing, value] : prev.marketing.filter((item) => item !== value),
          }
        : { ...prev, [name]: value }
    );

    // 실시간 유효성 검사
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  //국가 코드 변경 핸들러
  const handleCountryChange = (e) => {
    const newCode = e.target.value;

    setForm((prev) => ({
      ...prev,
      phoneCode: newCode,
      phone: newCode + ' ' + (prev.phone.replace(/^\+\d+\s*/, '') || ''),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: validateField('phone', newCode + ' ' + form.phone),
    }));
  };

  //전화번호 입력 핸들러
  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value.replace(/^\+\d+\s*/, '');

    setForm((prev) => ({
      ...prev,
      phone: prev.phoneCode + ' ' + phoneNumber,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: validateField('phone', phoneNumber),
    }));
  };

  //폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateField(key, form[key]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === '')) {
      const userData = {
        ...form,
        phone: `${form.phoneCode} ${form.phone}`,
        name: `${form.firstName} ${form.lastName}`,
      };

      localStorage.setItem('user', JSON.stringify(userData));
      dispatch(login(userData));
      window.dispatchEvent(new Event('login'));
      alert('Welcome to Diptyque!');
      navigate('/mypage');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 w-full max-w-[450px]">
        <h2 className="font-diptyque text-heading1 text-center mb-8">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/*이름 입력*/}
          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="text-sm font-semibold text-gray-900 block mb-1">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-900 text-sm"
              />
              {errors.firstName && <p className="text-[#D12F37] text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <label className="text-sm font-semibold text-gray-900 block mb-1">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-900 text-sm"
              />
              {errors.lastName && <p className="text-[#D12F37] text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/*생년월일 입력*/}
          <div>
            <label className="text-sm font-semibold text-gray-900 block mb-1">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900 text-sm"
            />
            {errors.dob && <p className="text-[#D12F37] text-xs mt-1">{errors.dob}</p>}
          </div>

          {/*전화번호 입력*/}
          <div>
            <label className="text-sm font-semibold text-gray-900 block mb-1">Phone Number *</label>
            <div className="flex">
              {/*국가 코드 선택*/}
              <select
                className="p-3 border border-gray-900 border-r-0 text-sm bg-white"
                value={form.phoneCode}
                onChange={handleCountryChange}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.label} ({country.code})
                  </option>
                ))}
              </select>

              {/*전화번호 입력*/}
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handlePhoneChange}
                className="w-full p-3 border border-gray-900 text-sm"
                placeholder="Enter your number"
              />
            </div>
            {errors.phone && <p className="text-[#D12F37] text-xs mt-1">{errors.phone}</p>}
          </div>

          {/*이메일 입력*/}
          <div>
            <label className="text-sm font-semibold text-gray-900 block mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900 text-sm"
            />
            {errors.email && <p className="text-[#D12F37] text-xs mt-1">{errors.email}</p>}
          </div>

          {/*비밀번호 입력*/}
          <div>
            <label className="text-sm font-semibold text-gray-900 block mb-1">Password *</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900 text-sm"
            />
            {errors.password && <p className="text-[#D12F37] text-xs mt-1">{errors.password}</p>}
          </div>

          {/*비밀번호 확인*/}
          <div>
            <label className="text-sm font-semibold text-gray-900 block mb-1">Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900 text-sm"
            />
            {errors.confirmPassword && <p className="text-[#D12F37] text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          {/*마케팅 동의 체크박스*/}
          <div>
            <p className="text-gray-700 text-sm mb-5">Get news and thoughtful gifts selected just for you</p>
            <div className="flex justify-between items-center mt-2">
              {['email', 'sms and phone'].map((type) => (
                <label key={type} className="flex items-center text-sm text-gray-900 cursor-pointer">
                  <img
                    src={form.marketing.includes(type) ? checkboxIcons.checked : checkboxIcons.unchecked}
                    alt={type}
                    className="w-5 h-5 mr-2"
                  />
                  <input type="checkbox" name="marketing" value={type} onChange={handleChange} hidden />
                  By {type.toUpperCase()}
                </label>
              ))}
            </div>
            <label className="flex items-center text-sm text-gray-900 cursor-pointer mt-2">
              <img
                src={form.marketing.includes('post') ? checkboxIcons.checked : checkboxIcons.unchecked}
                alt="post"
                className="w-5 h-5 mr-2"
              />
              <input type="checkbox" name="marketing" value="post" onChange={handleChange} hidden />
              By POST
            </label>
          </div>

          {/*회원가입 버튼*/}
          <button
            type="submit"
            className="w-full h-[45px] flex justify-center items-center bg-[#5F5F5F] text-white text-body3 hover:bg-black transition"
          >
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
