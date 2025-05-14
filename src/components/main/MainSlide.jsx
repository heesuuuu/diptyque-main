import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './styles.scss';
import { useSelector } from 'react-redux';

const MainSlide = () => {
  const containerRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);
  const { menuData } = useSelector((state) => state.nav);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 가로 크기 계산 (16:9 비율 유지)
  const imageWidth = viewportHeight * (16 / 9);
  const totalWidth = 5 * imageWidth - window.innerWidth;

  // 세로 스크롤 값을 가로 스크롤 값으로 변환
  const x = useTransform(scrollYProgress, [0, 1], ['0px', `-${totalWidth}px`]);

  return (
    <>
      <div
        ref={containerRef}
        className="main-scroll overflow-hidden tablet:hidden"
        style={{ height: `${totalWidth}px` }}
      >
        <motion.div style={{ x }} className="flex fixed left-0 top-0">
          {menuData.map((item) => (
            <div
              key={item.id}
              className={`flex-shrink-0`}
              onMouseEnter={() => setHoveredItem(item.menuName)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link to={item.url}>
                <img src={item.imgUrl} alt={item.name} className="h-screen object-cover" />
              </Link>
            </div>
          ))}
        </motion.div>

        {/* 커서 따라다니는 div */}
        {hoveredItem && (
          <motion.div
            className="fixed pointer-events-none bg-darkgrey-3 text-white px-5 py-2"
            style={{
              left: cursorPos.x - 50,
              top: cursorPos.y - 35,
            }}
            initial={{
              scale: 0.2,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            {hoveredItem.toUpperCase()}
          </motion.div>
        )}
      </div>
      <div className="main-scroll-tablet-mobile desktop:hidden tablet:visible">
        <Swiper slidesPerView={1} navigation={true} modules={[Navigation]} className="Swiper w-screen h-screen">
          {menuData.slice(0, 5).map((item) => (
            <SwiperSlide key={item.id} className="w-full h-full">
              <Link to={item.url}>
                <img src={item.tabletUrl} alt={item.menuName} className="mobile:hidden w-full h-full object-cover" />
                <img
                  src={item.mobileUrl}
                  alt={item.menuName}
                  className="tablet:hidden mobile:block w-full h-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MainSlide;
