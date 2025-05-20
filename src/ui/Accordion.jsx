import { useState, useRef } from 'react';
import Icon from './Icon';

const Accordion = ({ title, content, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`h-fit border-solid border-b-[1px] cursor-pointer w-full ${className}`}>
      {/* Header */}
      <div className="flex place-content-between items-center h-[48px]" onClick={() => setIsOpen(!isOpen)}>
        <div className="text-body3 text-darkgrey-2">{title}</div>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <Icon name="keyboard_arrow_down" />
        </div>
      </div>

      {/* Content 내용 */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="text-grey-4 text-body3 mt-2 pb-6">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;

/* 
    //컴포넌트 사용법
    <Accordion title="" content=""/>
*/
