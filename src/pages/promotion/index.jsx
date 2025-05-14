import React from 'react';
import EndDesSec from '../../components/promotion/EndDesSec';
import EndSec from '../../components/promotion/EndSec';
import ProductSec from '../../components/promotion/ProductSec';
import PromotionIntro from '../../components/promotion/PromotionIntro';
import SeasonIntroSec from '../../components/promotion/SeasonIntroSec';

const Promotion = () => {
  return (
    <div className="top-0 space-y-[200px] tablet:space-y-[150px]  mobile:space-y-[100px]">
      {/* 프로모션 인트로 section */}
      <PromotionIntro />

      <div className="desktop:mx-[50px] mobile:mx-[16px]  space-y-[150px]">
        <SeasonIntroSec />

        {/* 계절별 상품 section */}
        <div className="relative">
          {/* 장미 */}
          <img
            className="absolute -scale-x-100 top-0 left-0 z-0 w-[10%] mobile:w-[15%] mobile:top-[0.5%]"
            src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-s01-1.png"
            alt=""
          />
          <img
            className="absolute top-0 right-0 z-0 w-auto"
            src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-s01-1.png"
            alt=""
          />

          {/* 오렌지 */}
          <img
            className="absolute top-[26%] right-0 z-0 w-[24%] tablet:w-[30%]"
            src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-s03.png?raw=true"
            alt=""
          />
          <img
            className="absolute top-[26%] left-0 z-0 w-[219px] translate-x-[-40%] tablet:w-[20%] tablet:translate-y-[40%] "
            src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-s02.png?raw=true"
            alt=""
          />

          {/* 나무 */}
          <img
            className="absolute top-[52%] left-0 z-0 w-[10%] tablet:w-[20%] tablet:top-[54%] mobile:top-[51%]"
            src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-a01-01.png?raw=true"
            alt=""
          />
          <img
            className="absolute top-[54%] right-0 z-0 tablet:w-[20%] tablet:top-[55%]"
            src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-a01-02.png?raw=true"
            alt=""
          />
          {/* Musk */}
          <img
            className="absolute top-[80%] right-0 z-0  w-[28%] tablet:w-[20%] mobile:top-[77%] mobile:w-[30%]"
            src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/main/page/Promotion/m-d-w01.png?raw=true"
            alt=""
          />
          <div className="relative z-10 ">
            <ProductSec />
          </div>
        </div>
      </div>

      {/* End Section */}
      <div className="mx-[50px] tablet:mx-0 mobile:mx-0">
        <EndSec />
      </div>

      {/* 마무리 멘트 section */}
      <div>
        <EndDesSec />
      </div>
    </div>
  );
};

export default Promotion;
