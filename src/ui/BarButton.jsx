import React from 'react';

const BarButton = ({ text, type, className, disabled = false }) => {
  return (
    <button
      className={`flex justify-center items-center w-full h-[2.8125rem] text-body3 ${className} ${type === 'filled' && ' bg-black active:bg-grey-4 text-white'} ${type === 'border' && 'border border-black text-black active:border-grey-4 active:text-grey-4'}`}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
};

export default BarButton;

/*
BarButton 사용방법
 - 기본 width: 100%
// props
text: 버튼 내부 텍스트
type
- filled: 검은색 버튼, 호버 시 grey-4 
- border: 검은색 보더가 있는 하얀 버튼, 호버시 보더 색상 grey-4
className: 추가적으로 필요한 스타일링
*/
