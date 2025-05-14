import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import checkedIcon from '../../assets/icons/checkbox-checked.svg';
import uncheckedIcon from '../../assets/icons/checkbox-unchecked.svg';
import googleIcon from '../../assets/icons/Vector.png';
import { login } from '../../store/modules/memberSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', rememberMe: false });
  const [errors, setErrors] = useState({ email: '', password: '' });

  /*
   * Remember Me
   */
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedUser');
    if (rememberedEmail) {
      setForm((prev) => ({ ...prev, email: JSON.parse(rememberedEmail), rememberMe: true }));
    }
  }, []);

  /*
   * 이메일 유효성 검사
   */
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /*
   *  입력값 변경
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });

    if (name === 'email') {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) ? '' : 'Invalid email format.' }));
    }
    if (name === 'password') {
      setErrors((prev) => ({ ...prev, password: value.length >= 6 ? '' : 'Password must be at least 6 characters.' }));
    }
  };

  /*
   * 로그인 제출
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email format.' }));
      return;
    }
    if (form.password.length < 6) {
      setErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters.' }));
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === form.email && storedUser.password === form.password) {
      dispatch(login(storedUser));
      alert('Login successful!');
      form.rememberMe
        ? localStorage.setItem('rememberedUser', JSON.stringify(form.email))
        : localStorage.removeItem('rememberedUser');
      navigate('/');
    } else {
      alert('Invalid email or password.');
    }
  };

  /*
   * Google 로그인
   */
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (response) => {
      console.log('Google Login Response:', response);
      if (!response || !response.code) {
        console.error('Invalid response from Google:', response);
        alert('Google login failed. Please try again.');
        return;
      }

      const tokenData = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          code: response.code,
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
          redirect_uri: 'postmessage',
          grant_type: 'authorization_code',
        }),
      }).then((res) => res.json());

      console.log('Google Token Data:', tokenData);

      if (!tokenData.id_token) {
        console.error('No id_token received:', tokenData);
        alert('Google login failed. Please try again.');
        return;
      }

      const userData = jwtDecode(tokenData.id_token);
      console.log('Decoded Google User:', userData);

      const googleUser = {
        email: userData.email,
        name: userData.name,
        picture: userData.picture,
        token: tokenData.id_token,
      };

      localStorage.setItem('user', JSON.stringify(googleUser));
      dispatch(login(googleUser));
      alert(`Welcome, ${userData.name}!`);
      navigate('/');
    },
    onError: () => {
      alert('Google login failed. Please try again.');
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 w-full max-w-[450px]">
        <h2 className="font-diptyque text-heading1 text-center mb-10">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/*이메일 입력*/}
          <div>
            <label className="text-sm font-semibold text-gray-900 block mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address ..."
              className="w-full p-3 border border-gray-900 rounded-none text-sm"
              required
            />
            {errors.email && <p className="text-sm mt-1 text-red-600">{errors.email}</p>}
          </div>

          {/*비밀번호 입력*/}
          <div>
            <label className="text-sm font-semibold text-gray-900 block mb-1">Current Password *</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password ..."
              className="w-full p-3 border border-gray-900 rounded-none text-sm"
              required
            />
            {errors.password && <p className="text-sm mt-1 text-red-600">{errors.password}</p>}
          </div>

          {/*Remember me & Forgotten password*/}
          <div className="flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-3" onClick={() => setForm({ ...form, rememberMe: !form.rememberMe })}>
              <img src={form.rememberMe ? checkedIcon : uncheckedIcon} alt="Remember Me" className="w-5 h-5" />
              <span className="text-sm">Remember me</span>
            </div>
            <span className="text-sm cursor-pointer text-gray-600 hover:text-black">Forgotten password?</span>
          </div>

          {/*로그인*/}
          <button
            type="submit"
            className="w-full h-[42px] flex justify-center items-center bg-black text-white text-body3 active:bg-grey-4 mt-2"
          >
            Sign in
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-[1px] bg-[#D8D8D8]"></div>
            <p className="text-center text-sm mx-4">Or</p>
            <div className="flex-grow h-[1px] bg-[#D8D8D8]"></div>
          </div>

          {/*Google 로그인*/}
          <button
            type="button"
            className="w-full h-[42px] flex items-center justify-center border border-black text-black text-body3 hover:bg-gray-100"
            onClick={() => googleLogin()}
          >
            <img src={googleIcon} alt="Google Logo" className="w-6 h-6 mr-4" />
            Continue with Google
          </button>

          {/*회원가입*/}
          <button
            type="button"
            className="w-full h-[42px] flex justify-center items-center border border-black text-black text-body3 hover:bg-gray-100"
            onClick={() => navigate('/register')}
          >
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
