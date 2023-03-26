import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import ScrollspyNav from "./ScrollspyNav";
import logodark from "../Assets/images/logo-dark.png";

const NavbarPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLine = () => {
        setIsOpen(prevState => !prevState.isOpen);
    }

    const navItems = [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 3, idnm: "service", navheading: "Feature" },
        { id: 3, idnm: "testimonial", navheading: "Review" },
        { id: 4, idnm: "pricing", navheading: "Price" },
        { id: 6, idnm: "contact", navheading: "Contact" },
    ];

    const targetId = navItems.map((item) => item.idnm);

    return (
        <>
            <header id="topnav" className="defaultscroll sticky">
                <Container>
                    <div>
                        <Link className="logo" to="#">
                            <img src={logodark} height="24" alt="" />
                        </Link>
                    </div>
                    <div className="sokomart">
                        <Link to="https://sky.garden/shop/sokomart%0A%20%20%20%20%20%20?utm_source=merchant_app&utm_campaign=web_shop_link_share&utm_content=Sokomart" target="_blank" className="btn btn-primary">Sokomart</Link>
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
