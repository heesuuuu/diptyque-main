import { useLocation, useNavigate } from 'react-router-dom';

const StepNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const steps = [
    { label: '1. Shipping Address', path: '/payment/shipping-address' },
    { label: '2. Delivery', path: '/payment/shipping-method' },
    { label: '3. Payment', path: '/payment/payment-method' },
  ];

  return (
    <div className="flex justify-center items-center gap-8 border-b border-gray-300">
      {steps.map((step) => (
        <button
          key={step.path}
          onClick={() => navigate(step.path)}
          className={`text-sm md:text-base lg:text-lg pb-2 ${
            location.pathname === step.path ? 'border-b-2 border-black' : 'text-gray-600'
          }`}
        >
          {step.label}
        </button>
      ))}
    </div>
  );
};

export default StepNavigation;
