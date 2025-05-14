import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navActions } from '../../store/modules/navSlice';
import { motion } from 'framer-motion';

const Nav = ({ isMain, isPrevMain }) => {
  const { menuData, activeMenu } = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  return (
    <nav
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`flex justify-center pb-5 relative tablet:hidden ${isMain && 'left-1/2 -translate-x-1/2'}`}
      onMouseLeave={() => dispatch(navActions.clearMenu())}
    >
      {/* 1뎁스 메뉴 */}
      <ul className={`flex flex-row ${isMain && 'px-8 pointer-events-auto !pb-0 pt-1 mb-10 bg-white'}`}>
        {menuData.slice(0, 5).map((menu) => (
          <li
            key={menu.id}
            className={`px-4 text-heading3 font-diptyque `}
            onMouseEnter={() => dispatch(navActions.setActiveMenu(menu.id))}
          >
            <Link to={menu.url} className={activeMenu === menu.id ? 'border-b border-darkgrey-3' : ''}>
              {menu.menuName}
            </Link>
          </li>
        ))}
      </ul>
      {/* 2뎁스 메뉴 */}
      <div
        className={`nav-two-depth flex flex-row gap-[60px] justify-center absolute z-50 top-[44px] w-full h-0 transition-all ${menuData.find((menu) => menu.id === activeMenu)?.twodepth && '!h-auto pt-[30px] pb-5 transition-all bg-white'} ${isMain && 'hidden'} `}
      >
        {menuData
          .find((menu) => menu.id === activeMenu)
          ?.twodepth?.map((depth) => (
            <div key={depth.depthName} className="">
              <h3 className="text-heading3 font-diptyque mb-[10px]">{depth.depthName}</h3>
              <ul>
                {depth.depthList?.map((item) => (
                  <li key={item.depthItem} className=" mb-[10px] text-body3">
                    <Link to={`/product${item.url}`}>{item.depthItem}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </nav>
  );
};

export default Nav;
