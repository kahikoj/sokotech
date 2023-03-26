import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import ScrollspyNav from "./Scrollspy";
import logodark from "../Assets/images/logo-dark.png";

const NavbarPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLine = () => {
        setIsOpen(prevState => !prevState.isOpen);
    }

    const navItems = [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 3, idnm: "products", navheading: "Products" },
        { id: 3, idnm: "service", navheading: "Service" },
        { id: 4, idnm: "contact", navheading: "Contact" },
        { id: 6, idnm: "about", navheading: "About" },
    ];

    const targetId = navItems.map((item) => item.idnm);

    return (
        <>
            <header id="topnav" className="defaultscroll sticky">
                <Container>
                    <div>
                        <Link className="logo" to="/Homepage">
                            <img src={logodark} height="24" alt="" />
                        </Link>
                    </div>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link to="#" onClick={toggleLine} className={isOpen ? "navbar-toggle open" : "navbar-toggle"}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <ScrollspyNav
                        scrollTargetIds={targetId}
                        scrollDuration="800"
                        headerBackground="false"
                        activeNavClass="active"
                    >
                        <div id="navigation" style={{ display: isOpen ? "block" : "none" }}>
                            <ul className="navigation-menu">
                                {navItems.map((item, key) => (
                                    <li key={key} className={item.navheading === "Home" ? "has-submenu active" : "has-submenu"}>
                                        <a href={"#" + item.idnm}> {item.navheading}</a>
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
