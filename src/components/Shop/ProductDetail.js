import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Input, Card, CardBody } from 'reactstrap';
import {scrollNavigation} from 'react-scrollspy-nav'
import { Link } from "react-router-dom";

//Import Slick Slider
import Slider from "react-slick";

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import Images
import product1 from "../../Assets/images/shop/product/s1.jpg";
import product2 from "../../Assets/images/shop/product/s2.jpg";
import product3 from "../../Assets/images/shop/product/s3.jpg";
import product4 from "../../Assets/images/shop/product/s4.jpg";
import product5 from "../../Assets/images/shop/product/s5.jpg";
import product6 from "../../Assets/images/shop/product/s6.jpg";
import product7 from "../../Assets/images/shop/product/s7.jpg";
import product8 from "../../Assets/images/shop/product/s8.jpg";

import prodtctOverlay1 from "../../Assets/images/shop/product/s-1.jpg";
import prodtctOverlay2 from "../../Assets/images/shop/product/s-2.jpg";
import prodtctOverlay3 from "../../Assets/images/shop/product/s-3.jpg";
import prodtctOverlay4 from "../../Assets/images/shop/product/s-4.jpg";
import prodtctOverlay5 from "../../Assets/images/shop/product/s-5.jpg";
import prodtctOverlay6 from "../../Assets/images/shop/product/s-6.jpg";
import prodtctOverlay7 from "../../Assets/images/shop/product/s-7.jpg";
import prodtctOverlay8 from "../../Assets/images/shop/product/s-8.jpg";

// import slider images
import single01 from '../../Assets/images/shop/product/single-1.jpg';
import single02 from '../../Assets/images/shop/product/single-2.jpg';
import single03 from '../../Assets/images/shop/product/single-3.jpg';
import single04 from '../../Assets/images/shop/product/single-4.jpg';
import single05 from '../../Assets/images/shop/product/single-5.jpg';
import single06 from '../../Assets/images/shop/product/single-6.jpg';


function ShopProductDetail() {

  const [products, setProducts] = useState([
      { id : 1, image : product1, imgOverlay : prodtctOverlay1, name : "Branded T-Shirt", price : "16.00", oldPrice : "21.00" },
      { id : 2, image : product2, imgOverlay : prodtctOverlay2, name : "Shopping Bag", price : "21.00", oldPrice : "25.00" },
      { id : 3, image : product3, imgOverlay : prodtctOverlay3, name : "Elegent Watch", price : "5.00", desc : "30% off" },
      { id : 4, image : product4, imgOverlay : prodtctOverlay4, name : "Casual Shoes", price : "18.00" , oldPrice : "22.00" },
      { id : 5, image : product5, imgOverlay : prodtctOverlay5, name : "Earphones", price : "3.00"  },
      { id : 6, image : product6, imgOverlay : prodtctOverlay6, name : "Elegent Mug", price : "4.50" , oldPrice : "6.50"},
      { id : 7, image : product7, imgOverlay : prodtctOverlay7, name : "Sony Headphones", price : "9.99", desc : "20% off" },
      { id : 8, image : product8, imgOverlay : prodtctOverlay8, name : "Wooden Stools", price : "22.00" , oldPrice : "25.00" },
  ]);
  const [topProducts, setTopProducts] = useState([
      { image : product1, name : "T-Shirt", oldPrice : "$22.00", NewPrice : "$18.00 " },
      { image : product3, name : "Watch", oldPrice : "$22.00", NewPrice : "$18.00 " },
      { image : product6, name : "Coffee Cup", oldPrice : "$22.00", NewPrice : "$18.00 " },
      { image : product8, name : "Wooden Stools", oldPrice : "$22.00", NewPrice : "$18.00 " },
  ]);

  let [responsive, setResponsive] = useState({
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  });

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [items, setItems] = useState(1);

  const addItem = () => {
    setItems(items + 1);
};

const removeItem = () => {
    if (items > 1) {
        setItems(items - 1);
    }
};

  let slider1 = useRef(null);
  let slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
    }, []);

