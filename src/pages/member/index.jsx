import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../../components/member/Register';
import SignIn from '../../components/member/SignIn';

const MemberRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
};

export default MemberRoutes;
