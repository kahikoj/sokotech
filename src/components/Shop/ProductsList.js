import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Input, Pagination, PaginationItem, PaginationLink, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from 'feather-icons-react';


//Import Images
import product1 from "../../Assets/images/shop/product/s1.jpg";
import product2 from "../../Assets/images/shop/product/s2.jpg";
import product3 from "../../Assets/images/shop/product/s3.jpg";
import product4 from "../../Assets/images/shop/product/s4.jpg";
import product5 from "../../Assets/images/shop/product/s5.jpg";
import product6 from "../../Assets/images/shop/product/s6.jpg";
import product7 from "../../Assets/images/shop/product/s7.jpg";
import product8 from "../../Assets/images/shop/product/s8.jpg";
import product9 from "../../Assets/images/shop/product/s9.jpg";
import product10 from "../../Assets/images/shop/product/s10.jpg";
import product11 from "../../Assets/images/shop/product/s11.jpg";
import product12 from "../../Assets/images/shop/product/s12.jpg";
import product13 from "../../Assets/images/shop/product/s13.jpg";
import product14 from "../../Assets/images/shop/product/s14.jpg";
import product15 from "../../Assets/images/shop/product/s15.jpg";

import prodtctOverlay1 from "../../Assets/images/shop/product/s-1.jpg";
import prodtctOverlay2 from "../../Assets/images/shop/product/s-2.jpg";
import prodtctOverlay3 from "../../Assets/images/shop/product/s-3.jpg";
import prodtctOverlay4 from "../../Assets/images/shop/product/s-4.jpg";
import prodtctOverlay5 from "../../Assets/images/shop/product/s-5.jpg";
import prodtctOverlay6 from "../../Assets/images/shop/product/s-6.jpg";
import prodtctOverlay7 from "../../Assets/images/shop/product/s-7.jpg";
import prodtctOverlay8 from "../../Assets/images/shop/product/s-8.jpg";
import prodtctOverlay9 from "../../Assets/images/shop/product/s-9.jpg";
import prodtctOverlay10 from "../../Assets/images/shop/product/s-10.jpg";
import prodtctOverlay11 from "../../Assets/images/shop/product/s-11.jpg";
import prodtctOverlay12 from "../../Assets/images/shop/product/s-12.jpg";
import prodtctOverlay13 from "../../Assets/images/shop/product/s-13.jpg";
import prodtctOverlay14 from "../../Assets/images/shop/product/s-14.jpg";
import prodtctOverlay15 from "../../Assets/images/shop/product/s-15.jpg";

