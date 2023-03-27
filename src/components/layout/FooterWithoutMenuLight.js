import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from 'feather-icons-react';

const FooterWithoutMenuLightSocialOnly = ({ className }) => {
    return (
        <>
            <footer className={"footer footer-bar " + className}>
                <Container className="text-center">
                    <Row className="align-items-center">
                        <Col sm="6">
                            <div className="text-sm-centre">
                                <p className="mb-0">© 2021-22. Developed by Master.</p>
                            </div>
                        </Col>

                        <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled social-icon social text-sm-right mb-0">
                                <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></i></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></i></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></i></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="github" className="fea icon-sm fea-social" /></i></Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default FooterWithoutMenuLightSocialOnly;
