import React, { Suspense } from 'react';

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Icons
import FeatherIcon from 'feather-icons-react';

// Layout Components
// const Topbar = React.lazy(() => import('./TopBar'));
const NavbarPage = React.lazy(() => import('./NavBar'));
const Footer = React.lazy(() => import('./Footer'));
const FooterWithoutMenuLightSocialOnly = React.lazy(() => import('./FooterWithoutMenuLight'));

const CustomDot = () => {
  return (
    <i><FeatherIcon icon="arrow-up" className="icons" /></i>
  );
};


function Loader() {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
}

function Layout({ children }) {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavbarPage />
        
        {/* <Topbar/> */}
        {children}
        <Footer isLight={true}/>
        <ScrollUpButton ContainerClassName="classForContainer" style={{ height: 36, width: 36 }} TransitionClassName="classForTransition">
          <CustomDot />
        </ScrollUpButton>
      </Suspense>
    </>
  );
}

export default Layout;