const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  window.addEventListener('scroll', scrollNavigation, true);

  return () => {
    window.removeEventListener('scroll', scrollNavigation, true);
    },[products, setProducts, topProducts, setTopProducts, responsive, setResponsive]


    const settings = {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        draggable: true,
        pauseOnHover: true,
        asNavFor: nav2 ? nav2 : null,
        ref: slider => setNav1(slider),
    };
    
  
        const settings2 = {
        dots: false,
        infinite: true,
        autoplaySpeed: 1500,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: nav1,
        ref: slider => setNav2(slider),
        
        };
  
   
  

    return (
        <>

        <section className="section">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        {/* main slider */}

                        <Slider {...settings} asNavFor={slider2} ref={slider => slider1 = slider} >
                                    <div><img src={single01}  className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single02}  className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single03}  className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single04}  className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single05}  className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single06}  className="img-fluid rounded" alt="alt" /></div>

                                </Slider>

                                {/* Slider thumbnails */}
                            <Slider asNavFor={slider1} ref={slider => slider2 = slider} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} >
                                <div><img src={single01} className="img-fluid" alt=""/></div>
                                <div><img src={single02}  className="img-fluid" alt=""/></div>
                                <div><img src={single03}  className="img-fluid" alt=""/></div>
                                <div><img src={single04}  className="img-fluid" alt=""/></div>
                                <div><img src={single05} className="img-fluid" alt=""/></div>
                                <div><img src={single06} className="img-fluid" alt=""/></div>

                            </Slider>
                    </Col>

                    <Col md={7} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ml-md-4">
                            <h4 className="title">Branded T-Shirts</h4>
                            <h5 className="text-muted">$21.00 <del className="text-danger ml-2">$25.00</del> </h5>
                            <ul className="list-unstyled text-warning h5 mb-0">
                                <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                            </ul>

                            <h5 className="mt-4 py-2">Overview :</h5>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>

                            <ul className="list-unstyled feature-list text-muted">
                                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm" /></i> Digital Marketing Solutions for Tomorrow</li>
                                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm" /></i> Our Talented &amp; Experienced Marketing Agency</li>
                                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm" /></i> Create your own skin to match your brand</li>
                            </ul>

                            <Row className="mt-4 pt-2">
                                <Col lg={6} xs={12}>
                                    <div className="d-flex align-items-center">
                                        <h6 className="mb-0">Your Size:</h6>
                                        <ul className="list-unstyled mb-0 ml-3">
                                            <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-soft-primary">S</Link></li>
                                            <li className="list-inline-item ml-1"><Link to="#" className="btn btn-icon btn-soft-primary">M</Link></li>
                                            <li className="list-inline-item ml-1"><Link to="#" className="btn btn-icon btn-soft-primary">L</Link></li>
                                            <li className="list-inline-item ml-1"><Link to="#" className="btn btn-icon btn-soft-primary">XL</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={6} xs={12} className="mt-4 mt-lg-0">
                                    <div className="d-flex shop-list align-items-center">
                                        <h6 className="mb-0">Quantity:</h6>
                                        <div className="ml-3">
                                            <Input type="button" value="-" onClick={removeItem} className="minus btn btn-icon btn-soft-primary font-weight-bold" readOnly/>
                                            <Input type="text" step="1" min="1" name="quantity" value={items} title="Qty" readOnly className="btn btn-icon btn-soft-primary font-weight-bold ml-1 mr-1"/>
                                            <Input type="button" value="+" onClick={addItem} className="plus btn btn-icon btn-soft-primary font-weight-bold" readOnly/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Shop Now</Link>
                                <Link to="shop-cart" className="btn btn-soft-primary ml-2">Add to Cart</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-100 mt-60">
                <Row>
                    <Col xs={12}>
                        <h5 className="mb-0">Related Products</h5>
                    </Col>

                    <Col xs={12} className="mt-4">
                        <Slider {...settings2} className="owl-carousel owl-theme" >
                            {
                                products.map((product, key) =>
                                <div key={key} style={{marginLeft:5, marginRight:5}}>
                                    <Card className="shop-list border-0 position-relative overflow-hidden m-2">
                                        <div className="shop-image position-relative overflow-hidden rounded shadow">
                                            <Link to="shop-product-detail"><img src={product.image} className="img-fluid" alt="Landrick" /></Link>
                                            <Link to="shop-product-detail" className="overlay-work">
                                                <img src={product.imgOverlay} className="img-fluid" alt="Landrick" />
                                            </Link>
                                            <ul className="list-unstyled shop-icons">
                                                <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><i><FeatherIcon icon="heart" className="icons" /></i></Link></li>
                                                <li className="mt-2"><Link to="shop-product-detail" className="btn btn-icon btn-pills btn-soft-primary"><i><FeatherIcon icon="eye" className="icons" /></i></Link></li>
                                                <li className="mt-2"><Link to="shop-cart" className="btn btn-icon btn-pills btn-soft-warning"><i><FeatherIcon icon="shopping-cart" className="icons" /></i></Link></li>
                                            </ul>
                                        </div>
                                        <CardBody className="content pt-4 p-2">
                                            <Link to="shop-product-detail" className="text-dark product-name h6">{product.name}</Link>
                                            <div className="d-flex justify-content-between mt-1">
                                                <h6 className="text-muted small font-italic mb-0 mt-1">
                                                ${product.price}{" "}
                                                    {
                                                        product.oldPrice ? <del className="text-danger ml-2">${product.oldPrice}</del> : null
                                                    }
                                                    {
                                                        product.desc ? <span className="text-success ml-1">{product.desc}</span> : null
                                                    }    
                                                </h6>
                                                <ul className="list-unstyled text-warning mb-0">
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    </div>
                                )
                            }

                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  );
}

export default ShopProductDetail;