import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import useWindowWidth from '../../../hooks/useWindowWidth';
import './navbar.css';

const Navbar = ({ children }) => {
  const width = useWindowWidth();
  const breakpoint = 640;

  return (
    <>
      {width >= breakpoint ? <NavbarDesktop /> : <NavbarMobile />}
      {children}
    </>
  );
};

export default Navbar;
