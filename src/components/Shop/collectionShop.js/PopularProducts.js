import { useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// Import Images
import product9 from '../../../Assets/images/shop/product/s9.jpg';
import product10 from '../../../Assets/images/shop/product/s10.jpg';
import product11 from '../../../Assets/images/shop/product/s11.jpg';
import product12 from '../../../Assets/images/shop/product/s12.jpg';
import prodtctOverlay9 from '../../../Assets/images/shop/product/s-9.jpg';
import prodtctOverlay10 from '../../../Assets/images/shop/product/s-10.jpg';
import prodtctOverlay11 from '../../../Assets/images/shop/product/s-11.jpg';
import prodtctOverlay12 from '../../../Assets/images/shop/product/s-12.jpg';

const PopularProducts = () => {
  const [products] = useState([
    {
      id: 1,
      image: product9,
      imgOverlay: prodtctOverlay9,
      name: 'Coffee Cup / Mug',
      price: '16.00',
      oldPrice: '21.00',
    },
    {
      id: 2,
      image: product10,
      imgOverlay: prodtctOverlay10,
      name: 'Sunglasses',
      price: '21.00',
      oldPrice: '25.00',
    },
    {
      id: 3,
      image: product11,
      imgOverlay: prodtctOverlay11,
      name: 'Loafer Shoes',
      price: '5.00',
      desc: '30% off',
    },
    {
      id: 4,
      image: product12,
      imgOverlay: prodtctOverlay12,
      name: 'T-Shirts',
      price: '18.00',
      oldPrice: '22.00',
    },
  ]);


  return (
    <>
      <Container className="mt-100 mt-60">
        <Row>
          <Col xs={12}>
            <h5 className="mb-0">Popular Products</h5>
          </Col>
        </Row>

        <Row>
          {products.map((product, key) => (
            <Col key={key} lg={3} md={6} xs={12} className="mt-4 pt-2">
              <Card className="shop-list border-0 position-relative overflow-hidden">
                <div className="shop-image position-relative overflow-hidden rounded shadow">
                  <Link to="shop-product-detail"><img src={product.image} className="img-fluid" alt="shop"/></Link>
                  <Link to="shop-product-detail" className="overlay-work">
                    <img src={product.imgOverlay} className="img-fluid" alt="shop"/>
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
                      {product.oldPrice ? <del className="text-danger ml-2">${product.oldPrice}</del> : null}
                      {product.desc ? <span className="text-success ml-1">{product.desc}</span> : null}
                    </h6>
                    <ul className="list-unstyled text-warning mb-0">
                      <li className="list-inline-item"><i className="mdi mdi-star mr-1"></i></li>
                      <li className="list-inline-item"><i className="mdi mdi-star mr-1"></i></li>
                      <li className="list-inline-item"><i className="mdi mdi-star mr-1"></i></li>
                      <li className="list-inline-item"><i className="mdi mdi-star mr-1"></i></li>
                      <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default PopularProducts;