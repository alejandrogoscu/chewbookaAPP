import useWindowWidth from '../../../hooks/useWindowWidth';
import NavbarDesktop from '../Navbar/NavbarDesktop/NavbarDesktop';
import NavbarMobile from '../Navbar/NavbarMobile/NavbarMobile';
import './appLayout.css';
import Background from './Background';

const AppLayout = ({ children }) => {
  const width = useWindowWidth();
  const isDesktop = width >= 825;

  return (
    <>
      <Background>
        <div className="layout__wrapper">
          <div className="layout">
            {isDesktop && (
              <aside className="sidebar">
                <NavbarDesktop />
              </aside>
            )}

            <main className="main__content">{children}</main>

            {isDesktop && <aside className="extra">{}</aside>}
          </div>
        </div>
      </Background>

      {!isDesktop && <NavbarMobile />}
    </>
  );
};

export default AppLayout;
