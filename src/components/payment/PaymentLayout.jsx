import React from 'react';
import { Outlet } from 'react-router-dom';
import OrderSummary from './OrderSummary';
import StepNavigation from './StepNavigation';

const PaymentLayout = () => {
  return (
    <div className="max-w-[1320px] w-full mx-auto pt-[190px] pb-[100px] px-[20px] flex flex-col">
      <StepNavigation />

      <div className="flex flex-col lg:flex-row gap-[50px]">
        <div className="flex-1 max-w-[800px]">
          <Outlet />
        </div>
        <div className="w-[532px] flex-shrink-0 mt-[96px]">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default PaymentLayout;
