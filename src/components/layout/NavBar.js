import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import ScrollspyNav from "../Shared/Scrollspy";
import logodark from "../../Assets/images/logo-dark.png";

// Import Css
import '../../apps.scss';
import "../../App.css";

const NavbarPage = () => {
    const navItems = useMemo(() => [
        { id: 1, idnm: "home", navheading: "Home", link: '/homepage' },
        { id: 2, idnm: "products", navheading: "Products", link: "/product" },
        { id: 3, idnm: "service", navheading: "Service", link: "/services" },
        { id: 4, idnm: "contact", navheading: "Contact", link: "/contact" },
        { id: 5, idnm: "about", navheading: "About", link: "/about" },
    ], []);

    const targetId = navItems.map((item) => item.idnm);

    const location = useLocation();
    const [activeNavItem, setActiveNavItem] = useState(navItems.find(item => location.pathname.startsWith(`/${item.idnm}`)) || navItems[0]);

    useEffect(() => {
      setActiveNavItem(navItems.find(item => location.pathname.startsWith(`/${item.idnm}`)) || navItems[0]);
    }, [location.pathname, navItems]);
    
    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        window.location.href = item.link;
      };
    

    return (
        <>
            <header id="topnav" className="defaultscroll sticky">
                <Container>
                    <div>
                        <Link className="logo" to="/Homepage">
                            <img src={logodark} height="24" alt="" />
                        </Link>
                    </div>
                    <ScrollspyNav
                        scrollTargetIds={targetId}
                        scrollDuration="800"
                        headerBackground="false"
                        activeNavClass="active"
                    >
                        <div id="navigation" >
                            <ul className="navigation-menu">
                                {navItems.map((item) => (
                                    <li key={item.id} className={activeNavItem.idnm === item.idnm ? "has-submenu active" : "has-submenu"}>
                                        <Link
                                            to={item.link}
                                            title={item.navheading}
                                            onClick={() => handleNavItemClick(item)}
                                            
                                        >
                                            {item.navheading}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollspyNav>
                </Container>
            </header>
        </>
    );
};

export default NavbarPage;