const ProductList = () => {
    const products = [
      { id: 1, image: product1, imgOverlay: prodtctOverlay1, name: "Branded T-Shirt", price: "16.00", oldPrice: "21.00" },
      { id: 2, image: product2, imgOverlay: prodtctOverlay2, name: "Shopping Bag", price: "21.00", oldPrice: "25.00" },
      { id: 3, image: product3, imgOverlay: prodtctOverlay3, name: "Elegent Watch", price: "5.00", desc: "30% off" },
      { id: 4, image: product4, imgOverlay: prodtctOverlay4, name: "Casual Shoes", price: "18.00", oldPrice: "22.00" },
      { id: 5, image: product5, imgOverlay: prodtctOverlay5, name: "Earphones", price: "3.00" },
      { id: 6, image: product6, imgOverlay: prodtctOverlay6, name: "Elegent Mug", price: "4.50", oldPrice: "6.50" },
      { id: 7, image: product7, imgOverlay: prodtctOverlay7, name: "Sony Headphones", price: "9.99", desc: "20% off" },
      { id: 8, image: product8, imgOverlay: prodtctOverlay8, name: "Wooden Stools", price: "22.00", oldPrice: "25.00" },
      { id: 9, image: product9, imgOverlay: prodtctOverlay9, name: "Coffee Cup / Mug", price: "16.00", oldPrice: "21.00" },
      { id: 10, image: product10, imgOverlay: prodtctOverlay10, name: "Sunglasses", price: "5.00", oldPrice: "25.00" },
      { id: 11, image: product11, imgOverlay: prodtctOverlay11, name: "Loafer Shoes", price: "22.00", desc: "30% off" },
      { id: 12, image: product12, imgOverlay: prodtctOverlay12, name: "T-Shirts", price: "22.00", oldPrice: "25.00" },
      { id: 13, image: product13, imgOverlay: prodtctOverlay13, name: "Wooden Chair", price: "16.00", oldPrice: "21.00" },
      { id: 14, image: product14, imgOverlay: prodtctOverlay14, name: "Women Block Heels", price: "21.00", oldPrice: "25.00" },
      { id: 15, image: product15, imgOverlay: prodtctOverlay15, name: "T-Shirts", price: "22.00", desc: "30% off" },
    ];
  
    const topProducts = [
      { image : product1, name : "T-Shirt", oldPrice : "$22.00", NewPrice : "$18.00 " },
      { image : product3, name : "Watch", oldPrice : "$22.00", NewPrice : "$18.00 " },
      { image : product6, name : "Coffee Cup", oldPrice : "$22.00", NewPrice : "$18.00 " },
      { image : product8, name : "Wooden Stools", oldPrice : "$22.00", NewPrice : "$18.00 " },
    ];

    useEffect(() => {
      const scrollNavigation = () => {
        const doc = document.documentElement;
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
          document.getElementById('topnav').classList.add('nav-sticky');
        } else {
          document.getElementById('topnav').classList.remove('nav-sticky');
        }
      };
    
      window.addEventListener('scroll', scrollNavigation);
    
      return () => {
        window.removeEventListener('scroll', scrollNavigation);
      };
    }, []);
  

    return (
      <>
  
        <section className="section">
          <Container>
            <Row>
              <Col lg={3} md={4} xs={12}>
                <Card className="border-0 sidebar sticky-bar">
                  <CardBody className="p-0">
                    <div className="widget">
                      <div id="search2" className="widget-search mb-0">
                        <Form role="search" method="get" id="searchform" className="searchform">
                          <div>
                            <Input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..." />
                            <Input type="submit" id="searchsubmit" value="Search" />
                          </div>
                        </Form>
                      </div>
                    </div>
  
                    <div className="widget mt-4 pt-2">
                      <h4 className="widget-title">Categories</h4>
                      <ul className="list-unstyled mt-4 mb-0 blog-catagories">
                        <li><Link to="#">Men</Link></li>
                        <li><Link to="#">Women</Link></li>
                        <li><Link to="#">Electronics</Link></li>
                        <li><Link to="#">Jewellery</Link></li>
                        <li><Link to="#">Shoes</Link></li>
                        <li><Link to="#">Kid’s Wear</Link></li>
                        <li><Link to="#">Sports</Link></li>
                        <li><Link to="#">Toys</Link></li>
                        <li><Link to="#">Gift Corners</Link></li>
                      </ul>
                    </div>
                    <div className="widget mt-4 pt-2">
                                    <h4 className="widget-title">Color</h4>
                                    <ul className="list-unstyled mt-4 mb-0">
                                      <li className="list-inline-item"><a href="#" className="px-3 py-1 rounded-pill bg-primary"></a></li>
                                      <li className="list-inline-item"><a href="#" className="px-3 py-1 rounded-pill bg-danger ml-1"></a></li>
                                      <li className="list-inline-item"><a href="#" className="px-3 py-1 rounded-pill bg-success ml-1"></a></li>
                                      <li className="list-inline-item"><a href="#" className="px-3 py-1 rounded-pill bg-info ml-1"></a></li>
                                      <li className="list-inline-item"><a href="#" className="px-3 py-1 rounded-pill bg-secondary ml-1"></a></li>
                                      <li className="list-inline-item"><a href="#" className="px-3 py-1 rounded-pill bg-warning ml-1"></a></li>
                                    </ul>
                                </div>

                                <div className="widget mt-4 pt-2">
                                    <h4 className="widget-title">Top Products</h4>
                                    <ul className="list-unstyled mt-4 mb-0">
                                        {
                                          <ul className="list-unstyled mb-0">
                                            { topProducts.map((product, key) => (
                                              <li key={key} className={key+1 === 1 ? "media align-items-center" : "media align-items-center mt-2"}>
                                                <Link to="#">
                                                  <img src={product.image} className="img-fluid avatar avatar-small rounded shadow" style={{height: "auto"}} alt="Landrick" />
                                                </Link>
                                                <div className="content ml-3">
                                                  <Link to="#" className="text-dark h6">{product.name}</Link>
                                                  <h6 className="text-muted small font-italic mb-0 mt-1">{product.NewPrice} <del className="text-danger ml-2">{product.oldPrice}</del> </h6>
                                                </div>
                                              </li>
                                            ))}
                                          </ul>
                                        }
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={9} md={8} xs={12} className="mt-5 pt-2 mt-sm-0 pt-sm-0">
                        <Row className="align-items-center">
                            <Col lg={9} md={7}>
                                <div className="section-title">
                                    <h5 className="mb-0">Showing 1–15 of 47 results</h5>
                                </div>
                            </Col>

                            <Col lg={3} md={5} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="form custom-form">
                              <div className=" mb-0">
                                <select className="form-control custom-select" id="Sortbylist-job">
                                  <option>Sort by latest</option>
                                  <option>Sort by popularity</option>
                                  <option>Sort by rating</option>
                                  <option>Sort by price: low to high</option>
                                  <option>Sort by price: high to low</option>
                                </select>
                              </div>
                            </div>
                            </Col>
                        </Row>

                        <Row>
                          {
                            products.map((product) => (
                              <Col key={product.id} lg={4} md={6} xs={12} className="mt-4 pt-2">
                                <Card className="shop-list border-0 position-relative overflow-hidden">
                                  <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to={`/shop/${product.id}`}>
                                      <img src={product.image} className="img-fluid" alt="Landrick" />
                                    </Link>
                                    <Link to={`/shop/${product.id}`} className="overlay-work">
                                      <img src={product.imgOverlay} className="img-fluid" alt="Landrick" />
                                    </Link>
                                    <ul className="list-unstyled shop-icons">
                                      <li>
                                        <Link to="#" className="btn btn-icon btn-pills btn-soft-danger">
                                          <i><FeatherIcon icon="heart" className="icons" /></i>
                                        </Link>
                                      </li>
                                      <li className="mt-2">
                                        <Link to={`/shop/${product.id}`} className="btn btn-icon btn-pills btn-soft-primary">
                                          <i><FeatherIcon icon="eye" className="icons" /> </i>
                                        </Link>
                                      </li>
                                      <li className="mt-2">
                                        <Link to="/shop-cart" className="btn btn-icon btn-pills btn-soft-warning">
                                          <i><FeatherIcon icon="shopping-cart" className="icons" /></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="pt-4 p-2">
                                    <Link to={`/shop/${product.id}`} className="text-dark product-name h6">
                                      {product.name}
                                    </Link>
                                    <div className="d-flex justify-content-between mt-1">
                                      <h6 className="text-muted small font-italic mb-0 mt-1">
                                        ${product.price}{" "}
                                        {product.oldPrice ? <del className="text-danger ml-2">${product.oldPrice}</del> : null}
                                        {product.desc ? <span className="text-success ml-1">{product.desc}</span> : null}
                                      </h6>
                                      <ul className="list-unstyled text-warning mb-0">
                                        <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star-outline"></i></li>
                                      </ul>
                                  </div>
                                  </div>

                                </Card>
                              </Col>
                              ))
                            }

                            <Col xs={12} className="mt-4 pt-2">
                                <Pagination listClassName="justify-content-center mb-0">
                                    <PaginationItem><PaginationLink to="#" previous><i className="mdi mdi-arrow-left mr-1"></i>Prev</PaginationLink></PaginationItem>
                                    <PaginationItem active><PaginationLink to="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#" next>Next<i className="mdi mdi-arrow-right ml-1"></i></PaginationLink></PaginationItem>
                                </Pagination>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
   );
}

export default ProductList; 
  