import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { navActions } from '../../store/modules/navSlice';
import { Icon } from '../../ui';

const DesktopMenu = ({ isMain }) => {
  const { menuOpen } = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // 로그인 여부 실시간 감지
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('user'));
    };

    window.addEventListener('storage', checkLoginStatus);
    window.addEventListener('login', checkLoginStatus); // ✅ 로그인 이벤트 추가

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('login', checkLoginStatus);
    };
  }, []);

  const menuStyle =
    'flex justify-center items-center h-[44px] w-[44px] border border-darkgrey-3 cursor-pointer hover:bg-darkgrey-3 hover:text-white';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        dispatch(navActions.closeMenu());
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, dispatch]);

  // 로그아웃 후 마이페이지 접근 방지
  const handleMyPageClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate('/signin');
    }
  };

  return (
    <div
      ref={menuRef}
      className={`flex flex-col absolute top-[42px] right-10 z-50 ${isMain && 'hidden'} tablet:hidden`}
    >
      <div className={menuStyle} onClick={() => dispatch(navActions.toggleMenu())}>
        <Icon name={menuOpen ? 'close' : 'menu'} />
      </div>
      {menuOpen && (
        <div className="bg-white">
          <Link to="/searchresult">
            <div className={`nav-search ${menuStyle}`} onClick={() => dispatch(navActions.toggleMenu())}>
              <Icon name="search" />
            </div>
          </Link>

          {/* 로그인 상태에 따라 이동 경로 변경 */}
          <Link to={isLoggedIn ? '/mypage' : '/signin'} onClick={handleMyPageClick}>
            <div className={`mypage ${menuStyle}`} onClick={() => dispatch(navActions.toggleMenu())}>
              <Icon name="person" className="hover:text-white" />
            </div>
          </Link>

          <Link to="/cart">
            <div className={`cart ${menuStyle}`} onClick={() => dispatch(navActions.toggleMenu())}>
              <Icon name="shopping_bag" className="hover:text-white" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;
