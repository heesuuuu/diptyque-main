import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EndSec = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const lines = ['Fragrance designed', 'for', 'every season'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + custom * 0.05,
        duration: 0.1,
      },
    }),
  };

  const renderLines = () => {
    let charIndex = 0;

    return (
      <>
        {lines.map((line, lineIndex) => (
          <div key={`line-${lineIndex}`} className="text-center">
            {line.split('').map((char, index) => (
              <motion.span
                key={`char-${lineIndex}-${index}`}
                variants={characterVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={charIndex++}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            {lineIndex < lines.length - 1 && <br />}
          </div>
        ))}
      </>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="w-full h-[975px] tablet:h-[448px] mobile:h-[421px] bg-primary relative overflow-hidden"
    >
      {/* 장미 */}
      <img
        className="absolute bottom-0 translate-y-[10%] tablet:w-[30%]"
        src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-s01.png?raw=true"
        alt=""
      />
      {/* 오렌지 */}
      <img
        className="absolute bottom-0 right-0 translate-y-[10%] translate-x-[5%] w-[28%] mobile:w-[35%]"
        src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-s03.png?raw=true"
        alt=""
      />
      {/* 나무 */}
      <img
        className="absolute bottom-0 right-[28%] tablet:w-[15%] mobile:w-[30%] mobile:right-[35%]"
        src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-a01.png?raw=true"
        alt=""
      />

      <motion.div
        className="flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <img
          src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/refs/heads/main/page/Promotion/m-logo01.webp"
          alt=""
          className="w-[240px] mt-[129px] tablet:w-[135px] tablet:mt-[40px] mobile:w-[98px]"
        />
        <h3 className="text-white text-center text-display2 font-diptyque mt-[58px] tablet:mt-[28px] leading-[80px] tablet:leading-[40px] max-w-[996px] mx-auto tablet:text-heading1 mobile:text-heading1">
          {renderLines()}
        </h3>
      </motion.div>
    </div>
  );
};

export default EndSec;
