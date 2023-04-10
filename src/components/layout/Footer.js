import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Import Icons
import FeatherIcon from 'feather-icons-react';

// Import Images
import americanEx from '../../Assets/images/payments/american-ex.png';
import discover from '../../Assets/images/payments/discover.png';
import masterCard from '../../Assets/images/payments/master-card.png';
import paypal from '../../Assets/images/payments/paypal.png';
import visa from '../../Assets/images/payments/visa.png';

const Footer = () => {
  return (
    <>
      <footer className="footer footer-bar m-0">
        <Container className="text-center">
          <Row className= "align-items-center">
            <Col sm="4" xs="4" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <ul className="list-unstyled social-icon social mb-0 mt-4">
                <li className="list-inline-item mr-2">
                  <Link to="" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item mr-2">
                  <Link to="" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item mr-2">
                  <Link to="" className="rounded">
                    <i>
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </i>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm="4" xs="4">
              <div className="text-sm-centre">
                <p className="mb-0">© 2022-23. Developed by Kahiko Master.</p>
              </div>
            </Col>

            <Col sm="4" xs="4" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <ul className="list-unstyled text-sm-right mb-0">
                <li className="list-inline-item mr-2">
                  <Link to="">
                    <img
                      src={americanEx}
                      className="avatar avatar-ex-sm"
                      title="American Express"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="list-inline-item mr-2">
                  <Link to="">
                    <img
                      src={discover}
                      className="avatar avatar-ex-sm"
                      title="Discover"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="list-inline-item mr-2">
                  <Link to="">
                    <img
                      src={masterCard}
                      className="avatar avatar-ex-sm"
                      title="Master Card"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="list-inline-item mr-2">
                  <Link to="">
                    <img
                      src={paypal} 
                      className="avatar avatar-ex-sm" 
                      title="Paypal" 
                      alt=""
                      />
                  </Link></li>
                <li className="list-inline-item mr-1">
                  <Link to="">
                    <img 
                    src={visa} 
                    className="avatar avatar-ex-sm" 
                    title="Visa" 
                    alt=""
                    />
                  </Link>
                  </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>        
    </>
    );
}

export default Footer;
