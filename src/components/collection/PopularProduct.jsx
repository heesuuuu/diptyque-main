import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../store/modules/productSlice';
import PopularItem from './PopularItem';
import BarButton from '../../ui/BarButton';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

const PopularProduct = () => {
  const { allProducts } = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  const topProducts = useMemo(() => {
    if (!allProducts || allProducts.length === 0) {
      return [];
    }

    return [...allProducts]
      .filter(
        (product) =>
          product.sales !== undefined &&
          product.options &&
          product.options.length > 0 &&
          product.options[0].images?.thumbnail?.default
      )
      .sort((a, b) => (b.sales || 0) - (a.sales || 0))
      .slice(0, 8);
  }, [allProducts]);

  const addToBag = () => {
    dispatch(productActions.setIsAdded());
    setTimeout(() => {
      dispatch(productActions.resetIsAdded());
    }, 3000);
  };

  return (
    <div className="w-full mb-[12.5rem] overflow-visible">
      <h2 className="detail-sec-title text-heading1 font-diptyque mb-10">Our most popular products</h2>

      <div className="overflow-visible w-full">
        <Swiper
          slidesPerView={4.2}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper overflow-visible"
          style={{ overflow: 'visible' }}
        >
          {topProducts.map((product) => (
            <SwiperSlide key={product.id} className="w-[27.3125rem] h-auto overflow-visible">
              <PopularItem product={product} />
              <div onClick={addToBag} className="mt-5">
                <BarButton type="filled" text="ADD TO BAG" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularProduct;
