import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLinks, setNavLinks] = useState([
    {
      id: 1,
      title: 'Home',
      link: '/index'
    },
    {
      id: 2,
      title: 'Shop',
      link: '/#',
      isOpenNestedSubMenu: false,
      isNew: true,
      nestedChild: [
        {
          id: 2.0,
          title: 'All Products',
          link: '/shop-products',
          isNewPage: true
        },
        {
          id: 2.1,
          title: 'Product Details',
          link: '/shop-product-detail',
          isNewPage: true
        }
      ]
    },
    {
      id: 3,
      title: 'Contact',
      link: '/#',
      isOpenSubMenu: false
    },
    {
      id: 4,
      title: 'About Us',
      link: '/page-aboutus'
    }
  ]);
  const { location } = useLocation();

  const toggleLine = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const ul = document.getElementById('top-menu');
    const items = ul.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) {
      if (location.pathname === items[i].pathname) {
        activateParentDropdown(items[i]);
        break;
      }
    }
  }, [location.pathname]);

  const activateParentDropdown = (item) => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add('active');
      const parent1 = parent.parentElement;
      parent1.classList.add('active');
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add('active');
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add('active');
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add('active');
          }
        }
      }
    }
  };

  const openSubMenuId = (level2_id) => {
    const tmpLinks = [...navLinks];
    tmpLinks.forEach((tmpLink) => {
      if (tmpLink.id === level2_id) {
        tmpLink.isOpenSubMenu = !tmpLink.isOpenSubMenu;
      }
    });
    setNavLinks(tmpLinks);
    return tmpLinks;
  };

  const setOpenNestedSubMenuId = (level2_id, level3_id) => {
    const tmpLinks = [...navLinks];
    tmpLinks.forEach((tmpLink) => {
      if (tmpLink.id === level2_id) {
        tmpLink.nestedChild.forEach((tmpchild) => {
          if (tmpchild.id === level3_id) {
            tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu;
          } else {
            tmpchild.isOpenNestedSubMenu = false;
          }
        });
      }
    });
    setNavLinks(tmpLinks);
    return tmpLinks;
  };

   return (
    <>
      <header id="topnav" className="defaultscroll sticky">
        <Container>
          <Link className="logo" to="/">
            MyLogo
          </Link>
          <div className="menu-extras">
            <div className="menu-item">
              <Link to="#"  onClick={toggleLine} className="navbar-toggle">
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <div id="navigation">
            <ul className="navigation-menu">
              {navLinks.map((navLink) => (
                <li key={navLink.id} className={navLink.child ? 'has-submenu' : null}>
                  {navLink.child ? (
                    <Link to="#" onClick={() => openSubMenuId(navLink.id)}>
                      {navLink.title} <div className="submenu-arrow"></div>
                    </Link>
                  ) : (
                    <Link to={navLink.link}>{navLink.title}</Link>
                  )}
                  {navLink.child && (
                    <ul className={`submenu ${openSubMenuId === navLink.id ? 'open' : ''}`}>
                      {navLink.child.map((childArray) =>
                        childArray.nestedChild ? (
                          <li key={childArray.id} className="has-submenu">
                            <Link to="#" onClick={() => setOpenNestedSubMenuId(navLink.id, childArray.id)}>
                              {childArray.title}{' '}
                              {childArray.isNew ? <span className="badge badge-danger rounded">V 2.2</span> : null}
                              <div className="submenu-arrow"></div>
                            </Link>
                            <ul className={`submenu ${setOpenNestedSubMenuId === `${navLink.id}-${childArray.id}` ? 'open' : ''}`}>
                              {childArray.nestedChild.map((nestedChildArray) => (
                                <li key={nestedChildArray.id}>
                                  <Link to={nestedChildArray.link}>
                                    {nestedChildArray.title}{' '}
                                    {nestedChildArray.isNewPage ? (
                                      <span className="badge badge-primary rounded">NEW</span>
                                    ) : null}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={childArray.id}>
                            <Link to={childArray.link}>{childArray.title}</Link>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
};
export default Topbar;