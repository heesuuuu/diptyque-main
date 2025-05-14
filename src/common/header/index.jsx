import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import Nav from './nav';
import { Icon } from '../../ui';
import NavMobile from './NavMobile';
import { motion } from 'framer-motion';
import MainSlide from '../../components/main/MainSlide';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [isPrevMain, setIsPrevMain] = useState(false);

  useEffect(() => {
    if (prevPathRef.current === '/' && location.pathname !== '/') {
      setIsPrevMain(true);
    } else {
      setIsPrevMain(false);
    }
    prevPathRef.current = location.pathname; // 항상 업데이트
  }, [location.pathname]);

  const isMain = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isMain && currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection('down'); // 스크롤 내릴 때 숨김
      } else {
        setScrollDirection('up'); // 스크롤 올릴 때 나타남
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 w-full z-20 bg-white transition-transform duration-500 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        } ${isMain && '!bg-transparent pointer-events-none'}`}
      >
        <motion.div
          key={isPrevMain}
          initial={isPrevMain && { height: '100vh' }}
          animate={isPrevMain && { height: 'auto' }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
          className={`header relative flex flex-col justify-between bg-white  ${isMain && '!bg-transparent desktop:h-screen tablet:!bg-white'}`}
        >
          <h1 className="flex justify-center pointer-events-auto ">
            <span className="sr-only">DIPTYQUE</span>
            <Link to="/">
              <img
                src="https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/9ab0719bafcda454bd1c18f5310108f3bcc2d6fa/images/common/logo.svg"
                alt="DIPTYQUE"
                className="h-[44px] my-5 tablet:my-4"
              />
            </Link>
          </h1>
          <Nav isMain={isMain} isPrevMain={isPrevMain} />
          <DesktopMenu isMain={isMain} />
          <div className="pointer-events-none nav-tablet absolute inset-0 desktop:hidden">
            <div onClick={() => setIsOpen(true)} className="pointer-events-auto cursor-pointer">
              <Icon name="menu" className=" absolute top-1/2 -translate-y-1/2 left-6 mobile:left-4" />
            </div>
            <Link to="cart" className="pointer-events-auto cursor-pointer">
              <Icon name="shopping_bag" className=" absolute top-1/2 -translate-y-1/2 right-6 mobile:right-4" />
            </Link>
          </div>
        </motion.div>
      </div>
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
