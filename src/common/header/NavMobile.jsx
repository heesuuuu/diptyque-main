import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from '../../ui';
import { navActions } from '../../store/modules/navSlice';

const NavMobile = ({ isOpen, setIsOpen }) => {
  const { menuData, activeMenu } = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const toggleTwoDepth = (x) => {
    dispatch(navActions.setActiveMenu(x));
    if (activeMenu === x) {
      dispatch(navActions.clearMenu());
    }
  };

  const closeAndResetActive = () => {
    setIsOpen(false);
    dispatch(navActions.clearMenu());
  };

  const depth1Style = 'text-heading1-m font-diptyque';
  return (
    <motion.div
      initial={{ x: '-100%', transformOrigin: 'left' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="nav-window-mobile fixed inset-0 z-20 px-6 mobile:px-4 py-[282px] mobile:py-[193px] bg-white desktop:hidden overflow-y-auto scrollbar-hide"
    >
      <div onClick={closeAndResetActive} className="cursor-pointer">
        <Icon name="close" className="absolute top-0 right-0 m-6 mobile:m-4" />
      </div>
      <nav className={``}>
        {/* 1뎁스 메뉴 */}
        <ul className="flex flex-col gap-6">
          {menuData.map((menu) => (
            <li key={menu.id} className={depth1Style}>
              <div className={`relative flex flex-row items-center gap-6 w-fit transition-all ease-in-out`}>
                <Link to={menu.url} onClick={closeAndResetActive}>
                  {menu.menuName}
                </Link>
                {/* twodepth가 있는 경우 아이콘 추가 */}
                {menu.twodepth && (
                  <div onClick={() => toggleTwoDepth(menu.id)}>
                    <Icon
                      name={activeMenu === menu.id ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                      className="cursor-pointer"
                    />
                  </div>
                )}
                {/* 밑줄 애니메이션 */}
                <span
                  className={`absolute left-0 bottom-0 h-[1px] bg-darkgrey-3 transition-all duration-300 ease-in-out ${
                    activeMenu === menu.id ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
              {/* activeMenu인 경우에만 twodepth 렌더링 */}
              <motion.div
                initial={{ height: 0, transformOrigin: 'top' }}
                animate={{ height: activeMenu === menu.id ? 'auto' : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                {activeMenu === menu.id &&
                  menu.twodepth?.map((depth) => (
                    <div key={depth.depthName} className="">
                      <h3 className="text-heading2-m font-diptyque mb-10 mt-10">{depth.depthName}</h3>
                      <ul>
                        {depth.depthList?.map((item) => (
                          <li key={item.depthItem} className="mb-5 text-body2-m" onClick={closeAndResetActive}>
                            <Link to={`/product${item.url}`}>{item.depthItem}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default NavMobile;
