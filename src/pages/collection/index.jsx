import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CollectionMenu from '../../components/collection/CollectionMenu';
import CollectionProducts from '../../components/collection/collectionProducts';
import PopularProduct from '../../components/collection/PopularProduct';
import CollectionIntro from '../../components/collection/CollectionIntro';

const Collection = () => {
  const [isMouseOverMenu, setIsMouseOverMenu] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const menuContainerRef = useRef(null);
  const { selectedCollection } = useSelector((state) => state.collection);

  const handleCollectionChange = () => {
    setIsFading(true);

    setTimeout(() => {
      setIsFading(false);
    }, 500);
  };

  useEffect(() => {
    // 선택된 컬렉션이 변경될 때마다 handleCollectionChange 호출
    handleCollectionChange();
  }, [selectedCollection]);

  return (
    <div className="top-0 space-y-[150px]   mobile:space-y-[100px] mb-[200px] w-full ">
      {/* 상단 배너 및 소개 */}
      <CollectionIntro />

      {/* Collection 상품 영역 */}
      <div className="w-full px-[80px] space-y-[200px]  mobile:p-4  mobile: ">
        <section className="mobile:w-full lg:mx-auto relative tablet:space-y-[150px] ">
          <div className="flex  tablet:flex-row mobile:flex-col">
            {/* Left menu */}
            <div
              className="w-1/4 tablet:w-[200px] mb-8 md:mb-0 sticky top-[10vh] h-fit mobile:w-full mobile:static"
              ref={menuContainerRef}
              onMouseEnter={() => setIsMouseOverMenu(true)}
              onMouseLeave={() => setIsMouseOverMenu(false)}
            >
              <CollectionMenu />
            </div>

            {/* 상품 상세 */}
            <div className="w-full tablet:ml-[25px] mobile:ml-0 ">
              <CollectionProducts isMouseOverMenu={isMouseOverMenu} isFading={isFading} />
            </div>
          </div>
        </section>
        {/* Most popular section */}
        {/* <section className="mt-[80px] lg:w-full lg:mx-auto overflow-visible">
          <PopularProduct />
        </section> */}
      </div>
    </div>
  );
};

export default Collection;
